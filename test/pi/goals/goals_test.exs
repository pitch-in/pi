defmodule Pi.GoalsTest do
  use Pi.DataCase

  alias Pi.Goals

  describe "goals" do
    alias Pi.Goals.Goal

    @valid_attrs %{deadline: ~D[2010-04-17], name: "some name", notes: "some notes", status: "some status"}
    @update_attrs %{deadline: ~D[2011-05-18], name: "some updated name", notes: "some updated notes", status: "some updated status"}
    @invalid_attrs %{deadline: nil, name: nil, notes: nil, status: nil}

    def goal_fixture(attrs \\ %{}) do
      {:ok, goal} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Goals.create_goal()

      goal
    end

    test "list_goals/0 returns all goals" do
      goal = goal_fixture()
      assert Goals.list_goals() == [goal]
    end

    test "get_goal!/1 returns the goal with given id" do
      goal = goal_fixture()
      assert Goals.get_goal!(goal.id) == goal
    end

    test "create_goal/1 with valid data creates a goal" do
      assert {:ok, %Goal{} = goal} = Goals.create_goal(@valid_attrs)
      assert goal.deadline == ~D[2010-04-17]
      assert goal.name == "some name"
      assert goal.notes == "some notes"
      assert goal.status == "some status"
    end

    test "create_goal/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Goals.create_goal(@invalid_attrs)
    end

    test "update_goal/2 with valid data updates the goal" do
      goal = goal_fixture()
      assert {:ok, goal} = Goals.update_goal(goal, @update_attrs)
      assert %Goal{} = goal
      assert goal.deadline == ~D[2011-05-18]
      assert goal.name == "some updated name"
      assert goal.notes == "some updated notes"
      assert goal.status == "some updated status"
    end

    test "update_goal/2 with invalid data returns error changeset" do
      goal = goal_fixture()
      assert {:error, %Ecto.Changeset{}} = Goals.update_goal(goal, @invalid_attrs)
      assert goal == Goals.get_goal!(goal.id)
    end

    test "delete_goal/1 deletes the goal" do
      goal = goal_fixture()
      assert {:ok, %Goal{}} = Goals.delete_goal(goal)
      assert_raise Ecto.NoResultsError, fn -> Goals.get_goal!(goal.id) end
    end

    test "change_goal/1 returns a goal changeset" do
      goal = goal_fixture()
      assert %Ecto.Changeset{} = Goals.change_goal(goal)
    end
  end

  describe "actions" do
    alias Pi.Goals.Action

    @valid_attrs %{deadline: ~D[2010-04-17], name: "some name", notes: "some notes", start_date: ~D[2010-04-17], status: "some status"}
    @update_attrs %{deadline: ~D[2011-05-18], name: "some updated name", notes: "some updated notes", start_date: ~D[2011-05-18], status: "some updated status"}
    @invalid_attrs %{deadline: nil, name: nil, notes: nil, start_date: nil, status: nil}

    def action_fixture(attrs \\ %{}) do
      {:ok, action} =
        attrs
        |> Enum.into(@valid_attrs)
        |> Goals.create_action()

      action
    end

    test "list_actions/0 returns all actions" do
      action = action_fixture()
      assert Goals.list_actions() == [action]
    end

    test "get_action!/1 returns the action with given id" do
      action = action_fixture()
      assert Goals.get_action!(action.id) == action
    end

    test "create_action/1 with valid data creates a action" do
      assert {:ok, %Action{} = action} = Goals.create_action(@valid_attrs)
      assert action.deadline == ~D[2010-04-17]
      assert action.name == "some name"
      assert action.notes == "some notes"
      assert action.start_date == ~D[2010-04-17]
      assert action.status == "some status"
    end

    test "create_action/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = Goals.create_action(@invalid_attrs)
    end

    test "update_action/2 with valid data updates the action" do
      action = action_fixture()
      assert {:ok, action} = Goals.update_action(action, @update_attrs)
      assert %Action{} = action
      assert action.deadline == ~D[2011-05-18]
      assert action.name == "some updated name"
      assert action.notes == "some updated notes"
      assert action.start_date == ~D[2011-05-18]
      assert action.status == "some updated status"
    end

    test "update_action/2 with invalid data returns error changeset" do
      action = action_fixture()
      assert {:error, %Ecto.Changeset{}} = Goals.update_action(action, @invalid_attrs)
      assert action == Goals.get_action!(action.id)
    end

    test "delete_action/1 deletes the action" do
      action = action_fixture()
      assert {:ok, %Action{}} = Goals.delete_action(action)
      assert_raise Ecto.NoResultsError, fn -> Goals.get_action!(action.id) end
    end

    test "change_action/1 returns a action changeset" do
      action = action_fixture()
      assert %Ecto.Changeset{} = Goals.change_action(action)
    end
  end
end
