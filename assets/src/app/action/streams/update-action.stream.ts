import { AddActionAction } from './add-action.action';
import { RemoveActionAction } from './remove-action.action';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/mergeMap';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { ActionService } from '../action.service';
import { UpdateActionAction } from './update-action.action';

import { Action } from './../action.model';

@Injectable()
export class UpdateActionStream implements StreamWrapper<Observable<Action>> {
  $: Observable<Action>;

  constructor(
    updateActionAction: UpdateActionAction,
    removeActionAction: RemoveActionAction,
    addActionAction: AddActionAction,
    actionService: ActionService
  ) {
    const updateStream$ = updateActionAction.$.flatMap(actionService.update);

    const removeStream$ = removeActionAction.$.flatMap(actionService.remove);

    const addStream$ = addActionAction.$.flatMap(
      ([goalId, action]: [string, Action]) => actionService.add(goalId, action)
    );

    this.$ = Observable.merge(updateStream$, removeStream$, addStream$);
  }
}
