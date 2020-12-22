$(document).ready(function() {
    var counter = 1;
    $("select")
        .change(function() {
            var mcqQuestion = $(".mcq-question");
            var trueFalse = $(".true-false-question");
            var imagesQuestion = $(".images-question");
            $("select option:selected").each(function() {
                var value = $(this).val();
                if (value === "mcq_question") {
                    trueFalse.css("display", "none");
                    mcqQuestion.css("display", "block");
                    imagesQuestion.css("display", "none");
                } else if (value === "true_fales_question") {
                    trueFalse.css("display", "block");
                    mcqQuestion.css("display", "none");
                    imagesQuestion.css("display", "none");
                } else if (value === "images_question") {
                    imagesQuestion.css("display", "block");
                    trueFalse.css("display", "none");
                    mcqQuestion.css("display", "none");
                } else {
                    imagesQuestion.css("display", "none");
                    trueFalse.css("display", "none");
                    mcqQuestion.css("display", "none");
                }
            });
        })
        .change();

    $(".answer-element input").on("click", function() {
        var selectedAnswer = $(this).parent();
        var allAnswers = $(this).parent().parent().children();
        allAnswers.removeClass("selected-answer");
        selectedAnswer.addClass("selected-answer");
    });
    $("#more_answers").click(function() {

        if (counter < 3) {
            $(".wrong-answer").append('<input type="text" class="wrong_answer">');
            counter++;
        }
    });
    $("#delete_answer").click(function() {
        $(".wrong-answer input").last().remove();
    });

    loadFile = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById("output");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    loadFile1 = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById("output1");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    loadFile2 = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById("output2");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };
    loadFile3 = function(event) {
        var reader = new FileReader();
        reader.onload = function() {
            var output = document.getElementById("output3");
            output.src = reader.result;
        };
        reader.readAsDataURL(event.target.files[0]);
    };

    CKEDITOR.replace("question_input");


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
            }
        };
    });

    $(".jsunit").change(function() {
        $('#LessonsList').empty();
        var LeveLsSelectedId1 = $("#jsunit option:selected").val();
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
            }
        };
    });



    $("#sendquestion").on("click", function() {
        Q_level_id = $("#jslevel option:selected").val();
        Q_unit_id = $("#jsunit option:selected").val();
        Q_lesson_id = $("#LessonsList option:selected").val();
        Question = btoa(encodeURI(CKEDITOR.instances.question_input.getData()));
        typeOfQuestion = $("#typeOfQuestion option:selected").val();

        if (isNaN(Q_level_id) || isNaN(Q_unit_id) || isNaN(Q_lesson_id)) {
            alert('الرجاء اختيار الصف و الوحدة و الدرس بشكل صحيح');
            return false;
        }

        const params = new FormData();
        params.append('question', String(Question));
        params.append('levels_id', parseInt(Q_level_id));
        params.append('units_id', parseInt(Q_unit_id));
        params.append('lessons_id', parseInt(Q_lesson_id));
        params.append('type', String(typeOfQuestion));


        if (typeOfQuestion == 'mcq_question') {
            corret_answer_question = $(".correct_answer").val();
            wrong_answers = [];
            var catch_all_wrong_inputs = document.querySelectorAll('.wrong_answer');
            for (let index = 0; index < catch_all_wrong_inputs.length; index++) {
                wrong_answers.push(catch_all_wrong_inputs[index].value)
            }
            wrong_answer1 = wrong_answers[0] ? wrong_answers[0] : null;
            wrong_answer2 = wrong_answers[1] ? wrong_answers[1] : null;
            wrong_answer3 = wrong_answers[2] ? wrong_answers[2] : null;

            params.append('c1', String(corret_answer_question));
            params.append('c2', String(wrong_answer1));
            params.append('c3', String(wrong_answer2));
            params.append('c4', String(wrong_answer3));
        }

        if (typeOfQuestion == 'true_fales_question') {
            answerTrFList = document.getElementsByName('gender');
            answerTrF = 0;
            for (var i = 0, length = answerTrFList.length; i < length; i++) {
                if (answerTrFList[i].checked) {
                    answerTrF = answerTrFList[i].value;
                    break;
                }
            }
            sanswerTrF = (answerTrF == 1) ? 'true' : 'false';
            params.append('trf', String(sanswerTrF));
        }

        if (typeOfQuestion == 'images_question') {
            Trueimagefile = document.querySelector('#file').files[0];
            Falseimagefile1 = document.querySelector('#file1').files[0];
            Falseimagefile2 = document.querySelector('#file2').files[0];
            Falseimagefile3 = document.querySelector('#file3').files[0];

            console.log(Trueimagefile);
            console.log(Falseimagefile1);
            console.log(Falseimagefile2);
            console.log(Falseimagefile3);

            params.append('pic1', Trueimagefile);
            params.append('pic2', Falseimagefile1);
            params.append('pic3', Falseimagefile2);
            params.append('pic4', Falseimagefile3);

        }


        axios({
                method: 'post',
                url: '/admin/question/addtobank',
                data: params,
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            }).then(function(response) {
                console.log(response.data);
                location.reload();

            })
            .catch(function(error) {
                console.log(error);
            });





    });

});