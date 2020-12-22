<?php
NI_route::get('/org', function () {
    NI_redirect::path('/org/home');
});

NI_route::get('/org/home', function () {
    NI_Controller::run('org\auth@Home');
});
NI_route::get('/org/login', function () {
    NI_Controller::run('org\auth@login');
});
NI_route::post('/org/login', function () {
    NI_Controller::run('org\auth@loginfunc');
});
