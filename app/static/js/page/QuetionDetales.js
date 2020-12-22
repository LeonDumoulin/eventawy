$(document).ready(function() {
    $('#examsmenutable').DataTable({
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


    $('#questionbankmenutable').DataTable({
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


    function questionbanktable(url) {
        var t = $('#questionbankmenutable').DataTable();
        t.clear().draw();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];

                for (let index = 0; index < res.length; index++) {
                    if (res[index][17] == 0) {
                        const Question = `<span class=""> ${decodeURI(atob(res[index][0]))} </span>`;
                        const Qtype = `<span class=""> ${res[index][13]} </span>`;
                        const Qlevel = `<span class=""> ${res[index][21]} </span>`; // 
                        const Qunit = `<span class=""> ${res[index][22]} </span>`;
                        const Qlesson = `<span class=""> ${res[index][23]} </span>`;
                        const Qid = res[index][14];
                        const detBtn = '<button class="delete-button" data-toggle="modal" data-target="#deletequestionbank">حذف</button>';
                        const TempArr = [Question, Qtype, Qlevel, Qunit, Qlesson, detBtn, Qid];
                        QuestionsArray.push(TempArr);
                    }
                }
                t.rows.add(QuestionsArray).draw(false);
            }
        };
    }

    function examsmenutable(url) {
        var t = $('#examsmenutable').DataTable();
        t.clear().draw();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);
                var QuestionsArray = [];

                for (let index = 0; index < res.length; index++) {
                    if (res[index][9] == 0) {
                        const Tname = `<span class=""> ${res[index][0]} </span>`;
                        const Tlevel = `<span class=""> ${res[index][13]} </span>`;
                        const Tdate = `<span class=""> ${res[index][1]} </span>`; // 
                        const TnumQ = `<span class=""> ${res[index][3]} </span>`;
                        const Ttime = `<span class=""> ${res[index][2]} </span>`;
                        const Tid = res[index][6];
                        const detBtn = '<button class="delete-button" data-toggle="modal" data-target="#deleteexam"> حذف </button>';
                        const resultBtn = '<button class="ok-button" data-toggle="modal" data-target="#showresult"> النتائج </button>';
                        const showBtn = '<button class="show-button" data-toggle="modal" onclick="window.open(\'/admin/examview/' + res[index][6] + ' \',\'_blank\')"> عرض </button>';
                        const TempArr = [Tname, Tlevel, Tdate, TnumQ, Ttime, detBtn, resultBtn, showBtn, Tid];
                        QuestionsArray.push(TempArr);
                    }
                }
                t.rows.add(QuestionsArray).draw(false);
            }
        };
    }

    questionbanktable('/returnapi/examsBank');
    examsmenutable('/returnapi/exam')
        // http://127.0.0.1:8787/returnapi/examsBank
        /* 
            $("#questionbankmenutable").on("click", ".edit_button", function() {
                var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
                var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
                var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
                var columFour = $(this).closest("tr").eq(0).find("td span").eq(3);

                console.log(123);
                $("#editquestionbank").on("click", ".edit_button", function() {
                    var str = $(".question_bank_name_edit").val();
                    $(columOne).text(str);
                    console.log(str);
                    var str2 = $(".question_bank_level_edit").val();
                    $(columTwo).text(str2);

                    var str3 = $(".question_bank_unit_edit").val();
                    $(columThree).text(str3);

                    var str4 = $(".question_bank_lesson_edit").val();
                    $(columFour).text(str4);


                    columOne = "";
                    columTwo = "";
                    columThree = "";
                    columFour = "";

                });
                $("#editquestionbank").on("show.bs.modal", function(e) {
                    var _button = $(e.relatedTarget);
                    var _row = _button.parents("tr");
                    var _studentNameTableValue = _row.find(".question_bank_name").text();
                    $(this).find(".question_bank_name_edit").val(_studentNameTableValue); // from table to model
                    var _studentPhoneTableValue = _row.find(".question_bank_level").text();
                    $(this).find(".question_bank_level_edit").val(_studentPhoneTableValue);
                    var _studentLevelTableValue = _row.find(".question_bank_unit").text();
                    $(this).find(".question_bank_unit_edit").val(_studentLevelTableValue);
                    var _studentGroupTableValue = _row.find(".question_bank_lesson").text();
                    $(this).find(".question_bank_lesson_edit").val(_studentGroupTableValue);
                });
            });
         */
        /*     $("#examsmenutable").on("click", ".edit_button", function() {
                var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
                var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
                var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
                var columFour = $(this).closest("tr").eq(0).find("td span").eq(3);
                var columFive = $(this).closest("tr").eq(0).find("td span").eq(4);
                // console.log(123);
                $("#editexam").on("click", ".edit_button", function() {
                    var str = $(".exam_name").val();
                    $(columOne).text(str);
                    console.log(str);
                    var str2 = $(".studentlevel").val();
                    $(columTwo).text(str2);

                    var str3 = $(".exam_content").val();
                    $(columThree).text(str3);

                    var str4 = $(".exam_count").val();
                    $(columFour).text(str4);

                    var str5 = $(".exam_time").val();
                    $(columFive).text(str5);


                    columOne = "";
                    columTwo = "";
                    columThree = "";
                    columFour = "";
                    columFive = "";
                });
                $("#editexam").on("show.bs.modal", function(e) {
                    var _button = $(e.relatedTarget);
                    var _row = _button.parents("tr");
                    var _studentNameTableValue = _row.find(".exam_name").text();
                    $(this).find(".exam_name_edit").val(_studentNameTableValue); // from table to model
                    var _studentPhoneTableValue = _row.find(".studentlevel").text();
                    $(this).find(".studentlevel_edit").val(_studentPhoneTableValue);
                    var _studentLevelTableValue = _row.find(".exam_content").text();
                    $(this).find(".exam_content_edit").val(_studentLevelTableValue);
                    var _studentGroupTableValue = _row.find(".exam_count").text();
                    $(this).find(".exam_count_edit").val(_studentGroupTableValue);
                    var _studentUserNameTableValue = _row.find(".exam_time").text();
                    $(this).find(".exam_time_edit").val(_studentUserNameTableValue);
                });
            });
         */
    $('#questionbankmenutable').on("click", '.delete-button', function() {
        selectedRow = $(this).closest("tr");
        idSelectedRow = $(this).closest("tr").find(".hide_column").text();

        $(".confirm-delete").click(function() {

            axios({
                    method: 'get',
                    url: '/returnapi/examsBankdelete/' + idSelectedRow,
                }).then(function(response) {
                    if (response.data.msg == 'done') {
                        selectedRow.remove();
                    } else {
                        alert('error');
                    }

                    delete selectedRow;
                    delete idSelectedRow;
                    console.log(response.data);
                })
                .catch(function(error) {});
        });
    });


    $('#examsmenutable').on("click", '.delete-button', function() {
        selectedRow = $(this).closest("tr");
        idSelectedRow = $(this).closest("tr").find(".hide_column").text();

        $(".confirm-delete").click(function() {

            axios({
                    method: 'get',
                    url: '/returnapi/examdelete/' + idSelectedRow,
                }).then(function(response) {
                    if (response.data.msg == 'done') {
                        selectedRow.remove();
                    } else {
                        alert('error');
                    }

                    delete selectedRow;
                    delete idSelectedRow;
                    console.log(response.data);
                })
                .catch(function(error) {});
        });
    });


    $(".jslevel").change(function() {
        $('#jsunit').empty();
        var LeveLsSelectedId = $("#jslevel option:selected").val();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/admin/units/getunitfromlevels/" + LeveLsSelectedId);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                AAA = Object.values(RDS);
                $('#jsunit').append('<option selected disabled>الوحدة</option>');
                for (let i = 0; i < AAA.length; i++) {
                    const element = AAA[i];
                    $('#jsunit').append('<option value="' + element.id + '">' + element.name + '</option>');
                }
                questionbanktable('/returnapi/examsBank/' + LeveLsSelectedId);

            }
        };
    });

    $(".jsunit").change(function() {
        $('#LessonsList').empty();
        var LeveLsSelectedId1 = $("#jsunit option:selected").val();
        var LeveLsSelectedId = $("#jslevel option:selected").val();
        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/admin/lessons/getlessonsfromunits/" + LeveLsSelectedId1);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                AAA = Object.values(RDS);
                $('#LessonsList').append('<option selected disabled>الدرس</option>');
                for (let i = 0; i < AAA.length; i++) {
                    const element = AAA[i];
                    $('#LessonsList').append('<option value="' + element.id + '">' + element.name + '</option>');
                }
                questionbanktable('/returnapi/examsBank/' + LeveLsSelectedId + '/' + LeveLsSelectedId1);

            }
        };
    });

    $(".LessonsList").change(function() {
        var LeveLsSelectedId2 = $("#LessonsList option:selected").val();
        var LeveLsSelectedId = $("#jslevel option:selected").val();
        var LeveLsSelectedId1 = $("#jsunit option:selected").val();

        const xhr = new XMLHttpRequest();
        questionbanktable('/returnapi/examsBank/' + LeveLsSelectedId + '/' + LeveLsSelectedId1 + '/' + LeveLsSelectedId2);
    });


    $(".examsmenutable-level").change(function() {
        var LeveLsSelectedId2 = $("#examsmenutable-level option:selected").val();
        examsmenutable('/returnapi/exam/' + LeveLsSelectedId2);
    });
    //examsmenutable-level












    $('#examsmenutable').on("click", '.ok-button', function() {
        selectedRow = $(this).closest("tr");
        idSelectedRow = $(this).closest("tr").find(".hide_column").text();

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "/showstudentresultfromexam/" + idSelectedRow);
        xhr.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        xhr.send();
        xhr.onreadystatechange = function() {
            if (this.readyState === 4 && this.status === 200) {
                RDS = JSON.parse(this.responseText);
                let input = RDS;
                let res = input.map(Object.values);



                var QuestionsArray2 = [];

                for (let index = 0; index < res.length; index++) {

                    const Sname = res[index][11];
                    const Smark = res[index][2];
                    const Sfulmark = res[index][3];

                    const markupdata = "<tr>" + "<td>" + Sname + "</td>" + "<td>" + Smark + "</td>" + "<td>" + Sfulmark + "</td>" + "<td>" + Sfulmark + "</td>" + "</tr>";
                    QuestionsArray2.push(markupdata);

                }

                for (let index = 0; index < QuestionsArray2.length; index++) {
                    $("#AllStudentOnexam tbody").append(QuestionsArray2[index]);
                }

            }
        };
    });

























    $("#createexam").on("click", ".ok-button", function() {
        SelectedLessons = document.getElementsByName('lessonone');
        SelectedLessonsArray = []
        for (var i = 0, length = SelectedLessons.length; i < length; i++) {
            if (SelectedLessons[i].checked) {
                SelectedLessonsArray.push(SelectedLessons[i].value);
            }
        }
        ExamName = $('#exam_name_add').val();
        ExamLevel = $('#studentlevel_addexam').val();
        ExamNumQ = $('#exam_count_add').val();
        ExamTime = $('#exam_time_add').val();
        ExamDate = $('#exam_date_add').val();


        SelectedLessonsString = SelectedLessonsArray.toString()
            // console.log(ExamName);
            // console.log(ExamLevel);
            // console.log(ExamNumQ);
            // console.log(ExamTime);
            // console.log(ExamDate);
            // console.log(SelectedLessonsArray);
            // console.log(SelectedLessonsString);


        // 

        const params = new FormData();
        params.append('name', String(ExamName));
        params.append('exam_date', String(ExamDate));
        params.append('TimePerMin', parseInt(ExamTime));
        params.append('numberOfQuestion', parseInt(ExamNumQ));
        params.append('levels_id', parseInt(ExamLevel));
        params.append('lessons_id', String(SelectedLessonsString));

        axios({
                method: 'post',
                url: '/admin/exam/addexamAndAddQuestions',
                data: params,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                if (response.data == 'alldone') {
                    location.reload();
                }

            })
            .catch(function(error) {
                console.log(error);
            });

    });












    Lv1 = $(".unitlessons4level-1");
    Lv2 = $(".unitlessons4level-2");
    Lv3 = $(".unitlessons4level-3");
    Lv1.css("display", "none");
    Lv2.css("display", "none");
    Lv3.css("display", "none");
    $("#studentlevel_addexam")
        .change(function() {

            $("#studentlevel_addexam option:selected").each(function() {
                var value = $(this).val();
                if (value == "1") {
                    Lv1.css("display", "block");
                    Lv2.css("display", "none");
                    Lv3.css("display", "none");
                } else if (value == "2") {
                    Lv1.css("display", "none");
                    Lv2.css("display", "block");
                    Lv3.css("display", "none");
                } else if (value == "3") {
                    Lv1.css("display", "none");
                    Lv2.css("display", "none");
                    Lv3.css("display", "block");
                } else {
                    Lv1.css("display", "none");
                    Lv2.css("display", "none");
                    Lv3.css("display", "none");
                }
            });

        });
});