<?php
/**
 * Created by PhpStorm.
 * User: darryl
 * Date: 10/5/2017
 * Time: 6:12 AM
 */

namespace App\Http\Controllers\Finance;


use App\Http\Controllers\Controller;
use Cartalyst\Stripe\Laravel\Facades\Stripe;

class BaseController extends Controller
{
    public function getAll ()
    {
        $output = [];
        $output['transfers'] = Stripe::transfers()->all();;
        $output['charges'] = Stripe::charges()->all();
        $output['account'] = Stripe::account()->details();
        $output['balance'] = Stripe::balance()->current();

        return response($output, 200);
    }
}