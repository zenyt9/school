<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\CarCategoryController;
use App\Http\Controllers\DriverController;
use App\Http\Controllers\CarController;
use App\Http\Controllers\CustomerController;
use App\Http\Controllers\RentalController;
use App\Http\Controllers\BookingController;

// Welcome page
Route::get('/', function () {
    return view('welcome');
})->name('welcome');

// Resource routes
Route::resource('categories', CarCategoryController::class);
Route::resource('drivers', DriverController::class);
Route::resource('cars', CarController::class);
Route::resource('customers', CustomerController::class);
Route::resource('rentals', RentalController::class);
Route::resource('bookings', BookingController::class);
