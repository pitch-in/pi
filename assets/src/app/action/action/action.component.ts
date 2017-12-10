import { RemoveActionAction } from './../streams/remove-action.action';
import { Component, Input } from '@angular/core';

import * as Goal from 'app/goal/goal';
import * as Action from '../action';
import { UpdateActionAction } from 'app/action/streams/update-action.action';

@Component({
  selector: 'pi-action',
  templateUrl: 'action.component.html',
  styleUrls: ['action.component.scss']
})
export class ActionComponent {
  @Input() action: Action.t;
  @Input() parent: Goal.t;
  @Input() editing: boolean;

  constructor(
    private removeActionAction: RemoveActionAction,
    private updateActionAction: UpdateActionAction
  ) {}

  updateAction(action: Action.t) {
    this.updateActionAction.$.next(action);
  }

  removeAction(action: Action.t) {
    this.removeActionAction.$.next(action);
  }
}
