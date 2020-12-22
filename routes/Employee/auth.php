<?php
NI_route::get('/employee', function () {
    NI_redirect::path('/employee/home');
});

NI_route::get('/employee/home', function () {
    NI_Controller::run('employee\auth@Home');
});
NI_route::get('/employee/login', function () {
    NI_Controller::run('employee\auth@login');
});
NI_route::post('/employee/login', function () {
    NI_Controller::run('employee\auth@loginfunc');
});
