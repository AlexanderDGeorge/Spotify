Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  
  root to: 'root#root'

  namespace :api, defaults: { format: :json } do
    resource :session, only: [:create, :destroy]
    resources :users, only: [:create]
    resources :playlists, only: [:create, :index, :show, :destroy]
    resources :playlist_songs, only: [:create, :destroy]
    resources :likes, only: [:create, :destroy]
    resources :songs, only: [:index, :show]
    resources :artists, only: [:index, :show]
    resources :albums, only: [:index, :show]
  end
end