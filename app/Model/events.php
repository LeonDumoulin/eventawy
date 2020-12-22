<?php 
namespace model; 
class events { 
    public static function create(array $data) 
    {
        $new = \ORM::for_table("events")->create();
        $new->delete_flag = 0;

                            $new->name = $data["name"];
                            
                            $new->eventtype_id = $data["eventtype_id"];
                            
                            $new->date = $data["date"];
                            
                            $new->Days = $data["Days"];
                            
                            $new->price = $data["price"];
                            
                            $new->numbertickets = $data["numbertickets"];
                            
                            $new->description = $data["description"];
                            
                            $new->cover = $data["cover"];
                            
                            $new->logo = $data["logo"];
                            
                        if ($new->save()) {
                            return true;
                        }else{
                            return false;
                        }
                    }

                    public static function update(array $data) 
                    {
                        $update = \ORM::for_table("events")->find_one([$data["id"]]);
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
                        return \ORM::for_table("events")->findArray();
                    }

                    public static function find(int $id) 
                    {
                        return \ORM::for_table("events")->find_one([$id])->as_array();
                    }
                    
                public static function delete(int $id) 
                {
                    $delete = \ORM::for_table("events")->find_one([$id]);
                    if(is_bool($delete)) return false ;
                    $delete->set("delete_flag",1);
                    if ($delete->save()) {
                        return true;
                    }else{
                        return false;
                    }
                }
                
                }
                