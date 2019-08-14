class InventoriesController < ApplicationController

    skip_before_action :verify_authenticity_token
    require 'square_connect'
    TOKEN = 'EAAAEDGLveP06IacYRFtCNzyL4x_Y1PS7nP64TidvwtWPiNi0aIs2-ppcROJ2XMI'

    LOCATION_ID = 'CAWM1WTQJNK6H'

    SquareConnect.configure do |config|
      # Configure OAuth2 access token for authorization: oauth2
      config.access_token = TOKEN
    end

    def get_count
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new
        the_obj_id = {
            "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO"
        }
        obj_opts = {
            "locations_ids":LOCATION_ID
        }
        begin
          #UpsertCatalogObject
          result_inventory_count = inventory_api.batch_retrieve_inventory_counts(the_obj_id, obj_opts)

          p result_inventory_count

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        render  json:result_inventory_count
    end

    def get_price
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new
        object_id ="3IDQ2B6D7XC4H6JKNZP37PYT"
        opts = {
          include_related_objects: true
        }
        begin
          #UpsertCatalogObject
          item_price = api_instance.retrieve_catalog_object(object_id,opts)
          # p result1
          p item_price.object.item_variation_data.name
        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        render json:item_price
    end



    def change_wine
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new
        # p 'Bannana'
        # p params
        # p 'The Wine Bottle '
        # p wine_change_params
        # p '[wine]'
        # p wine_change_params[:wine_bottle]
        # p '. parameters'
        # p wine_change_params.parameters
        num_it = wine_change_params[:wine_bottle].to_s
        # p 'convert to string'
        # p num_it

        inventory_obj_change = {
          "idempotency_key":"test1111",
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT",
                "from_state":"IN_STOCK",
                "to_state":"SOLD",
                "location_id":LOCATION_ID,
                "quantity":num_it,
                "occurred_at":"2019-08-13T05:25:24.878Z"
              }
            ]
        }

        begin
          #UpsertCatalogObject
          p ' The object change '
          p inventory_obj_change
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change)
          p result_inventory_change

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        # render  json:result_inventory_count
    end

    def change_beer
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new
        # p 'Bannana'
        # p params
        # p 'The Beer Bottle '
        # p beer_change_params
        # p '[wine]'
        # p beer_change_params[:beer_bottle]
        # p '. parameters'
        # # p wine_change_params.parameters
        num_it = beer_change_params[:beer_bottle].to_s
        # p 'convert to string'
        # p num_it

        inventory_obj_change = {
          "idempotency_key":"test11111",
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO",
                "from_state":"IN_STOCK",
                "to_state":"SOLD",
                "location_id":LOCATION_ID,
                "quantity":num_it,
                "occurred_at":"2019-08-13T05:25:24.878Z"
              }
            ]
        }

        begin
          #UpsertCatalogObject
          p ' The object change '
          p inventory_obj_change
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change)
          p result_inventory_change

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        # render  json:result_inventory_count
    end

    def wine_change_params
        params.permit(:wine_bottle, :inventory)
    end
    def beer_change_params
        params.permit(:beer_bottle, :inventory)
    end

end
