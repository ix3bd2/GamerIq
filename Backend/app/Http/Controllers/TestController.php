<?php

namespace App\Http\Controllers;

use GuzzleHttp\Client;

class TestController extends Controller
{

    public function testEndpoint()
    {
        $client = new Client();
        $response = $client->get("https://www.g2a.com/search/api/v3/suggestions?itemsPerPage=4&phrase=gta&hasPlus=false&currency=USD");
        dump($response->getBody());
    }

}
