class PagesController < ApplicationController
    # Method decides which features the user will have access to based on role
    def root
        if user_signed_in?
            @manager = current_user.has_role? :manager
            @bartender = current_user.has_role? :bartender
        end
    end

    def barpos
    end

    def inventory
    end

    def about
    end

    def login
    end

    def home
    end

end
