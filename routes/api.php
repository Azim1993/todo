<?php

use Illuminate\Http\Request;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/
Route::post('/login', 'Auth\ApiAuthorization@login')
    ->name('api.login');

Route::middleware('auth:api')->group(function() {
    Route::post('/logout', 'Auth\ApiAuthorization@logout')
        ->name('api.logout');
    Route::post('/refresh', 'Auth\ApiAuthorization@refresh')
        ->name('api.refresh');
});
Route::middleware('auth:api')->get('/user', function (Request $request) {
    return $request->user();
});
