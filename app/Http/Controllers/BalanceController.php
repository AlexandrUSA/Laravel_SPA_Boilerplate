<?php

namespace App\Http\Controllers;

use App\Balance;
use Illuminate\Http\Request;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class BalanceController extends Controller
{

  /**
   * Получаем данные аккаунта
   * @return mixed
   */
  public function getAccount()
  {
    return Stripe::account()->details();
  }

  public function getTransfers ()
  {
    return Stripe::transfers()->all();
  }

  public function getCharges ()
  {
    return Stripe::charges()->all();
  }

  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    $balance = Stripe::balance()->current();
    return $balance['pending'];
//        return Stripe::customers()->all();
  }

  /**
   * Show the form for creating a new resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function create()
  {
    //
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    //
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function show(Balance $balance)
  {
    //
  }

  /**
   * Show the form for editing the specified resource.
   *
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function edit(Balance $balance)
  {
    //
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Balance $balance)
  {
    //
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Balance $balance
   * @return \Illuminate\Http\Response
   */
  public function destroy(Balance $balance)
  {
    //
  }
}
