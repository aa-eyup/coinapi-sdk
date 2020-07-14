# NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
# https://openapi-generator.tech
# Do not edit the class manually.

defmodule OMS-RESTAPI.Model.PositionData do
  @moduledoc """
  
  """

  @derive [Poison.Encoder]
  defstruct [
    :"id",
    :"symbol_exchange",
    :"symbol_coinapi",
    :"avg_entry_price",
    :"quantity",
    :"is_buy",
    :"unrealised_pn_l",
    :"leverage",
    :"cross_margin",
    :"liquidation_price",
    :"raw_data"
  ]

  @type t :: %__MODULE__{
    :"id" => String.t | nil,
    :"symbol_exchange" => String.t | nil,
    :"symbol_coinapi" => String.t | nil,
    :"avg_entry_price" => float() | nil,
    :"quantity" => float() | nil,
    :"is_buy" => boolean() | nil,
    :"unrealised_pn_l" => float() | nil,
    :"leverage" => float() | nil,
    :"cross_margin" => boolean() | nil,
    :"liquidation_price" => float() | nil,
    :"raw_data" => String.t | nil
  }
end

defimpl Poison.Decoder, for: OMS-RESTAPI.Model.PositionData do
  def decode(value, _options) do
    value
  end
end
