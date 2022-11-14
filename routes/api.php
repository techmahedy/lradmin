<?php

use App\Http\Controllers\API\Admin\UserController;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\Auth\AuthController;

Route::post('login',[AuthController::class,'login'])->name('login');

Route::group(['middleware' => ['auth:api']], function () {
    Route::post('logout', [AuthController::class, 'logout']);

    Route::get('users', [UserController::class, 'index']);

});
