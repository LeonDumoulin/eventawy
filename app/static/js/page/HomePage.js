$(document).ready(function() {

    $('#OrgAppPayment').DataTable({
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
    $('#OrgEmployee').DataTable({
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

    $('#OrgEvents').DataTable({
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

    $('#UsersOnEvent').DataTable({
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


    function OrgAppPayment_table(id) {
        var t = $('#OrgAppPayment').DataTable();
        t.clear().draw();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/appadmin/homepage/payment/orgs/" + id);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];
                var QuestionsArray2 = [];
                var QuestionsArray3 = [];
                var today = new Date();
                var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
                for (let index = 0; index < res.length; index++) {
                    if (res[index][10] == 3 || res[index][10] == 2) {
                        const Sname = res[index][0];
                        const Suname = res[index][1];
                        const Spass = res[index][2];
                        const Sphone = res[index][3];
                        const Sid = res[index][7];
                        const Sstate = res[index][6] == date ? '<span style="color:#27AE60;">حاضر</span>' : '<span style="color:#EB5757;">غائب</span>';
                        const TempArr = [Sname, Suname, Spass, Sphone, Sstate, Sid];
                        const markupdata = "<tr>" + "<td>" + Sname + "</td>" + "<td>" + Suname + "</td>" + "<td>" + Sphone + "</td>" + "<td>" + Spass + "</td>" + "</tr>";
                        const markupdata2 = "<tr>" + "<td>" + Sname + "</td>" + "<td>" + Sstate + "</td>" + "<td>" + Sphone + "</td>" + "</tr>";
                        QuestionsArray.push(TempArr);
                        QuestionsArray2.push(markupdata);
                        QuestionsArray3.push(markupdata2);
                    }
                }
                t.rows.add(QuestionsArray).draw(false);
                for (let index = 0; index < QuestionsArray2.length; index++) {
                    $("#AllStudentOnGroup tbody").append(QuestionsArray2[index]);
                }

                for (let index = 0; index < QuestionsArray3.length; index++) {
                    $("#AllStudentOnGroupAttend tbody").append(QuestionsArray3[index]);
                }
            }
        };

    }

    function OrgEmployee_table(id) {
        var latepaystable = $('#OrgEmployee').DataTable();
        latepaystable.clear().draw();
        const xhr2 = new XMLHttpRequest();

        xhr2.open("GET", "/appadmin/homepage/payment/orgs/" + id);
        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr2.send();
        xhr2.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];
                for (let index = 0; index < res.length; index++) {
                    const Sid = res[index][0];
                    const Sname = '<span class="student_name">' + res[index][1] + '</span>';
                    const m1 = res[index][2] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m2 = res[index][3] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m3 = res[index][4] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m4 = res[index][5] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m5 = res[index][6] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m6 = res[index][7] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m7 = res[index][8] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m8 = res[index][9] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m9 = res[index][10] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m10 = res[index][11] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m11 = res[index][12] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m12 = res[index][13] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const edit = '<button class="edit_button" data-toggle="modal" data-target="#editpayment">تعديل</button>';
                    const push = '<button class="ok-button" data-toggle="modal" data-target="#paymentStudent">دفع</button>';
                    const TempArr = [Sname, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, edit, push, Sid];
                    QuestionsArray.push(TempArr);
                }
                latepaystable.rows.add(QuestionsArray).draw(false);
            }
        };

    }

    function OrgEvents_table(id) {

        var latepaystable = $('#OrgEvents').DataTable();
        latepaystable.clear().draw();
        const xhr2 = new XMLHttpRequest();

        xhr2.open("GET", "/appadmin/homepage/payment/orgs/" + id);
        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr2.send();
        xhr2.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];
                for (let index = 0; index < res.length; index++) {
                    const Sid = res[index][0];
                    const Sname = '<span class="student_name">' + res[index][1] + '</span>';
                    const m1 = res[index][2] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m2 = res[index][3] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m3 = res[index][4] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m4 = res[index][5] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m5 = res[index][6] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m6 = res[index][7] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m7 = res[index][8] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m8 = res[index][9] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m9 = res[index][10] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m10 = res[index][11] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m11 = res[index][12] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m12 = res[index][13] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const edit = '<button class="edit_button" data-toggle="modal" data-target="#editpayment">تعديل</button>';
                    const push = '<button class="ok-button" data-toggle="modal" data-target="#paymentStudent">دفع</button>';
                    const TempArr = [Sname, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, edit, push, Sid];
                    QuestionsArray.push(TempArr);
                }
                latepaystable.rows.add(QuestionsArray).draw(false);
            }
        };

    }

    function UsersOnEvent_table(id) {

        var latepaystable = $('#UsersOnEvent').DataTable();
        latepaystable.clear().draw();
        const xhr2 = new XMLHttpRequest();

        xhr2.open("GET", "/appadmin/homepage/payment/orgs/" + id);
        xhr2.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr2.send();
        xhr2.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];
                for (let index = 0; index < res.length; index++) {
                    const Sid = res[index][0];
                    const Sname = '<span class="student_name">' + res[index][1] + '</span>';
                    const m1 = res[index][2] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m2 = res[index][3] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m3 = res[index][4] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m4 = res[index][5] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m5 = res[index][6] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m6 = res[index][7] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m7 = res[index][8] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m8 = res[index][9] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m9 = res[index][10] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m10 = res[index][11] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m11 = res[index][12] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const m12 = res[index][13] == null ? '<span style="color:#EB5757;">---</span>' : '<span style="color:#27AE60;">دفع</span>';
                    const edit = '<button class="edit_button" data-toggle="modal" data-target="#editpayment">تعديل</button>';
                    const push = '<button class="ok-button" data-toggle="modal" data-target="#paymentStudent">دفع</button>';
                    const TempArr = [Sname, m1, m2, m3, m4, m5, m6, m7, m8, m9, m10, m11, m12, edit, push, Sid];
                    QuestionsArray.push(TempArr);
                }
                latepaystable.rows.add(QuestionsArray).draw(false);
            }
        };

    }


    $("#current_Orgs_v").change(function() {
        var Org_CurrentId = $("#current_Orgs option:selected").val();
        axios({
                method: 'get',
                url: "/appadmin/homepage/orgs/" + Org_CurrentId,
            }).then(function(response) {

                $("#current_orgname").text(response.data.msg.name);
                $("#current_orgtype").text(response.data.msg.name);

                OrgAppPayment_table(Org_CurrentId);
                OrgEmployee_table(Org_CurrentId);
                OrgEvents_table(Org_CurrentId);
                UsersOnEvent_table(Org_CurrentId);

            })
            .catch(function(error) {});
    });

    // زرار الدفع من الجدول
    $("#latepaystable").on("click", ".ok-button", function() {

        selectAlltdFromRow = $(this).closest('tr').eq(0).find('td');

        // اما الموديل يفتح
        // باخد الداتا من الجدول و اوديها الموديل
        $("#paymentStudent").on("show.bs.modal", function(e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".student_name").text();
            var _studentIdTableValue = _row.find(".hide_column").text();
            $(this).find(".student_name").val(_studentNameTableValue); // from table to model
            $(this).find(".hide_column").val(_studentIdTableValue); // from table to model
        });
    });

    // اما ندوس زرار سداد من الموديل
    $("#paymentStudent").on("click", ".ok-button", function() {
        student_id = $(".hide_column").val();
        month_id = $("#studentlevelpaymentmodal-payment option:selected").val();
        month = 'month' + month_id;

        const params = new URLSearchParams();
        params.append('students_id', parseInt(student_id));
        params.append('month', String(month));

        axios({
                method: 'post',
                url: '/admin/membership/add',
                data: params
            }).then(function(respornse) {

                selectAlltdFromRow.eq(month_id).html('<span style="color:#27AE60;">دفع</span>');
            })
            .catch(function(error) {
                console.log(error);
            });
    });

    //    دا زرار التعديل من الجدول

    $("#latepaystable").on("click", ".edit_button", function() {
        selectAlltdFromRow = $(this).closest('tr').eq(0).find('td');

        // اما الموديل يفتح
        // باخد الداتا من الجدول و اوديها الموديل
        $("#editpayment").on("show.bs.modal", function(e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".student_name").text();
            var _studentIdTableValue = _row.find(".hide_column").text();
            $(this).find(".student_name").val(_studentNameTableValue); // from table to model
            $(this).find(".hide_column1").val(_studentIdTableValue); // from table to model

        });
    });

    $("#editpayment").on("click", ".edit-button", function() {
        student_id = $(".hide_column1").val();
        month_id = $("#studentlevelpaymentmodal option:selected").val();
        month = 'month' + month_id;
        paymentState = document.getElementById("cancelpayment").checked;

        if (paymentState == true) {
            const params = new URLSearchParams();
            params.append('students_id', parseInt(student_id));
            params.append('month', String(month));
            axios({
                    method: 'post',
                    url: '/admin/membership/edit',
                    data: params
                }).then(function(respornse) {
                    if (respornse.data == 'done') {
                        selectAlltdFromRow.eq(month_id).html('<span style="color:#EB5757;">---</span>');
                    }

                })
                .catch(function(error) {
                    console.log(error);
                });
        }

    });


    $("#paymentStudent-absolute").on("click", ".ok-button", function() {
        student_id = $("#studentphonepaymentmodal").val();
        month_id = $("#studentlevelpaymentmodal-absolute option:selected").val();
        month = 'month' + month_id;

        const params = new URLSearchParams();
        params.append('students_id', parseInt(student_id));
        params.append('month', String(month));

        axios({
                method: 'post',
                url: '/admin/membership/add',
                data: params
            }).then(function(respornse) {
                console.log(respornse.data);
                //selectAlltdFromRow.eq(month_id).html('<span style="color:#27AE60;">دفع</span>');
            })
            .catch(function(error) {
                console.log(error);
            });
    });

});