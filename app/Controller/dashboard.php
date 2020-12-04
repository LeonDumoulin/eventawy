<?php
class C_dashboard extends DashboardHelper 
{

    public static function Index()
    {

        NI_security::authorized('login',true,'/dashboard/login');
        
        $sidepar_render_data = [
            'username' => $_SESSION['admin_name'],
        ];
        $indexrenderdata = [
            'visit' => self::visits(),
        ];

        $css_arr = ['ionicons.min', 'dashboard', 'notyf.min'];
        $header_js_arr = ['jquery.min', 'Chart.min'];
        $footer_js_arr = [ 'jquery.transit.min', 'dashboard', 'status'];

        NI_template::head($_SESSION['lang'], $css_arr, $header_js_arr);
        global $arr_lang;
        NI_lang::set($arr_lang);
        $args = NI_template::$url_array;

        NI_view::TwigComponents(['dashboard', 'components', 'nav'], null);
        NI_view::TwigComponents(['dashboard', 'components', 'sidebar'], $sidepar_render_data);
        NI_view::TwigComponents(['dashboard', 'index'], $indexrenderdata);


        NI_template::footer($footer_js_arr);
    }

    public static function PermissionIndex()
    {
        NI_security::authorized('login',true,'/dashboard/login');
        $indexrenderdata = [
            'permi' => M_dashboard::SelectPermission(),
            'form'=>[
                'SetP2G'=>'/dash/p/set',
                'AddPermission'=>'/dash/p/permission',
                'AddGroup'=>'/dash/p/group'
            ]
        ];
        $sidepar_render_data = [
            'username' => $_SESSION['admin_name'],
        ];

        $css_arr = ['ionicons.min', 'dashboard', 'notyf.min'];
        $header_js_arr = ['jquery.min', 'Chart.min'];
        $footer_js_arr = [ 'jquery.transit.min', 'dashboard', 'status'];

        NI_template::head($_SESSION['lang'], $css_arr, $header_js_arr);
        global $arr_lang;
        NI_lang::set($arr_lang);
        $args = NI_template::$url_array;

        NI_view::TwigComponents(['dashboard', 'components', 'nav'], null);
        NI_view::TwigComponents(['dashboard', 'components', 'sidebar'], $sidepar_render_data);
        NI_view::TwigComponents(['dashboard', 'addpremission'], $indexrenderdata);


        NI_template::footer($footer_js_arr);
    }


    public static function SetP2G()
    {
        $validate = [
            'permission'=>'int',
            'group'=>'int'
        ];
        $SetterIDs = NI_request::validate($validate);
        $CheckSetter = M_dashboard::CheckSetPermission($SetterIDs);
        if (empty($CheckSetter)) {
        
        }else{
            echo '
            <div class="alert-manual uk-card uk-alert-primary uk-card-body ">
                <p>permission Set to group already exist</p> 
            </div>
            ';
        }
        
    }
    public static function AddPermission()
    {
        
    }
    public static function AddGroup()
    {
        
    }
    
}


if (isset($_POST["setpermission"])) {
    $permission_id = NI_security::Filterus('int',NI_security::check($_POST["permission"]));
    $group_id = NI_security::Filterus('int',NI_security::check($_POST["group"]));
    if ($permission_id[0] && $group_id[0]) {

        $testgp = ORM::for_table('dashboard_set_permission')->where(array(
            'permission_id' => $permission_id[1], 'group_id' => $group_id[1]
        ))->find_one();

        if (empty($testgp)) {
            $g_of_p = ORM::for_table('dashboard_set_permission')->create();
            $g_of_p->permission_id = $permission_id[1];
            $g_of_p->group_id = $group_id[1];
            $g_of_p->create_from = $_SESSION['admin_name'];

            if($g_of_p->save()){
                echo '
                <div class="alert-manual uk-card uk-alert-primary uk-card-body ">
                    <p>permission Set to group successfully</p> 
                </div>
                ';
            }else{
                echo '
                <div class="alert-manual uk-card uk-alert-danger uk-card-body ">
                    <p>something went wrong pleas try again later [*_*]</p> 
                </div>
                ';
            }
        }else{
            echo '
            <div class="alert-manual uk-card uk-alert-primary uk-card-body ">
                <p>permission Set to group already exist</p> 
            </div>
            ';
        }

    }else{
        echo '
        <div class="alert-manual uk-card uk-alert-danger uk-card-body ">
            <p>stop injection nooop [*_*]</p> 
        </div>
        ';
    }

}