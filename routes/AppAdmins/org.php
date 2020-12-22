<?php

NI_route::get('/appadmin/homepage/orgs/{{id}}', function ($id) {
    NI_request::$data['id'] = $id;
    NI_Controller::run('appadmin\org@HomePageSelectOgr');
});


NI_route::get('/appadmin/homepage/payment/orgs/{{id}}', function ($id) {
    $response['status'] = 200;
    $response['data'] = \model\org_payment::findorg($id);
    \NI_response::forAxios($response);
});


NI_route::get('/appadmin/orgs/all', function () {
    NI_Controller::run('appadmin\org@index');
});
