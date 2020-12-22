<?php
namespace employee;

class auth
{
    public static function login()
    {
        \NI_security::unauthorized('login', true, '/employee');
        \NI_security::unauthorized('role', 'employee', '/employee');
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
            'user'=>'string',
            'password'=>'string'
        ];
        $RequestData = \NI_request::validate($validate);
        $RequestData['user'] = is_numeric($RequestData['user']) ? '0'.$RequestData['user'] : $RequestData['user'];
        $RequestData['password'] = sha1($RequestData['password']);
        $user = \model\org_employee::check($RequestData);
        if (!empty($user)) {
            if ($user->delete_flag != 3) {
                \NI_redirect::with($_SERVER['REQUEST_URI'], 'danger', 'لم يتم تفعيل الحساب');
                exit;
            }
            $_SESSION['login'] = true;
            $_SESSION['role'] = 'student';
            $_SESSION['user_id'] = $user->id;
            $_SESSION['levels_id'] = $user->levels_id;
            $_SESSION['groups_id'] = $user->groups_id;
            $_SESSION['student_name'] = $user->name;
           
            $user->forupdate = date('Y-m-d');
            $user->save();

            \NI_redirect::with('/employee', 'primary', 'تم تسجيل الدخول بنجاح');
        } else {
            \NI_redirect::with($_SERVER['REQUEST_URI'], 'danger', 'خطا فى اسم المستخدم او كلمة السر[×_×]!');
        }
    }

    /*     public static function Home()
        {
            echo 'gg';
        }
        public static function index()
        {
            \NI_security::authorized('login', true, '/admin/login');
            \NI_security::authorized('role', 'admin', '/admin/login');
            $path = ['admin','HomePage'];
            $static = [
                'css_arr' => [
                    'css/datatablefinal',
                    'css/HomePage'
                ],
                'header_js_arr' => [],
                'footer_js_arr' => [
                    'js/axios',
                    'js/all.min',
                    'js/dataTables',
                    'js/jquery.dataTables.min',
                    'js/dataTables.buttons.min',
                    'js/buttons.flash.min',
                    'js/jszip.min',
                    'js/pdfmake.min',
                    'js/buttons.min',
                    'js/vfs_fonts',
                    'js/buttons.print.min',
                    'js/buttons.colVis.min',
                    'js/HomePage'
                ]
            ];
            $data = [
                // 'users' => \model\students::select(),
                // 'groups' => \model\groups::select()
            ];
            \NI_view::Twig($path, $static, $data);
            $error = [
                'ErrorType' => $_COOKIE['ErrorType']??null,
                'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
            ];
        } */
}
