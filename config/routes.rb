Rails.application.routes.draw do
  
  resources :dog_tags, only: [:index, :show, :create]
  resources :tags, only: [:index, :show]
  resources :users, only: [:show, :create, :index]
  resources :dogs
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"
  get '/me', to: "users#show"
  get '/mypups', to: "dogs#my_pups"


  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
