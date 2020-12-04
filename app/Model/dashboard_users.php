<?php
namespace model;

class dashboard_users
{
    public static function create(array $data)
    {
        $new = \ORM::for_table("dashboard_users")->create();
        $new->delete_flag = 0;
        
        $new->mail = $data["mail"];
            
        $new->phone = $data["phone"];
            
        $new->reset = $data["reset"];
            
        $new->user = $data["user"];
            
        $new->password = $data["password"];
            
        $new->permissions = $data["permissions"];
            
        if ($new->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function update(array $data)
    {
        $update = \ORM::for_table("dashboard_users")->find_one([$data["id"]]);
        if (is_bool($update)) {
            return false ;
        }
        
        foreach ($data as $key => $value) {
            if ($key == "id") {
                continue;
            }
            $update->set($key, $value);
        }
        if ($update->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function select()
    {
        return \ORM::for_table("dashboard_users")->findArray();
    }

    public static function find(int $id)
    {
        return \ORM::for_table("dashboard_users")->find_one([$id])->as_array();
    }
    
    public static function delete(int $id)
    {
        $delete = \ORM::for_table("dashboard_users")->find_one([$id]);
        if (is_bool($delete)) {
            return false ;
        }
        if ($delete->delete()) {
            return true;
        } else {
            return false;
        }
    }
    public static function check(array $data)
    {
        $dash = \ORM::for_table('dashboard_users')->where_any_is(
            array(
                array('user' => $data['dashboard_user'], 'password' => $data['dashboard_pass']),
                array('mail' => $data['dashboard_user'], 'password' => $data['dashboard_pass']),
                array('phone' => $data['dashboard_user'], 'password' => $data['dashboard_pass'])
                
            )
        )->find_one();
        return $dash;
    }
}
