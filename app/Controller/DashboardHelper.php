<?php 
use SimpleExcel\SimpleExcel;

class DashboardHelper{
    public static function visits()
    {
        $VisitData =[];
        $excel = new SimpleExcel('csv');
        $excel->parser->loadFile(Tracktable);
        $AllData = $excel->parser->getField();
        if (!empty($AllData)) {
            $usersCount = count(array_unique($excel->parser->getColumn(1)));

            $social = count(array_unique($excel->parser->getColumn(4)));
            $social_analysis_key = array_keys(array_count_values($excel->parser->getColumn(4)));
            $social_analysis_value = array_values(array_count_values($excel->parser->getColumn(4)));
    
            $country = count(array_unique($excel->parser->getColumn(9)));
            $country_analysis_key = array_keys(array_count_values($excel->parser->getColumn(9)));
            $country_analysis_value = array_values(array_count_values($excel->parser->getColumn(9)));
    
            $languge = count(array_unique($excel->parser->getColumn(8)));
            $languge_analysis_key = array_keys(array_count_values($excel->parser->getColumn(8)));
            $languge_analysis_value = array_values(array_count_values($excel->parser->getColumn(8)));
            $cites = count(array_unique($excel->parser->getColumn(13)));
    
    
            $VisitData = [
                'AllData' => $AllData,
                'VisitsCount' => count($AllData),
                'UsersCount' => $usersCount,
                'countryCount'=> $country,
                'socialCount' => $social,
                'langugeCount' => $languge,
                'citesCount' => $cites,
                'social_analysis_key' => $social_analysis_key,
                'social_analysis_value' => $social_analysis_value,
                'country_analysis_key' => $country_analysis_key,
                'country_analysis_value' => $country_analysis_value,
                'languge_analysis_key' => $languge_analysis_key,
                'languge_analysis_value' => $languge_analysis_value
    
            ];
            
        }
        return $VisitData;
    }
}