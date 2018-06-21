<?php

namespace App\Http\Controllers;

use App\Position;
use App\Http\Requests\PositionRequest;

class PositionController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
      return response(Position::all());
    }

  /**
   * @param PositionRequest $request
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function store(PositionRequest $request)
    {
        Position::create($request->all());
        return response(Position::all()->last(), 201);
    }

    /**
     * Display the specified resource.
     *
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function show(Position $position)
    {
      return response($position);
    }

  /**
   * Update the specified resource in storage.
   * @param PositionRequest $request
   * @param Position $position
   * @return \Illuminate\Contracts\Routing\ResponseFactory|\Symfony\Component\HttpFoundation\Response
   */
    public function update(PositionRequest $request, Position $position)
    {
        $position->update($request->all());
        return response($position);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  \App\Position  $position
     * @return \Illuminate\Http\Response
     */
    public function destroy(Position $position)
    {
        $position->delete();
        return response('', 204);
    }
}
