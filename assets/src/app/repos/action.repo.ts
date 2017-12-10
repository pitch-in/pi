import { Injectable } from '@angular/core';

import * as Goal from 'app/goal/goal';
import * as Action from 'app/action/action';

import { nextActionId } from 'app/action/action.test-factory';

import {
  assoc,
  chain,
  concat,
  equals,
  findIndex,
  pipe,
  prop,
  remove,
  update
} from 'ramda';
import { GoalsRepo } from 'app/repos/goals.repo';

@Injectable()
export class ActionRepo {
  constructor(private goalRepo: GoalsRepo) {}

  index(): Action.t[] {
    return allActions(this.goalRepo.index());
  }

  toDoList(): Action.ActionWithContext[] {
    return toDoList(this.goalRepo.index());
  }

  post(goalId: string, action: Action.t): Action.t {
    let goal = this.goalRepo.get(goalId);
    let actions = goal.actions;

    const actionId = nextActionId();
    const actionWithId = { ...action, id: actionId };

    actions = concat(actions, [actionWithId]);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);

    return action;
  }

  put(action: Action.t): Action.t {
    let goal = this.goalRepo.getByActionId(action.id);
    let actions = goal.actions;

    const actionIndex = findIndex(pipe(prop('id'), equals(action.id)))(actions);

    actions = update(actionIndex, action, actions);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);

    console.log('action PUT', goal);

    return action;
  }

  delete(action: Action.t): void {
    let goal = this.goalRepo.getByActionId(action.id);
    let actions = goal.actions;

    const actionIndex = findIndex(pipe(prop('id'), equals(action.id)))(actions);

    actions = remove(actionIndex, 1, actions);

    goal = assoc('actions', actions, goal);
    this.goalRepo.put(goal);
  }
}

const allActions: (a: Goal.t[]) => Action.t[] = chain(prop('actions'));

const toDoList: (a: Goal.t[]) => Action.ActionWithContext[] = chain(goal =>
  goal.actions.map(action => ({ action, goal }))
);
