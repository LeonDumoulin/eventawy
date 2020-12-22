<?php 
namespace model; 
class tickets { 
    public static function create(array $data) 
    {
        $new = \ORM::for_table("tickets")->create();
        $new->delete_flag = 0;

                            $new->user_id = $data["user_id"];
                            
                            $new->status = $data["status"];
                            
                        if ($new->save()) {
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function update(array $data) 
                    {
                        $update = \ORM::for_table("tickets")->find_one([$data["id"]]);
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
                        return \ORM::for_table("tickets")->findArray();
                    }

                    public static function find(int $id) 
                    {
                        return \ORM::for_table("tickets")->find_one([$id])->as_array();
                    }
                    
                public static function delete(int $id) 
                {
                    $delete = \ORM::for_table("tickets")->find_one([$id]);
                    if(is_bool($delete)) return false ;
                    $delete->set("delete_flag",1);
                    if ($delete->save()) {
                        return true;
                    }else{
                        return false;
                    }
                }
                
                }
                