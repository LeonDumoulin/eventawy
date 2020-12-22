<?php 
namespace model; 
class contact { 
    public static function create(array $data) 
    {
        $new = \ORM::for_table("contact")->create();
        $new->delete_flag = 0;

                            $new->msg = $data["msg"];
                            
                            $new->mail = $data["mail"];
                            
                            $new->name = $data["name"];
                            
                            $new->phone = $data["phone"];
                            
                        if ($new->save()) {
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function update(array $data) 
                    {
                        $update = \ORM::for_table("contact")->find_one([$data["id"]]);
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
                        return \ORM::for_table("contact")->findArray();
                    }

                    public static function find(int $id) 
                    {
                        return \ORM::for_table("contact")->find_one([$id])->as_array();
                    }
                    
                public static function delete(int $id) 
                {
                    $delete = \ORM::for_table("contact")->find_one([$id]);
                    if(is_bool($delete)) return false ;
                    $delete->set("delete_flag",1);
                    if ($delete->save()) {
                        return true;
                    }else{
                        return false;
                    }
                }
                
                }
                