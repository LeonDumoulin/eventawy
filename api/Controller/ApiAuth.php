<?php
class ApiAuth
{
    public static function login(array $data)
    {
        $valedator = [
            'user' => 'string',
            'password' => 'string'
        ];
        $valed_data = NI_request::API_validate($data, $valedator);
        //$valed_data['password'] = sha1($valed_data['password']);
        $admin = model\admins::check($valed_data);
        if (empty($admin)) {
            NI_Api::$response['status'] = 200;
            NI_Api::$response['data'] = [
                'msg' => 'wrong username or password'
            ];
        } else {
            NI_Api::$response['status'] = 200;
            NI_Api::$response['data'] = [
                'msg' => 'login sucssfully',
                'token' => NI_JWT::CreateToken($valed_data),
                'key' => 'user',
                'data' => [
                    'id' => $admin->id,
                    'user' => $admin->user,
                    'role' => $admin->role
                ]
                
            ];
        }
    }
}
