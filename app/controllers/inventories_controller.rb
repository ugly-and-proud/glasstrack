class InventoriesController < ApplicationController

    # Needed to prevent CSRF error
    skip_before_action :verify_authenticity_token
    # Connection to the square_connect GEM file
    require 'square_connect'

    # API Keys and necessary ID
    TOKEN = 'EAAAEDGLveP06IacYRFtCNzyL4x_Y1PS7nP64TidvwtWPiNi0aIs2-ppcROJ2XMI'
    LOCATION_ID = 'CAWM1WTQJNK6H'

    SquareConnect.configure do |config|
      # Configure OAuth2 access token for authorization: oauth2
      config.access_token = TOKEN
    end

    # A get method to pull data of the catalog item variations
    def get_catalog
        # Instanciating the Catalog API
        api_instance = SquareConnect::CatalogApi.new

        # The JSON request object
        object_ids = {
            "object_ids": [
                "JPIVA25GH6HPBFEXOWDB47PO",
                "3IDQ2B6D7XC4H6JKNZP37PYT"
            ],
            "include_related_objects": true
        }

        begin
         # p catalog_items from the API databaase
          catalog_items = api_instance.batch_retrieve_catalog_objects(object_ids)
          # Check for Errors in the api call and sends back the error
        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->batch_retrieve_catalog_objects: #{e}"
        end
        render json: result1
    end

    def get_count
        # Instanciating the Inventory API
        inventory_api = SquareConnect::InventoryApi.new
        # The JSON requst objects
        the_obj_id = {
            "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO"
        }
        obj_opts = {
            "locations_ids":LOCATION_ID
        }

        begin
          # Inventory counts from the API database
          result_inventory_count = inventory_api.batch_retrieve_inventory_counts(the_obj_id, obj_opts)
         # Check for Errors in the api call and sends back the error
        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        render  json:result_inventory_count
    end

    def get_price_beer
        # Instanciating the catalog API
        api_instance = SquareConnect::CatalogApi.new

        object_id ="3IDQ2B6D7XC4H6JKNZP37PYT"
        opts = {
          include_related_objects: true
        }

        begin
          #Item prices from API database
          item_price = api_instance.retrieve_catalog_object(object_id,opts)

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->retrieve_catalog_object: #{e}"
        end
        render json:item_price
    end

    def get_price_wine
        # Instanciating from catalog API database again for wine
        api_instance = SquareConnect::CatalogApi.new

        object_id ="JPIVA25GH6HPBFEXOWDB47PO"
        opts = {
          include_related_objects: true
        }

        begin
          #Item prices from API again for wine
          item_price = api_instance.retrieve_catalog_object(object_id,opts)
        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->retrieve_catalog_object: #{e}"
        end
        render json:item_price
    end

    def change_wine
        inventory_api = SquareConnect::InventoryApi.new
        # Converts empty wine bottles recieved from client to a string to be used for the JSON request object
        num_it_wine = wine_change_params[:wine_bottle].to_s
        # Used to create string variable for the date of the inventory change
        date_it_wine = Time.now.to_datetime.rfc3339.to_s
        # Used to create a unique idempotency key for every new inventory change
        idem_it_wine = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        # JSON request object to sell an item
        inventory_obj_change_wine = {
          "idempotency_key":idem_it_wine,
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT",
                "from_state":"IN_STOCK",
                "to_state":"SOLD",
                "location_id":LOCATION_ID,
                "quantity":num_it_wine,
                "occurred_at":date_it_wine
              }
            ]
        }

        begin
        # Calls the API to adjust inventory count
        inventory_api.batch_change_inventory(inventory_obj_change_wine)

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
    end

    def change_beer
        # See previous method
        inventory_api = SquareConnect::InventoryApi.new

        num_it = beer_change_params[:beer_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        inventory_obj_change_beer = {
          "idempotency_key":idem_it,
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO",
                "from_state":"IN_STOCK",
                "to_state":"SOLD",
                "location_id":LOCATION_ID,
                "quantity":num_it,
                "occurred_at":date_it
              }
            ]
        }

        begin
            inventory_api.batch_change_inventory(inventory_obj_change_beer)

        rescue SquareConnect::ApiError => e
            puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
    end

    def add_wine
        inventory_api = SquareConnect::InventoryApi.new

        num_it = wine_change_params[:wine_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        inventory_obj_change_beer = {
          "idempotency_key":idem_it,
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"3IDQ2B6D7XC4H6JKNZP37PYT",
                "from_state":"NONE",
                "to_state":"IN_STOCK",
                "location_id":LOCATION_ID,
                "quantity":num_it,
                "occurred_at":date_it
              }
            ]
        }

        begin
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_beer)

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
    end
    def add_beer
        inventory_api = SquareConnect::InventoryApi.new

        num_it = beer_change_params[:beer_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        inventory_obj_change_beer = {
          "idempotency_key":idem_it,
          "type": "inventory.count.updated",
          "changes":[
              "type":"ADJUSTMENT",
              "adjustment":{
                "catalog_object_id":"JPIVA25GH6HPBFEXOWDB47PO",
                "from_state":"NONE",
                "to_state":"IN_STOCK",
                "location_id":LOCATION_ID,
                "quantity":num_it,
                "occurred_at":date_it
              }
            ]
        }

        begin
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_beer)

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
    end

    # Params for each API request 
    def wine_change_params
        params.permit(:wine_bottle, :inventory)
    end

    def beer_change_params
        params.permit(:beer_bottle, :inventory)
    end

    def catalog_params
        params.permit(:catalog_object_id, :catalog)
    end

end
