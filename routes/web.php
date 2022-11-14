<?php

use Illuminate\Support\Facades\Route;

Route::view('/{any?}', 'app');
Route::view('/{any?}/{any1?}', 'app');
Route::view('/{any?}/{any1?}/{any2?}', 'app');