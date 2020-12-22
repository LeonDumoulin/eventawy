<?php
return $tables = [
    'admin'=> '
        username VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 255 ) NOT NULL,
    ',
    "AppTable" => "
        model VARCHAR( 255 ) NOT NULL,
        c VARCHAR( 255 ) NOT NULL,
        r VARCHAR( 255 ) NOT NULL,
        u VARCHAR( 255 ) NOT NULL,
        d VARCHAR( 255 ) NOT NULL,
    ",
    "permissions" => "
        AppTable_id  INT( 11 ) NOT NULL,
        name VARCHAR( 255 ) NOT NULL,
        c  INT( 1 ) NOT NULL,
        u  INT( 1 ) NOT NULL,
        r  INT( 1 ) NOT NULL,
        d  INT( 1 ) NOT NULL,
    ",
    "P_groups" => "
        name VARCHAR( 255 ) NOT NULL,
    ",
    "permissions_group" => "
        P_groups_id INT( 11 ) NOT NULL,
        permissions_id INT( 11 ) NOT NULL,
    ",
    'orgtype' => '
        name VARCHAR( 255 ) NOT NULL,
        keyword VARCHAR( 255 ) NULL,
    ',
    'eventtype' => '
        name VARCHAR( 255 ) NOT NULL,
        keyword VARCHAR( 255 ) NULL,
    ',
    'org' => '
        name VARCHAR( 255 ) NOT NULL,
        orgtype_id INT( 11 ) NOT NULL,
        phone VARCHAR( 20 ) NOT NULL,
        username VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 255 ) NOT NULL,
        description VARCHAR( 500 ) NOT NULL,
        mail VARCHAR( 255 ) NOT NULL,
        url VARCHAR( 255 ) NULL,
        cover VARCHAR( 255 ) NULL,
        logo VARCHAR( 255 ) NULL,
        fb VARCHAR( 255 ) NULL,
        twitter VARCHAR( 255 ) NULL,
        linkedin VARCHAR( 255 ) NULL,
        address VARCHAR( 255 ) NULL,
    ',
    'org_employee' => '
        name VARCHAR( 255 ) NOT NULL,
        phone VARCHAR( 20 ) NOT NULL,
        username VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 255 ) NOT NULL,
        position VARCHAR( 255 ) NOT NULL,
        P_groups VARCHAR( 255 ) NOT NULL,
    ',
    'events' => '
        name VARCHAR( 255 ) NOT NULL,
        eventtype_id INT( 11 ) NOT NULL,
        date DATE,
        Days INT( 11 ) NOT NULL,
        price float NOT NULL,
        numbertickets INT( 11 ) NOT NULL,
        description VARCHAR( 500 ) NOT NULL,
        cover VARCHAR( 255 ) NULL,
        logo VARCHAR( 255 ) NULL,
    ',
    'event_employee' => '
        employee_id INT( 11 ) NOT NULL,
        events_id INT( 11 ) NOT NULL,
        group_permissions VARCHAR( 255 ) NULL,
    ',
    'notification' => '
        events_id INT( 11 ) NOT NULL,
        msg VARCHAR( 500 ) NOT NULL,
    ',
    'tickets' => '
        user_id INT( 11 ) NOT NULL,
        status INT( 11 ) NOT NULL,
    ',
    'contact' => '
        msg VARCHAR( 500 ) NOT NULL,
        mail VARCHAR( 255 ) NOT NULL,
        name VARCHAR( 500 ) NOT NULL,
        phone VARCHAR( 30 ) NOT NULL,
    ',
    'material' => '
        path VARCHAR(255) NOT NULL,
        model VARCHAR(255) NOT NULL,
        model_id INT( 11 ) NOT NULL,
    ',
    'feedback' => '
        user_id INT( 11 ) NOT NULL,
        msg VARCHAR( 500 ) NOT NULL,
        rate INT( 1 ) NOT NULL,
    ',
    'users'=> '
        username VARCHAR( 255 ) NOT NULL,
        password VARCHAR( 255 ) NOT NULL,
        phone VARCHAR( 20 ) NOT NULL,
        email VARCHAR( 255 ) NOT NULL,
    ',
    'Entrytype'=> '
        name VARCHAR( 255 ) NOT NULL,
    ',
    'paymenttype'=> '
        name VARCHAR( 255 ) NOT NULL,
    ',
    'org_payment'=>'
        org_id INT( 11 ) NOT NULL,
        paymenttype_id INT( 11 ) NOT NULL,
        Entrytype_id INT( 11 ) NOT NULL,
        startdate DATE,
        enddate DATE,
    '
];
