# # Load the gem
require 'square_connect'

# date = DateTime.new(2001,2,3,4,5,6)


# load the gem
require 'square_connect'
TOKEN = 'EAAAEDGLveP06IacYRFtCNzyL4x_Y1PS7nP64TidvwtWPiNi0aIs2-ppcROJ2XMI'

LOCATION_ID = 'CAWM1WTQJNK6H'
# setup authorization
SquareConnect.configure do |config|
  # Configure OAuth2 access token for authorization: oauth2
  config.access_token = TOKEN
end

api_instance = SquareConnect::CatalogApi.new
inventory_api = SquareConnect::InventoryApi.new

beverage_obj = {
  "idempotency_key":"12345678",
  "object":{
    "type":"ITEM",
    "is_deleted":false,
    "id":"#5",
    "item_data":{
      "name":"Beverage",
      "variations":[
          {
          "type":"ITEM_VARIATION",
          "id":"#BEER_ID",
          "item_variation_data":{
            "item_id":"#5",
            "name":"Beer",
            "pricing_type":"FIXED_PRICING",
            "price_money": {
                  "amount": 5,
                  "currency": "USD"
                  },
          }
        },
          {
          "type":"ITEM_VARIATION",
          "id":"#WINE_ID",
          "item_variation_data":{
            "item_id":"#5",
            "name":"Wine",
            "pricing_type":"FIXED_PRICING",
            "price_money": {
                  "amount": 5,
                  "currency": "USD"
                  },
           }
          }
        ]
    }
  }
}

# begin
#   #UpsertCatalogObject
#   result = api_instance.upsert_catalog_object(beverage_obj)
#   p result
# rescue SquareConnect::ApiError => e
#   puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
# end
object_id ="3IDQ2B6D7XC4H6JKNZP37PYT"
opts = {
  include_related_objects: true
}
begin
  #UpsertCatalogObject
  result1 = api_instance.retrieve_catalog_object(object_id,opts)
  # p result1
  p result1.object.item_variation_data.name
rescue SquareConnect::ApiError => e
  puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
end

object_id2 ="JPIVA25GH6HPBFEXOWDB47PO"
opts2 = {
  include_related_objects: true # BOOLEAN | If `true`, the response will include additional objects that are related to the requested object, as follows:  If the `object` field of the response contains a [CatalogItem](#type-catalogitem), its associated [CatalogCategory](#type-catalogcategory), [CatalogTax](#type-catalogtax)es, [CatalogImage](#type-catalogimage)s and [CatalogModifierList](#type-catalogmodifierlist)s will be returned in the `related_objects` field of the response. If the `object` field of the response contains a [CatalogItemVariation](#type-catalogitemvariation), its parent [CatalogItem](#type-catalogitem) will be returned in the `related_objects` field of  the response.  Default value: `false`
}
begin
  #UpsertCatalogObject
  result2 = api_instance.retrieve_catalog_object(object_id2,opts2)
  p result2.object.item_variation_data.name
rescue SquareConnect::ApiError => e
  puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
end






inventory_obj = {
  "idempotency_key":"99999",
  "type": "inventory.count.updated",
  "changes":[
      "type":"ADJUSTMENT",
      "adjustment":{
        "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT",
        "from_state":"NONE",
        "to_state":"IN_STOCK",
        "location_id":LOCATION_ID,
        "quantity":"100",
        "occurred_at": "2019-08-07T05:25:24.878Z"
      }
    ]

}

# inventory_obj2 = {
#   "idempotency_key":"99998",
#   "type": "inventory.count.updated",
#   "changes":[
#       "type":"ADJUSTMENT",
#       "PHYSICAL_COUNT":{
#         "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO",
#         "from_state":"NONE",
#         "to_state":"IN_STOCK",
#         "location_id":LOCATION_ID,
#         "quantity":"100",
#          "occurred_at": "2019-08-07T05:25:24.878Z"
#       }
#     ]
#
# }


# begin
#   #UpsertCatalogObject
#   result_inventory = inventory_api.batch_change_inventory(inventory_obj2)
#   p result_inventory
#
# rescue SquareConnect::ApiError => e
#   puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
# end
 obj_opts = {
     "locations_ids":LOCATION_ID
 }
 obj_opts2 = {
     "locations_ids":LOCATION_ID
 }

 the_obj_id = {
     "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO"
 }
 the_obj_id2 = {
     "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT"
 }
begin
  #UpsertCatalogObject
  result_inventory_count = inventory_api.batch_retrieve_inventory_counts(the_obj_id, obj_opts)

  p result_inventory_count.counts[0].quantity
  p result_inventory_count.counts[1].quantity

rescue SquareConnect::ApiError => e
  puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
end






inventory_obj_change = {
  "idempotency_key":"test1",
  "type": "inventory.count.updated",
  "changes":[
      "type":"ADJUSTMENT",
      "adjustment":{
        "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT",
        "from_state":"IN_STOCK",
        "to_state":"SOLD",
        "location_id":LOCATION_ID,
        "quantity":"1",
        "occurred_at": "2019-08-08T06:25:24.878Z"
      }
    ]

}

begin
  #UpsertCatalogObject
  result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change)
  p result_inventory_change

rescue SquareConnect::ApiError => e
  puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
end
