import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import { sortBy, pipe } from 'ramda';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { SearchToDoListAction } from './search-to-do-list.action';

import { ActionWithContext, dynamicDate } from '../action.model';

import { ActionService } from 'app/action/action.service';

@Injectable()
export class ToDoListStream
  implements StreamWrapper<Observable<ActionWithContext[]>> {
  $: Observable<ActionWithContext[]>;

  constructor(
    searchToDoListAction: SearchToDoListAction,
    actionService: ActionService
  ) {
    this.$ = searchToDoListAction.$
      .flatMap(actionService.toDoList)
      .map(sortActions);
  }
}

const endDate = (action: ActionWithContext): string =>
  dynamicDate(action.goal, action.action.finishDaysBefore).toISOString();

const startDate = (action: ActionWithContext): string =>
  dynamicDate(action.goal, action.action.startDaysBefore).toISOString();

const sortActions: (actions: ActionWithContext[]) => ActionWithContext[] = pipe(
  sortBy(endDate),
  sortBy(startDate)
);
