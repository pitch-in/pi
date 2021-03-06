# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :pi,
  ecto_repos: [Pi.Repo]

# Configures the endpoint
config :pi, PiWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "8QRf+p2og+147PUrebfe2Q8hzMEnjONaJYjFfWy4g941mY9gftQ2L4QNQVSEGpzT",
  render_errors: [view: PiWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Pi.PubSub,
           adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
