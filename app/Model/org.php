<?php
namespace model;

class org
{
    public static function create(array $data)
    {
        $new = \ORM::for_table("org")->create();
        $new->delete_flag = 0;

        $new->name = $data["name"];
                            
        $new->orgtype_id = $data["orgtype_id"];
                            
        $new->phone = $data["phone"];
                            
        $new->username = $data["username"];
                            
        $new->password = $data["password"];
                            
        $new->description = $data["description"];
                            
        $new->mail = $data["mail"];
                            
        $new->url = $data["url"];
                            
        $new->cover = $data["cover"];
                            
        $new->logo = $data["logo"];
                            
        $new->fb = $data["fb"];
                            
        $new->twitter = $data["twitter"];
                            
        $new->linkedin = $data["linkedin"];
                            
        $new->address = $data["address"];
                            
        if ($new->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function update(array $data)
    {
        $update = \ORM::for_table("org")->find_one([$data["id"]]);
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
        return \ORM::for_table("org")->findArray();
    }

    public static function find(int $id)
    {
        return \ORM::for_table("org")->find_one([$id])->as_array();
    }
                    
    public static function delete(int $id)
    {
        $delete = \ORM::for_table("org")->find_one([$id]);
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
        $dash = \ORM::for_table('org')->where(
            array('username' => $data['user'], 'password' => $data['password'])
        )->find_one();
        return $dash;
    }
}
