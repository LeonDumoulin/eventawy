<?php
namespace org;

class pages
{
    public static function homepage()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','HomePage'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function employees()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','employee'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function permissions()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','permissions'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function settings()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','Settings'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function events()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','events'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function statistic()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','statistic'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function tickets()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','teckits'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
    public static function membership()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','membership'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }

    public static function about()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','about'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }

    public static function contact()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','contact'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }

    public static function member()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','member'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }

    public static function notification()
    {
        \NI_security::authorized('login', true, '/org/login');
        \NI_security::authorized('role', 'org', '/org/login');

        $path = ['org','notification'];
        $static = [
            'css_arr' => [
                'datatablefinal',
                'Students'
            ],
            'header_js_arr' => [],
            'footer_js_arr' => [
                'assets/axios',
                'assets/all.min',
                'assets/dataTables',
                'assets/jquery.dataTables.min',
                'assets/dataTables.buttons.min',
                'assets/buttons.flash.min',
                'assets/jszip.min',
                'assets/pdfmake.min',
                'assets/buttons.min',
                'assets/vfs_fonts',
                'assets/buttons.print.min',
                'assets/buttons.colVis.min',
                'page/employee'
            ]
        ];
        $data = [
            'users' => \model\event_employee::select()
        ];
        \NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }
}
