import { Injectable } from '@angular/core';

import * as Goal from 'app/goal/goal';

import { goalFactory, nextGoalId } from 'app/goal/goal.test-factory';

import {
  assoc,
  dissoc,
  map,
  values,
  pipe,
  keys,
  head,
  identity,
  sort,
  inc,
  fromPairs,
  toString,
  find
} from 'ramda';

interface GoalHash {
  [id: string]: Goal.t;
}

@Injectable()
export class GoalsRepo {
  goals: GoalHash;

  constructor() {
    this.goals = pipe(map((goal: Goal.t) => [goal.id, goal]), fromPairs)(
      goalFactory.buildList(2)
    );
  }

  index(): Goal.t[] {
    return values(this.goals);
  }

  get(id: string): Goal.t {
    return this.goals[id];
  }

  getByActionId(id: string): Goal.t {
    return findByActionId(id, this.goals);
  }

  post(goal: Goal.t): Goal.t {
    const goalId = nextGoalId();

    this.goals = assoc(goalId, { ...goal, id: goalId }, this.goals);

    return goal;
  }

  put(goal: Goal.t): Goal.t {
    this.goals = assoc(goal.id, goal, this.goals);

    return goal;
  }

  delete(id: string): void {
    this.goals = dissoc(id, this.goals);
  }

  clone(id: string): Goal.t {
    let goal = this.get(id);
    goal = assoc('id', nextId(this.goals), goal);

    this.goals = assoc(goal.id, goal, this.goals);

    return goal;
  }
}

const highest: (a: number[]) => number = head;
const toNumber = (s: string): number => parseInt(s, 10);
const nextId: (a: GoalHash) => string = pipe(
  keys,
  map(toNumber),
  sort(identity),
  highest,
  inc,
  toString
);

const hasActionId = (actionId: string) => (goal: Goal.t): boolean =>
  Boolean(goal.actions.find(action => action.id === actionId));

const findByActionId = (actionId: string, goal: GoalHash): Goal.t =>
  pipe(values, find(hasActionId(actionId)))(goal);
