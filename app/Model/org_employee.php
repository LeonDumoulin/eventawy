<?php
namespace model;

class org_employee
{
    public static function create(array $data)
    {
        $new = \ORM::for_table("org_employee")->create();
        $new->delete_flag = 0;

        $new->name = $data["name"];
                            
        $new->phone = $data["phone"];
                            
        $new->username = $data["username"];
                            
        $new->password = $data["password"];
                            
        $new->position = $data["position"];
                            
        $new->P_groups = $data["P_groups"];
                            
        if ($new->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function update(array $data)
    {
        $update = \ORM::for_table("org_employee")->find_one([$data["id"]]);
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
        return \ORM::for_table("org_employee")->findArray();
    }

    public static function find(int $id)
    {
        return \ORM::for_table("org_employee")->find_one([$id])->as_array();
    }
                    
    public static function delete(int $id)
    {
        $delete = \ORM::for_table("org_employee")->find_one([$id]);
        if (is_bool($delete)) {
            return false ;
        }
        $delete->set("delete_flag", 1);
        if ($delete->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function check(array $data)
    {
        $dash = \ORM::for_table('org_employee')->where(
            array('username' => $data['user'], 'password' => $data['password'])
        )->find_one();
        return $dash;
    }
}
