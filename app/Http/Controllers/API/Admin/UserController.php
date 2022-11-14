<?php

namespace App\Http\Controllers\API\Admin;

use App\Models\User;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;
use App\Http\Resources\UserCollection;

class UserController extends Controller
{
    public function index(User $user, Request $request)
    {   
        return [
            'data' => [
                'users' => $user->getUser($request)
            ],
            'isSuccess' => true,
            'message' => ''
        ];
    }
}
