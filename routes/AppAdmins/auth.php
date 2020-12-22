<?php
NI_route::get('/appadmin', function () {
    NI_redirect::path('/appadmin/home');
});

NI_route::get('/appadmin/home', function () {
    NI_Controller::run('appadmin\auth@Home');
});
NI_route::get('/appadmin/login', function () {
    NI_Controller::run('appadmin\auth@login');
});
NI_route::post('/appadmin/login', function () {
    NI_Controller::run('appadmin\auth@loginfunc');
});

NI_route::get('/appadmin/settings/all', function () {
    NI_Controller::run('appadmin\setting@index');
});
