<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return view('welcome');
});

Route::get("/comments", 'App\Http\Controllers\CommentController@getItemList')->name('comment.get');
Route::get("/comments/add", 'App\Http\Controllers\CommentController@addItem')->name('comment.adds');
Route::post("/comments/add", 'App\Http\Controllers\CommentController@addItem')->name('comment.add');