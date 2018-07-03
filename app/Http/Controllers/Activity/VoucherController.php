<?php

namespace App\Http\Controllers\Activity;

use App\Voucher;
use Illuminate\Http\Request;

class VoucherController extends BaseController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Voucher::all();
  }

  public function archive()
  {
    return Voucher::onlyTrashed()->get();
  }

  /**
   * Получаем конкретного уволенного сотрудника
   * @param Request $request
   * @return mixed
   */
  public function archiveOne(Request $request)
  {
    return Voucher::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
  }

  /**
   * Удаление сотрудников из архива.
   * @param Request $request
   * @return mixed
   */
  public function deleteFromArchive(Request $request)
  {
    $voucher =Voucher::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
    $voucher->forceDelete();
    return response('', 204);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @return \Illuminate\Http\Response
   */
  public function store(Request $request)
  {
    Voucher::create($request->all());
    return Voucher::all()->last();
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Voucher $voucher
   * @return \Illuminate\Http\Response
   */
  public function show(Voucher $voucher)
  {
    return $voucher;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  \Illuminate\Http\Request $request
   * @param  \App\Voucher $voucher
   * @return \Illuminate\Http\Response
   */
  public function update(Request $request, Voucher $voucher)
  {
    $voucher->update($request->all());
    return $voucher;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Voucher $voucher
   * @return \Illuminate\Http\Response
   */
  public function destroy(Voucher $voucher)
  {
    $voucher->delete();
  }
}
