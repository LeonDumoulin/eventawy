$(document).ready(function() {
    $('#pendingrequeststable').DataTable({
        dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
        "lengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
        ],
        buttons: [

            {
                extend: "print",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            {
                extend: "csv",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            {
                extend: "excel",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            // {
            //   extend: "pdf",
            //   exportOptions: {
            //     columns: ":visible",
            //     autoPrint: true,
            //     orientation: "landscape",
            //   },
            // },
            {
                extend: "copy",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            "colvis",
        ],
        "language": {
            search: '<strong style="padding:5px">البحث</strong>',
            searchPlaceholder: 'بحث',
            "paginate": {
                "next": "التالي",
                "previous": "السابق"
            }
        },
        columnDefs: [{
            targets: [-1],
            className: "hide_column"
        }]
    });
    $('#studentmenutable').DataTable({
        dom: "B<'row'<'col-sm-12 col-md-6'f><'ml-3'l>>rtip",
        "lengthMenu": [
            [5, 10, 15, -1],
            [5, 10, 15, "All"]
        ],
        buttons: [

            {
                extend: "print",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            {
                extend: "csv",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            {
                extend: "excel",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            // {
            //   extend: "pdf",
            //   exportOptions: {
            //     columns: ":visible",
            //     autoPrint: true,
            //     orientation: "landscape",
            //   },
            // },
            {
                extend: "copy",
                exportOptions: {
                    columns: ":visible",
                    autoPrint: true,
                    orientation: "landscape",
                },
            },
            "colvis",
        ],
        "language": {
            search: '<strong style="padding:5px">البحث</strong>',
            searchPlaceholder: 'بحث',
            "paginate": {
                "next": "التالي",
                "previous": "السابق"
            }
        },
        columnDefs: [{
            targets: [-1],
            className: "hide_column"
        }]
    });

    $(".lstudentgroup").change(function() {
        var LeveLsSelectedId = $("#lstudentgroup option:selected").val();
        var t = $('#studentmenutable').DataTable();
        t.clear().draw();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/admin/student/group/" + LeveLsSelectedId);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];
                var currentlevels = ["الصف الاول الثانوى", "الصف الثانى الثانوى", "الصف الثالث الثانوى"];

                for (let index = 0; index < res.length; index++) {
                    if (res[index][10] == 3 || res[index][10] == 2) {
                        const Sname = `<span class="student_name"> ${res[index][0]} </span>`;
                        const Suname = `<span class="student_user_name"> ${res[index][1]} </span>`;
                        const Spass = `<span class="user_password"> ${res[index][2]} </span>`;
                        const Sphone = `<span class="student_phone"> ${res[index][3]} </span>`;
                        const Sgroup = `<span class="student_group"> ${res[index][4]} </span>`;
                        const Slevel = `<span class="student_level"> ${currentlevels[res[index][5]-1]} </span>`;
                        const Sid = res[index][7];
                        //const EdtBut = '<td><button type="button" class="btn btn-info edit_button" data-toggle="modal" data-target="#EditStudent">تعديل</button></td>';
                        const StatBtn = res[index][10] == 3 ? '<td><button type="button" class="btn btn-warning stopStudent"> ايقاف مؤقت </button></td>' : '<td><button type="button" class="btn btn-success AcseptStudent2"> تفعيل </button></td>'
                        const detBtn = '<td><button class="deletebutton22" data-toggle="modal" data-target="#deletestudent"> حذف </button></td>';
                        const TempArr = [Sname, Suname, Sphone, Sgroup, Spass, Slevel, StatBtn, detBtn, Sid];
                        QuestionsArray.push(TempArr);
                    }
                }
                t.rows.add(QuestionsArray).draw(false);
            }
        };

    });

    $('body').on("click", '.deletebutton22', function() {
        selectedRow = $(this).closest('tr');
        idSelectedRow = $(this).closest('tr').find(".hide_column").text();

        $('.confirm-delete').click(function() {
            axios({
                    method: 'get',
                    url: '/admin/student/delete/' + idSelectedRow,
                }).then(function(response) {
                    selectedRow.remove();
                    delete selectedRow;
                    delete idSelectedRow;
                    console.log(response.data);
                })
                .catch(function(error) {});
        });

        $('.refuse-button').click(function() {
            delete selectedRow;
            delete idSelectedRow;
        });
    });



    $('.AcseptStudent').click(function() {
        confDlt = $(this).closest('tr');
        id = $(this).closest('tr').find(".hide_column").text();
        axios({
                method: 'get',
                url: '/admin/student/active/' + id,
            }).then(function(response) {
                confDlt.remove();
                delete confDlt;
                delete id;
            })
            .catch(function(error) {});
    });

    $("#lstudentlevel").change(function() {
        $('#lstudentgroup').empty();
        var LeveLsSelectedId = $("#lstudentlevel option:selected").val();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/groups/getgroupsfromlevels/" + LeveLsSelectedId);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                AAA = Object.values(RDS);
                $('#lstudentgroup').append('<option value="0"></option>');

                for (let i = 0; i < AAA.length; i++) {
                    const element = AAA[i];
                    $('#lstudentgroup').append('<option value="' + element.id + '">' + element.name + '</option>');
                }

            }
        };
    });




    $('body').on("click", '.AcseptStudent2', function() {
        confDlt = $(this).closest('tr');
        id = $(this).closest('tr').find(".hide_column").text();
        button = $(this).closest('tr').find(".btn-success");
        axios({
                method: 'get',
                url: '/admin/student/active/' + id,
            }).then(function(response) {
                button.removeClass("btn btn-success AcseptStudent2");
                button.addClass("btn btn-warning stopStudent ");
                button.html('ايقاف مؤقت');

                delete confDlt;
                delete id;
                delete button;

            })
            .catch(function(error) {});
    });

    $('body').on("click", ".stopStudent", function() {
        confDlt = $(this).closest('tr');
        id = $(this).closest('tr').find(".hide_column").text();
        button = $(this).closest('tr').find(".btn-warning");

        axios({
                method: 'get',
                url: '/admin/student/disactive/' + id,
            }).then(function(response) {
                button.removeClass("btn btn-warning stopStudent");
                button.addClass("btn btn-success AcseptStudent2");
                button.html('تفعيل');
                delete confDlt;
                delete id;
                delete button;
            })
            .catch(function(error) {});
    });











    $("#studentmenutable").on("click", ".edit_button", function() {

        //read data from table to variables
        // اما ادوس على زرار الموديل
        columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
        columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
        columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
        columFour = $(this).closest("tr").eq(0).find("td span").eq(3);
        columFive = $(this).closest("tr").eq(0).find("td span").eq(4);
        columSix = $(this).closest("tr").eq(0).find("td span").eq(5);
        // end read data

        $("#EditStudent").on("show.bs.modal", function(e) {

            // get data from table to model
            // اما الموديل يفتح
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".student_name").text();
            $(this).find(".student_name").val(_studentNameTableValue);
            var _studentPhoneTableValue = _row.find(".student_phone").text();
            $(this).find(".student_phone").val(_studentPhoneTableValue);
            var _studentLevelTableValue = _row.find(".student_level").text();
            $(this).find(".student_level option:contains(" + _studentLevelTableValue + ")").prop({ selected: true });
            var _studentGroupTableValue = _row.find(".student_group").text();
            $(this).find(".student_group option:contains(" + _studentGroupTableValue + ")").prop({ selected: true });
            var _studentUserNameTableValue = _row.find(".student_user_name").text();
            $(this).find(".student_user_name").val(_studentUserNameTableValue);
            var _studentPasswordTableValue = _row.find(".user_password").text();
            $(this).find(".user_password").val(_studentPasswordTableValue);
        });

        $("#EditStudent").on("click", ".edit-button", function() {
            // اما ادوس على زرار تعديل من الموديل
            // get data from model to table 
            str = $(".student_name").val();
            $(columOne).text(str);

            str2 = $(".student_phone").val();
            $(columTwo).text(str2);

            str3 = $(".student_level").val();
            $(columThree).text(str3);

            str4 = $(".student_group").val();
            $(columFour).text(str4);

            str5 = $(".student_user_name").val();
            $(columFive).text(str5);

            str6 = $(".user_password").val();
            $(columSix).text(str6);

            delete columOne
            delete columTwo
            delete columThree
            delete columFour
            delete columFive
            delete columSix
            delete str
            delete str2
            delete str3
            delete str4
            delete str5
            delete str6


        });
    });











});