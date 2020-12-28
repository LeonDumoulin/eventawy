<?php
NI_session::set('login', true);
NI_session::set('role', 'org');
NI_route::get('/org/homepage', function () {
    NI_Controller::run('org\pages@homepage');
});

NI_route::get('/org/employees', function () {
    NI_Controller::run('org\pages@employees');
});


NI_route::get('/org/permissions', function () {
    NI_Controller::run('org\pages@permissions');
});


NI_route::get('/org/settings', function () {
    NI_Controller::run('org\pages@settings');
});


NI_route::get('/org/events', function () {
    NI_Controller::run('org\pages@events');
});

NI_route::get('/org/statistic', function () {
    NI_Controller::run('org\pages@statistic');
});


NI_route::get('/org/tickets', function () {
    NI_Controller::run('org\pages@tickets');
});


NI_route::get('/org/membership', function () {
    NI_Controller::run('org\pages@membership');
});


NI_route::get('/org/about', function () {
    NI_Controller::run('org\pages@about');
});


NI_route::get('/org/contact', function () {
    NI_Controller::run('org\pages@contact');
});

NI_route::get('/org/notification', function () {
    NI_Controller::run('org\pages@notification');
});


NI_route::get('/org/member', function () {
    NI_Controller::run('org\pages@member');
});
