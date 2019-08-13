Rails.application.routes.draw do
  # devise_for :managers
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#root'
  get '/inventories/get_count' => "inventories#get_count"
  get '/inventories/get_price' => "inventories#get_price"
  post '/inventories/change_wine' => "inventories#change_wine"
  post '/inventories/change_beer' => "inventories#change_beer"

end
