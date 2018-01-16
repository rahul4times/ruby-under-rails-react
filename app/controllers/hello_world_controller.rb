# frozen_string_literal: true
require 'open-uri'
class HelloWorldController < ApplicationController
  layout "hello_world"




  def index

    response = open('https://api.iextrading.com/1.0/stock/aapl/quote').read

    @hello_world_props = { name: "Stranger", boombom: JSON.parse(response) }

  end
end
