Rails.application.routes.draw do
  mount_devise_token_auth_for 'User', at: 'auth'
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  scope '/api' do
    get :food, to: 'foods#index'
  end

  scope :auth do
    get 'is_signed_in', to: 'auth#is_signed_in?'
  end
end
