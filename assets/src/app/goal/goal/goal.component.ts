import * as Action from 'app/action/action';
import { Component, Input } from '@angular/core';

import { AddActionAction } from 'app/action/streams/add-action.action';
import { UpdateGoalAction } from '../streams/update-goal.action';
import { CloneGoalStream } from '../streams/clone-goal.stream';

import * as Goal from '../goal';

@Component({
  selector: 'pi-goal',
  templateUrl: 'goal.component.html',
  styleUrls: ['goal.component.scss']
})
export class GoalComponent {
  @Input() goal: Goal.t;
  @Input() editing: boolean;
  showNewAction: boolean;
  newAction: Action.t = Action.emptyAction;

  constructor(
    private addActionAction: AddActionAction,
    private cloneGoalStream: CloneGoalStream,
    private updateGoalAction: UpdateGoalAction
  ) {}

  updateGoal(goal: Goal.t) {
    this.updateGoalAction.$.next(goal);
  }

  removeGoal() {}

  cloneGoal() {
    this.cloneGoalStream.$.next(this.goal.id);
  }

  addAction(action: Action.t) {
    this.addActionAction.$.next([this.goal.id, action]);
  }

  openNewAction() {
    this.showNewAction = true;
  }
}
