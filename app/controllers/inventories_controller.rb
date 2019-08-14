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

    def get_price_beer
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
    def get_price_wine
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new
        object_id ="JPIVA25GH6HPBFEXOWDB47PO"
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

        num_it_wine = wine_change_params[:wine_bottle].to_s
        date_it_wine = Time.now.to_datetime.rfc3339.to_s
        idem_it_wine = Digest::SHA1.hexdigest([Time.now, rand].join).to_s

        p ' num of bottles wine'
        p num_it_wine
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
          #UpsertCatalogObject
          p ' The object change Wine'
          p inventory_obj_change_wine
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_wine)
          p 'The Result wine'
          p result_inventory_change

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        # render  json:result_inventory_count
    end

    def change_beer
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new

        num_it = beer_change_params[:beer_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        p ' num of bottles beer'
        p num_it
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
          #UpsertCatalogObject
          p ' The object change Beer'
          p inventory_obj_change_beer
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_beer)
          p 'The beer result'
          p result_inventory_change

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        # render  json:result_inventory_count
    end

    def add_wine
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new

        num_it = wine_change_params[:wine_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        p ' num of bottles beer'
        p num_it
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
          #UpsertCatalogObject
          p ' The object change Beer'
          p inventory_obj_change_beer
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_beer)
          p 'The beer result'
          p result_inventory_change

        rescue SquareConnect::ApiError => e
          puts "Exception when calling CatalogApi->upsert_catalog_object: #{e}"
        end
        # render  json:result_inventory_count
    end
    def add_beer
        api_instance = SquareConnect::CatalogApi.new
        inventory_api = SquareConnect::InventoryApi.new

        num_it = beer_change_params[:beer_bottle].to_s
        date_it = Time.now.to_datetime.rfc3339.to_s
        idem_it = Digest::SHA1.hexdigest([Time.now, rand].join).to_s
        p ' num of bottles beer'
        p num_it
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
          #UpsertCatalogObject
          p ' The object change Beer'
          p inventory_obj_change_beer
          result_inventory_change = inventory_api.batch_change_inventory(inventory_obj_change_beer)
          p 'The beer result'
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
