<?php 
namespace model; 
class permissions_group { 
    public static function create(array $data) 
    {
        $new = \ORM::for_table("permissions_group")->create();
        $new->delete_flag = 0;

                            $new->P_groups_id = $data["P_groups_id"];
                            
                            $new->permissions_id = $data["permissions_id"];
                            
                        if ($new->save()) {
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function update(array $data) 
                    {
                        $update = \ORM::for_table("permissions_group")->find_one([$data["id"]]);
                        if(is_bool($update)) return false ;
                        
                        foreach ($data as $key => $value) {
                            if ($key == "id") continue;
                            $update->set($key,$value);
                        }
                        if($update->save()){
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function select() 
                    {
                        return \ORM::for_table("permissions_group")->findArray();
                    }

                    public static function find(int $id) 
                    {
                        return \ORM::for_table("permissions_group")->find_one([$id])->as_array();
                    }
                    
                public static function delete(int $id) 
                {
                    $delete = \ORM::for_table("permissions_group")->find_one([$id]);
                    if(is_bool($delete)) return false ;
                    $delete->set("delete_flag",1);
                    if ($delete->save()) {
                        return true;
                    }else{
                        return false;
                    }
                }
                
                }
                