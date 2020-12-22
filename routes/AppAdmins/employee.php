<?php
NI_route::get('/appadmin/employee/all', function () {
    NI_Controller::run('appadmin\employee@index');
});
