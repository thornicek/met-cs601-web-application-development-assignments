{
  "Quotes" : [ {
    "QuoteId" : 1,
    "MinPrice" : 61,
    "Direct" : false,
    "OutboundLeg" : {
      "CarrierIds" : [ 1065 ],
      "OriginId" : 81727,
      "DestinationId" : 73076,
      "DepartureDate" : "2021-12-01T00:00:00"
    },
    "QuoteDateTime" : "2021-10-31T16:37:00"
  }, {
    "QuoteId" : 2,
    "MinPrice" : 81,
    "Direct" : true,
    "OutboundLeg" : {
      "CarrierIds" : [ 851 ],
      "OriginId" : 81727,
      "DestinationId" : 73076,
      "DepartureDate" : "2021-12-01T00:00:00"
    },
    "QuoteDateTime" : "2021-10-31T16:37:00"
  } ],
  "Carriers" : [ {
    "CarrierId" : 1065,
    "Name" : "Frontier Airlines"
  }, {
    "CarrierId" : 851,
    "Name" : "Alaska Airlines"
  } ],
  "Places" : [ {
    "Name" : "Chicago O'Hare International",
    "Type" : "Station",
    "PlaceId" : 73076,
    "IataCode" : "ORD",
    "SkyscannerCode" : "ORD",
    "CityName" : "Chicago",
    "CityId" : "CHIA",
    "CountryName" : "United States"
  }, {
    "Name" : "San Francisco International",
    "Type" : "Station",
    "PlaceId" : 81727,
    "IataCode" : "SFO",
    "SkyscannerCode" : "SFO",
    "CityName" : "San Francisco",
    "CityId" : "SFOA",
    "CountryName" : "United States"
  } ],
  "Currencies" : [ {
    "Code" : "USD",
    "Symbol" : "$",
    "ThousandsSeparator" : ",",
    "DecimalSeparator" : ".",
    "SymbolOnLeft" : true,
    "SpaceBetweenAmountAndSymbol" : false,
    "RoundingCoefficient" : 0,
    "DecimalDigits" : 2
  } ],
  "Routes" : [ {
    "QuoteDateTime" : "2021-10-31T16:37:00",
    "Price" : 61,
    "OriginId" : 81727,
    "DestinationId" : 73076,
    "QuoteIds" : [ 1, 2 ]
  } ]
}