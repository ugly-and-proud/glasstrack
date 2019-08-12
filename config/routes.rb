Rails.application.routes.draw do
  # devise_for :managers
  devise_for :users
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get '*path', to: 'pages#root', constraints: ->(request){ request.format.html? }
  root to: 'pages#root'
  get '/inventories/get_count' => "inventories#get_count"
end
