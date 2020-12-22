<?php 
NI_route::get('/appadmin/statistic/all', function () {
    NI_Controller::run('appadmin\statistic@statistic');
});