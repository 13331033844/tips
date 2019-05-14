<?php

function  move_upload($pictures)
{  


    if (isset($pictures)) {


            $riqi = date("Ymd");
            $path = "public/uploads/image/".$riqi;

            if (!file_exists($path)){
                    mkdir($path);
            }  
            $filepath ="";
            
            foreach ($pictures["type"] as $key => $type) {

                if ($type == "image/jpeg"||$type == "image/png") {
                     
                    $tmp_name = $pictures["tmp_name"][$key];

                    $file_name=time().rand(1000,9999).".jpg";
                    move_uploaded_file($tmp_name,$path."/".$file_name);
                    //网络路径 
                    $filepath .="http://".$_SERVER['HTTP_HOST']."/public/uploads/image/".$riqi."/".$file_name.",";

                }
            }
            
            return  $filepath;
    }
    else
    {
        return  "";
    }
}

?>