<?php 

################# Dashboard ########################
#----- Auth
NI_route::get('/dashboard/login', function () {
    NI_Controller::run('C_dashboard_auth@LoginIndex');
});
NI_route::post('/dashboard/login', function () {
    NI_Controller::run('C_dashboard_auth@login');
});
#-----------------
NI_route::get('/dashboard/reset', function () {
    NI_Controller::run('C_dashboard_auth@reset');
});
NI_route::get('/dashboard/reset/newpassword', function () {
    NI_Controller::run('C_dashboard_auth@newpass');
});
NI_route::get('/dashboard/register', function () {
    NI_Controller::run('C_dashboard_auth@register');
});
#----- End Auth



#-----  Home -- main pages
NI_route::get('/dashboard', function () {
    NI_Controller::run('C_dashboard@Index');
});
#--------------
NI_route::get('/dashboard/addpermission', function () {
    NI_Controller::run('C_dashboard@PermissionIndex');
});

    NI_route::post('/dash/p/set', function () {
        NI_Controller::run('C_dashboard@SetP2G');
    });
    NI_route::post('/dash/p/permission', function () {
        NI_Controller::run('C_dashboard@AddPermission');
    });
    NI_route::post('/dash/p/group', function () {
        NI_Controller::run('C_dashboard@AddGroup');
    });

#--------------










NI_route::any('/dashboard/logout', function () {
    NI_session::logout('/dashboard/login');
});
####################### End Dashboard #####################
?>