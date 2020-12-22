$(document).ready(function() {



    $('#groupsmenutable').DataTable({
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

    $(".studentlevel").change(function() {
        var LeveLsSelectedId = $(".studentlevel option:selected").val();
        var t = $('#groupsmenutable').DataTable();
        t.clear().draw();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/groups/getgroupsfromlevels/" + LeveLsSelectedId);
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

                    if (res[index][6] == 0) {
                        const gname = '<span class="student_group">' + res[index][0] + '</span>';
                        const glevel = '<span class="student_level">' + currentlevels[res[index][2] - 1] + '</span>';
                        const dateontext = '<span class="group_time">' + res[index][1] + '</span>';
                        const Sid = res[index][3];
                        const btnedit = '<td><button data-toggle="modal" data-target="#EditGroup" class="edit_button">تعديل</button></td>';
                        const btndelet = '<td><button type="button" class="btn btn-danger btnDelete" data-toggle="modal" data-target="#deletestudent"> حذف </button></td>';
                        const TempArr = [gname, glevel, dateontext, btnedit, btndelet, Sid]; +
                        QuestionsArray.push(TempArr);
                    }
                }
                t.rows.add(QuestionsArray).draw(false);
            }
        };

    });


    $('body').on("click", '.btnDelete', function() {
        selectedRow = $(this).closest('tr');
        idSelectedRow = $(this).closest('tr').find(".hide_column").text();
        $('.confirm-delete').click(function() {
            axios({
                    method: 'get',
                    url: '/admin/groups/delete/' + idSelectedRow,
                }).then(function(response) {
                    selectedRow.remove();
                    delete selectedRow;
                    delete idSelectedRow;
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);

                });
        });

        $('.refuse-button').click(function() {
            delete selectedRow;
            delete idSelectedRow;
        });
    });

    $('body').on("click", '.add-group', function() {
        grouplevel = $('.grouplevel').val();
        grouptime = $('.grouptime').val();
        groupnumber = $('.groupnumber').val();
        console.log(grouplevel, grouptime, groupnumber);

        const params = new URLSearchParams();
        params.append('dateontext', String(grouptime));
        params.append('name', String(groupnumber));
        params.append('levels_id', parseInt(grouplevel));

        axios({
                method: 'post',
                url: '/admin/groups/add',
                data: params
            }).then(function(response) {
                console.log(response.data);
            })
            .catch(function(error) {
                console.log(error);
            });


    });



    $("#groupsmenutable").on("click", ".edit_button", function() {
        var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
        var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
        var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
        $("#EditGroup").on("click", ".edit_button", function() {
            var str = $(".student_group2").val();
            $(columOne).text(str);
            var str2 = $(".student_level2").val();
            $(columTwo).text(str2);

            var str3 = $(".group_time2").val();
            $(columThree).text(str3);

            var str4 = $(".hide_column2").val();

            const params = new URLSearchParams();
            params.append('id', parseInt(str4));
            params.append('dateontext', String(str3));
            params.append('name', String(str));
            params.append('levels_id', parseInt(str2));

            axios({
                    method: 'post',
                    url: '/admin/groups/edit',
                    data: params
                }).then(function(response) {
                    console.log(response.data);
                })
                .catch(function(error) {
                    console.log(error);
                });

        });
        $("#EditGroup").on("show.bs.modal", function(e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentLevelTableValue = _row.find(".student_level").text();
            $(this).find(".student_level2").val(_studentLevelTableValue);
            var _studentGroupTableValue = _row.find(".student_group").text();
            $(this).find(".student_group2").val(_studentGroupTableValue);
            var _studentUserNameTableValue = _row.find(".group_time").text();
            $(this).find(".group_time2").val(_studentUserNameTableValue);
            var _idTableValue = _row.find(".hide_column").text();
            $(this).find(".hide_column2").val(_idTableValue);


        });
    });



});