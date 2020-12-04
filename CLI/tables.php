<?php
return $tables = [
    'dashboard_users' => '
        mail VARCHAR( 255 ) NOT NULL,
        phone VARCHAR( 20 ) NOT NULL,
        reset VARCHAR( 10 ) NULL,
        user VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 1000 ) NOT NULL,
        permissions VARCHAR( 600 ) NOT NULL,
    ',
    'dashboard_groups' => '
        name VARCHAR( 255 ) NOT NULL,
    ',
    'dashboard_permission' => '
        name VARCHAR( 255 ) NOT NULL,
    ',
    'dashboard_set_permission' => '
        permission_id INT( 11 ) NOT NULL,
        group_id INT( 11 ) NOT NULL,
    '
];
