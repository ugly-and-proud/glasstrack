class InventoriesController < ApplicationController
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

end
