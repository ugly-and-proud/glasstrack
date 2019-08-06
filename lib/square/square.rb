# # Load the gem
require 'square_connect'


# load the gem
require 'square_connect'
TOKEN = 'EAAAEDGLveP06IacYRFtCNzyL4x_Y1PS7nP64TidvwtWPiNi0aIs2-ppcROJ2XMI'
# setup authorization
SquareConnect.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = TOKEN
end

api_instance = SquareConnect::CatalogApi.new

# body = SquareConnect::UpsertCatalogObjectRequest.new # UpsertCatalogObjectRequest | An object containing the fields to POST for the request.  See the corresponding object definition for field details.

dummy_obj = { 
  "idempotency_key":"1234",
  "object":{
    "type":"ITEM",
    "is_deleted":false,
    "id":"#1",
    "item_data":{
      "name":"test2"
    }
  }
}

# begin
#   #UpsertCatalogObject
#   result = api_instance.upsert_catalog_object(dummy_obj)
#   p result
# rescue SquareConnect::ApiError => e
#   puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
# end

begin
  #UpsertCatalogObject
  result1 = api_instance.list_catalog
  p result1
rescue SquareConnect::ApiError => e
  puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
end