<?php
namespace appadmin;

class auth
{
    public static function login()
    {
        \NI_security::unauthorized('login', true, '/appadmin');
        \NI_security::unauthorized('role', 'appadmin', '/appadmin');
        $path = ['AdminApp','Login'];
        $static = [
            'css_arr'=>['Login'],
            'footer_js_arr'=>['Login'],
            'header_js_arr'=>[]
        ];
        $data = [];
        \NI_view::Twig($path, $static, $data);
    }
    public static function loginfunc()
    {
        $validate = [
            'username'=>'string',
            'password'=>'string'
        ];
        $RequestData = \NI_request::validate($validate);
        $RequestData['password'] = sha1($RequestData['password']);
        $user = \model\admin::check($RequestData);
        if (!empty($user)) {
            if ($user->delete_flag != 3) {
                \NI_redirect::with($_SERVER['REQUEST_URI'], 'danger', 'لم يتم تفعيل الحساب');
                exit;
            }
            $_SESSION['login'] = true;
            $_SESSION['role'] = 'appadmin';
            $_SESSION['admin_id'] = $user->id;
            \NI_redirect::with('/appadmin', 'primary', 'تم تسجيل الدخول بنجاح');
        } else {
            \NI_redirect::with($_SERVER['REQUEST_URI'], 'danger', 'خطا فى اسم المستخدم او كلمة السر[×_×]!');
        }
    }


    public static function Home()
    {
        \NI_security::authorized('login', true, '/appadmin/login');
        \NI_security::authorized('role', 'appadmin', '/appadmin/login');


        $path = ['AdminApp','HomePage'];
        $static = [
                'css_arr' => [
                    'datatablefinal',
                    'HomePage'
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
                    'page/HomePage'
                ]
            ];
        $data = [
                'orgs' => \model\org::select(),
                'orgtype'=> \model\orgtype::select(),
                'org_payments' => \model\org_payment::select(),
                'employees' => \model\org_employee::select(),
                'events' => \model\events::select(),
                'users' => \model\users::select(),
            ];
        \NI_view::Twig($path, $static, $data);
        $error = [
                'ErrorType' => $_COOKIE['ErrorType']??null,
                'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
            ];
    }
}
