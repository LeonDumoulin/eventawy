<?php

$dashboard_users= [
    'dashboard_users' => '
        id INT( 11 ) AUTO_INCREMENT PRIMARY KEY,
        mail VARCHAR( 255 ) NOT NULL,
        phone VARCHAR( 20 ) NOT NULL,
        reset VARCHAR( 10 ) NULL,
        user VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 1000 ) NOT NULL,
        permissions VARCHAR( 600 ) NOT NULL,
        create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
        update_at TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
        create_from VARCHAR( 255 ) NULL
    ',
    'dashboard_groups' => '
    id INT( 11 ) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR( 255 ) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
    create_from VARCHAR( 255 ) NULL
    ',
    'dashboard_permission' => '
    id INT( 11 ) AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR( 255 ) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
    create_from VARCHAR( 255 ) NULL
    ',
    'dashboard_set_permission' => '
    id INT( 11 ) AUTO_INCREMENT PRIMARY KEY,
    permission_id INT( 11 ) NOT NULL,
    group_id INT( 11 ) NOT NULL,
    create_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    update_at TIMESTAMP DEFAULT 0 ON UPDATE CURRENT_TIMESTAMP,
    create_from VARCHAR( 255 ) NULL
    '
];
creat_tables($dashboard_users);
?>
