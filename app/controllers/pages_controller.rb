class PagesController < ApplicationController

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

end
