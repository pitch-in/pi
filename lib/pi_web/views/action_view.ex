defmodule PiWeb.ActionView do
  use PiWeb, :view
  alias PiWeb.ActionView

  def render("index.json", %{actions: actions}) do
    %{data: render_many(actions, ActionView, "action.json")}
  end

  def render("show.json", %{action: action}) do
    %{data: render_one(action, ActionView, "action.json")}
  end

  def render("action.json", %{action: action}) do
    %{id: action.id,
      name: action.name,
      notes: action.notes,
      start_date: action.start_date,
      deadline: action.deadline,
      status: action.status}
  end
end
