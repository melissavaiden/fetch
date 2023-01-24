Rails.application.routes.draw do
  
  resources :dog_tags
  resources :tags
  resources :users do
    resources :dogs, only: [:index]
  end
  resources :dogs
  
  post '/login', to: "sessions#create"
  delete '/logout', to: "sessions#destroy"

  # Routing logic: fallback requests for React Router.
  # Leave this here to help deploy your app later!
  get "*path", to: "fallback#index", constraints: ->(req) { !req.xhr? && req.format.html? }
end
