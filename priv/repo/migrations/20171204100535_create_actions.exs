defmodule Pi.Repo.Migrations.CreateActions do
  use Ecto.Migration

  def change do
    create table(:actions) do
      add :name, :string
      add :notes, :string
      add :start_date, :date
      add :deadline, :date
      add :status, :string
      add :goal_id, references(:goals, on_delete: :nothing)

      timestamps()
    end

    create index(:actions, [:goal_id])
  end
end
