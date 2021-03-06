import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

import { ActionWithContext } from './action';

import { ActionRepo } from 'app/repos/action.repo';
import * as Action from 'app/action/action';
import { always } from 'ramda';

@Injectable()
export class ActionService {
  constructor(
    private actionRepo: ActionRepo /* private httpClient: HttpClient */
  ) {}

  index = (): Observable<Action.t[]> => Observable.of(this.actionRepo.index());

  toDoList = (): Observable<ActionWithContext[]> =>
    Observable.of(this.actionRepo.toDoList());

  add = (goalId: string, action: Action.t): Observable<Action.t> =>
    Observable.of(this.actionRepo.post(goalId, action));

  remove = (action: Action.t): Observable<Action.t> =>
    Observable.of(this.actionRepo.delete(action)).map(always(action));

  update = (action: Action.t): Observable<Action.t> =>
    Observable.of(this.actionRepo.put(action));
}
