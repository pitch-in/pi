import { RemoveActionAction } from './../streams/remove-action.action';
import { Component, Input } from '@angular/core';

import { Goal } from 'app/goal/goal.model';
import { Action } from '../action.model';
import { UpdateActionAction } from 'app/action/streams/update-action.action';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent {
  @Input() action: Action;
  @Input() parent: Goal;
  @Input() editing: boolean;

  constructor(
    private removeActionAction: RemoveActionAction,
    private updateActionAction: UpdateActionAction
  ) {}

  updateAction(action: Action) {
    this.updateActionAction.$.next(action);
  }

  removeAction(action: Action) {
    this.removeActionAction.$.next(action);
  }
}
