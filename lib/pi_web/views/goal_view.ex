defmodule PiWeb.GoalView do
  use PiWeb, :view
  alias PiWeb.GoalView

  def render("index.json", %{goals: goals}) do
    %{data: render_many(goals, GoalView, "goal.json")}
  end

  def render("show.json", %{goal: goal}) do
    %{data: render_one(goal, GoalView, "goal.json")}
  end

  def render("goal.json", %{goal: goal}) do
    %{id: goal.id,
      name: goal.name,
      notes: goal.notes,
      deadline: goal.deadline,
      status: goal.status}
  end
end
