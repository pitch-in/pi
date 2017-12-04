defmodule PiWeb.Router do
  use PiWeb, :router

  pipeline :api do
    plug(:accepts, ["json"])
  end

  scope "/api", PiWeb do
    pipe_through(:api)

    resources("/goals", GoalController)
    resources("/actions", ActionController)
  end
end