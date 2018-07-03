<?php

namespace App\Http\Controllers\Activity;

use App\Client;
use Illuminate\Http\Request;
use App\Http\Requests\ClientRequest;

class ClientController extends BaseController
{
  /**
   * Display a listing of the resource.
   *
   * @return \Illuminate\Http\Response
   */
  public function index()
  {
    return Client::all();
  }

  /**
   * Архив удаленных клиентов.
   *
   * @return \Illuminate\Http\Response
   */
  public function archive()
  {
    return Client::onlyTrashed()->get();
  }

  /**
   * Получаем конкретного уволенного сотрудника
   * @param Request $request
   * @return mixed
   */
  public function archiveOne(Request $request)
  {
    return Client::onlyTrashed()
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
    $client = Client::onlyTrashed()
      ->where('id', $request->route('id'))
      ->first();
    $client->forceDelete();
    return response('', 204);
  }

  /**
   * Store a newly created resource in storage.
   *
   * @param  ClientRequest $request
   * @return \Illuminate\Http\Response
   */
  public function store(ClientRequest $request)
  {
    Client::create($request->all());
    return response(Client::all()->last(), 201);
  }

  /**
   * Display the specified resource.
   *
   * @param  \App\Client $client
   * @return \Illuminate\Http\Response
   */
  public function show(Client $client)
  {
    return $client;
  }

  /**
   * Update the specified resource in storage.
   *
   * @param  ClientRequest $request
   * @param  \App\Client $client
   * @return \Illuminate\Http\Response
   */
  public function update(ClientRequest $request, Client $client)
  {
    $client->update($request->all());
    return $client;
  }

  /**
   * Remove the specified resource from storage.
   *
   * @param  \App\Client $client
   * @return \Illuminate\Http\Response
   */
  public function destroy(Client $client)
  {
    $client->delete();
    return response('', 204);
  }
}
