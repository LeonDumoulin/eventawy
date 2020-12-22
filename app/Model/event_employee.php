<?php 
namespace model; 
class event_employee { 
    public static function create(array $data) 
    {
        $new = \ORM::for_table("event_employee")->create();
        $new->delete_flag = 0;

                            $new->employee_id = $data["employee_id"];
                            
                            $new->events_id = $data["events_id"];
                            
                            $new->group_permissions = $data["group_permissions"];
                            
                        if ($new->save()) {
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function update(array $data) 
                    {
                        $update = \ORM::for_table("event_employee")->find_one([$data["id"]]);
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
                        return \ORM::for_table("event_employee")->findArray();
                    }

                    public static function find(int $id) 
                    {
                        return \ORM::for_table("event_employee")->find_one([$id])->as_array();
                    }
                    
                public static function delete(int $id) 
                {
                    $delete = \ORM::for_table("event_employee")->find_one([$id]);
                    if(is_bool($delete)) return false ;
                    $delete->set("delete_flag",1);
                    if ($delete->save()) {
                        return true;
                    }else{
                        return false;
                    }
                }
                
                }
                