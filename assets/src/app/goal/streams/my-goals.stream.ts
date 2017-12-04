import { SearchMyGoalsAction } from './search-my-goals.action';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/observable/merge';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from './../goals.service';

import { UpdateActionStream } from 'app/action/streams/update-action.stream';
import { UpdateGoalStream } from './update-goal.stream';

@Injectable()
export class MyGoalsStream implements StreamWrapper<Observable<Goal[]>> {
  $: Observable<Goal[]>;

  constructor(
    searchMyGoalsAction: SearchMyGoalsAction,
    goalsService: GoalsService,
    updateGoalStream: UpdateGoalStream,
    updateActionStream: UpdateActionStream
  ) {
    this.$ = Observable.merge(
      searchMyGoalsAction.$,
      updateGoalStream.$,
      updateActionStream.$
    ).flatMap(goalsService.myGoals);
  }
}
