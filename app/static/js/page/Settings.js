$(document).ready(function() {
    $('#supervisormenutable').DataTable({
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

    $("#supervisormenutable").on("click", ".edit_button", function() {
        var columOne = $(this).closest("tr").eq(0).find("td span").eq(0);
        var columTwo = $(this).closest("tr").eq(0).find("td span").eq(1);
        var columThree = $(this).closest("tr").eq(0).find("td span").eq(2);
        var columFour = $(this).closest('tr').find(".hide_column").text();

        console.log(columFour);
        console.log(123);
        $("#editsupervisor").on("click", ".edit_button", function() {
            var str = $(".supervisor_name_edit").val();
            $(columOne).text(str);
            console.log(str);
            var str2 = $(".supervisor_power_edit").val();
            $(columTwo).text(str2);

            var str3 = $(".supervisor_password_edit").val();
            $(columThree).text(str3);

            var str4 = $(".supervisor_id_edit").val();
            $(columFour).text(str4);

            columOne = "";
            columTwo = "";
            columThree = "";

        });
        $("#editsupervisor").on("show.bs.modal", function(e) {
            var _button = $(e.relatedTarget);
            var _row = _button.parents("tr");
            var _studentNameTableValue = _row.find(".supervisor_name").text();
            $(this).find(".supervisor_name_edit").val(_studentNameTableValue); // from table to model
            var _studentPhoneTableValue = _row.find(".supervisor_power").text();
            $(this).find(".supervisor_power_edit").val(_studentPhoneTableValue);
            var _studentLevelTableValue = _row.find(".supervisor_password").text();
            $(this).find(".supervisor_password_edit").val(_studentLevelTableValue);
            var _studentLevelTableValueid = _row.find(".hide_column").text();
            $(this).find(".supervisor_id_edit").val(_studentLevelTableValueid);
        });
    });

    $(".delete-button").click(function() {
        selectedRow = $(this).closest("tr");
        idSelectedRow = $(this).closest("tr").find(".hide_column").text();

        $(".confirm-delete").click(function() {

            axios({
                    method: 'get',
                    url: '/admin/deletesuperviser/' + idSelectedRow,
                }).then(function(response) {
                    if (response.data.msg == 'done') {
                        selectedRow.remove();
                        delete selectedRow;
                        delete idSelectedRow;
                        console.log(response.data);
                        location.reload();
                    }
                })
                .catch(function(error) {
                    console.log(error);

                });

        });
    });
});