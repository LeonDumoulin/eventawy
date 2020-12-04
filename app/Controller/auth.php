<?php
class C_dashboard_auth
{
    public static function LoginIndex()
    {
        NI_security::unauthorized('login', true, '/dashboard');
        $path = ['dashboard', 'auth','login'];
        $static = [
            'css_arr' => ['notyf.min','dashboard'],
            'header_js_arr' => [],
            'footer_js_arr' => ['notyf.min', 'dashboard','notification']
        ];
        $data = [
            'form' => [
                'login'=>'/dashboard/login'
            ]
        ];
        NI_view::Twig($path, $static, $data);
        $error = [
            'ErrorType' => $_COOKIE['ErrorType']??null,
            'ErrorMsg'=> $_COOKIE['ErrorMsg']??null
        ];
    }

    public static function login()
    {
        $validate = [
        'dashboard_user'=>['string','int','email'],
        'dashboard_pass'=>'string'
        ];
        $UserData = NI_request::validate($validate);
        $UserData['dashboard_pass'] = sha1($UserData['dashboard_pass']);
        $dash = model\dashboard_users::check($UserData);
        if (!empty($dash)) {
            $_SESSION['login'] = true;
            $_SESSION['permissions'] = $dash->permissions;
            $_SESSION['admin_name'] = $dash->user;
            NI_redirect::path('/dashboard');
        } else {
            NI_redirect::with($_SERVER['REQUEST_URI'], 'danger', 'Error in username or password[×_×]!');
        }
    }




    public static function reset()
    {
        NI_security::unauthorized('login', true, '/dashboard');
        M_dashboard_auth::reset();
        $path = ['dashboard', 'auth', 'resetpassword'];
        $static = [
            'css_arr' => ['notyf.min','dashboard'],
            'header_js_arr' => [],
            'footer_js_arr' => ['notyf.min', 'dashboard','notification']
        ];
        $data = [];
        NI_view::Twig($path, $static, $data);
    }
    public static function newpass()
    {
        NI_security::unauthorized('login', true, '/dashboard');
        M_dashboard_auth::newpass();
        $path = ['dashboard', 'auth','newpassword'];
        $static = [
            'css_arr' => ['notyf.min','dashboard'],
            'header_js_arr' => [],
            'footer_js_arr' => ['notyf.min', 'dashboard','notification']
        ];
        $data = [
            'email'=> (isset($_GET["email"]) && !empty(NI_security::Filterus('email', NI_security::anti_XSS($_GET["email"]))[0])) ? NI_security::anti_XSS($_GET["email"]) : '',
            'code'=> (isset($_GET["code"]) && !empty(NI_security::Filterus('int', NI_security::anti_XSS($_GET["code"]))[0])) ? NI_security::anti_XSS($_GET["code"]) : '',
        ];
        NI_view::Twig($path, $static, $data);
    }
    public static function register()
    {
        NI_security::authorized('login', true, '/dashboard/login');

        $path = ['dashboard', 'auth', 'register'];
        $static = [
            'css_arr' => [],
            'header_js_arr' => [],
            'footer_js_arr' => []
        ];
        $data = [];
        NI_view::Twig($path, $static, $data);
    }
}
