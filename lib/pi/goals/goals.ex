defmodule Pi.Goals do
  @moduledoc """
  The Goals context.
  """

  import Ecto.Query, warn: false
  alias Pi.Repo

  alias Pi.Goals.Action
  alias Pi.Goals.Goal

  def list_goals do
    Repo.all(Goal)
  end

  def get_goal!(id), do: Repo.get!(Goal, id)

  def create_goal(attrs \\ %{}) do
    %Goal{}
    |> Goal.changeset(attrs)
    |> Repo.insert()
  end

  def update_goal(%Goal{} = goal, attrs) do
    goal
    |> Goal.changeset(attrs)
    |> Repo.update()
  end

  def delete_goal(%Goal{} = goal) do
    Repo.delete(goal)
  end

  def change_goal(%Goal{} = goal) do
    Goal.changeset(goal, %{})
  end

  def list_actions do
    Repo.all(Action)
  end

  def get_action!(id), do: Repo.get!(Action, id)

  def create_action(attrs \\ %{}) do
    %Action{}
    |> Action.changeset(attrs)
    |> Repo.insert()
  end

  def update_action(%Action{} = action, attrs) do
    action
    |> Action.changeset(attrs)
    |> Repo.update()
  end

  def delete_action(%Action{} = action) do
    Repo.delete(action)
  end

  def change_action(%Action{} = action) do
    Action.changeset(action, %{})
  end
end