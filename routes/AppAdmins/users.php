<?php
NI_route::get('/appadmin/users/all', function () {
    NI_Controller::run('appadmin\users@index');
});
