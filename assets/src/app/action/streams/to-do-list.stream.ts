import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { sortBy, pipe } from 'ramda';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { SearchToDoListAction } from './search-to-do-list.action';

import * as Action from '../action';

import { ActionService } from 'app/action/action.service';

@Injectable()
export class ToDoListStream
  implements StreamWrapper<Observable<Action.ActionWithContext[]>> {
  $: Observable<Action.ActionWithContext[]>;

  constructor(
    searchToDoListAction: SearchToDoListAction,
    actionService: ActionService
  ) {
    this.$ = searchToDoListAction.$.flatMap(actionService.toDoList).map(
      sortActions
    );
  }
}

const endDate = (action: Action.ActionWithContext): string =>
  Action.dynamicDate(
    'finishDaysBefore',
    action.goal,
    action.action
  ).toISOString();

const startDate = (action: Action.ActionWithContext): string =>
  Action.dynamicDate(
    'startDaysBefore',
    action.goal,
    action.action
  ).toISOString();

const sortActions: (
  actions: Action.ActionWithContext[]
) => Action.ActionWithContext[] = pipe(sortBy(endDate), sortBy(startDate));
