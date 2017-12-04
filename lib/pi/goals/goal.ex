defmodule Pi.Goals.Goal do
  use Ecto.Schema
  import Ecto.Changeset
  alias Pi.Goals.Goal


  schema "goals" do
    field :deadline, :date
    field :name, :string
    field :notes, :string
    field :status, :string

    timestamps()
  end

  @doc false
  def changeset(%Goal{} = goal, attrs) do
    goal
    |> cast(attrs, [:name, :notes, :deadline, :status])
    |> validate_required([:name, :notes, :deadline, :status])
  end
end
