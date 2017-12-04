defmodule Pi.Goals.Action do
  use Ecto.Schema
  import Ecto.Changeset
  alias Pi.Goals.Action


  schema "actions" do
    field :deadline, :date
    field :name, :string
    field :notes, :string
    field :start_date, :date
    field :status, :string
    field :goal_id, :id

    timestamps()
  end

  @doc false
  def changeset(%Action{} = action, attrs) do
    action
    |> cast(attrs, [:name, :notes, :start_date, :deadline, :status])
    |> validate_required([:name, :notes, :start_date, :deadline, :status])
  end
end
