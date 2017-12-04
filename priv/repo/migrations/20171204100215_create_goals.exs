defmodule Pi.Repo.Migrations.CreateGoals do
  use Ecto.Migration

  def change do
    create table(:goals) do
      add :name, :string
      add :notes, :string
      add :deadline, :date
      add :status, :string

      timestamps()
    end

  end
end
