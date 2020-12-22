<?php
namespace model;

class org_payment
{
    public static function create(array $data)
    {
        $new = \ORM::for_table("org_payment")->create();
        $new->delete_flag = 0;

        $new->org_id = $data["org_id"];
                            
        $new->paymenttype_id = $data["paymenttype_id"];
                            
        $new->Entrytype_id = $data["Entrytype_id"];
                            
        $new->startdate = $data["startdate"];
                            
        $new->enddate = $data["enddate"];
                            
        if ($new->save()) {
            return true;
        } else {
            return false;
        }
    }

    public static function update(array $data)
    {
        $update = \ORM::for_table("org_payment")->find_one([$data["id"]]);
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
        return \ORM::for_table("org_payment")->findArray();
    }

    public static function find(int $id)
    {
        return \ORM::for_table("org_payment")->find_one([$id])->as_array();
    }
                    

    public static function findorg(int $id)
    {
        return \ORM::for_table("org_payment")->where('org_id', $id)->findArray();
    }

    public static function delete(int $id)
    {
        $delete = \ORM::for_table("org_payment")->find_one([$id]);
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
}
