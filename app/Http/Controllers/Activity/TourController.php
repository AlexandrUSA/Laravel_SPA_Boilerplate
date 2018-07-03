<?php

namespace App\Http\Controllers\Activity;

use App\Tour;
use Illuminate\Http\Request;

class TourController extends BaseController
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        return Tour::all();
    }

  public function archive()
  {
    return Tour::onlyTrashed()->get();
  }

  /**
   * Получаем конкретного уволенного сотрудника
   * @param Request $request
   * @return mixed
   */
  public function archiveOne(Request $request)
  {
    return Tour::onlyTrashed()
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
    $client = Tour::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
    $client->forceDelete();
    return response('', 204);
  }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        Tour::create($request->all());
        return Tour::all()->last();
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function show(Tour $tour)
    {
        return $tour;
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, Tour $tour)
    {
        $tour->update(request()->all());
        return $tour;
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Tour  $tour
     * @return \Illuminate\Http\Response
     */
    public function destroy(Tour $tour)
    {
        $tour->delete();
    }
}
