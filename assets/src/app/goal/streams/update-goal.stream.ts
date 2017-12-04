import { UpdateGoalAction } from './update-goal.action';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';

import 'rxjs/add/operator/concat';
import 'rxjs/add/operator/mergeMap';
import 'rxjs/add/operator/merge';
import 'rxjs/add/operator/do';
import 'rxjs/add/observable/merge';

import { StreamWrapper } from 'app/shared/stream.helpers';

import { Goal } from '../goal.model';

import { GoalsService } from '../goals.service';
import { AddGoalStream } from './add-goal.stream';
import { CloneGoalStream } from './clone-goal.stream';

@Injectable()
export class UpdateGoalStream implements StreamWrapper<Observable<Goal>> {
  $: Observable<Goal>;

  constructor(
    goalsService: GoalsService,
    addGoalAction: AddGoalStream,
    cloneGoalAction: CloneGoalStream,
    updateGoalAction: UpdateGoalAction
  ) {
    const cloneGoal$ = cloneGoalAction.$.flatMap(goalsService.cloneGoal);

    const addGoal$ = addGoalAction.$.flatMap(goalsService.addGoal);

    const updateGoal$ = updateGoalAction.$
      .flatMap(goalsService.updateGoal)
      .do(console.log);

    this.$ = Observable.merge(cloneGoal$, addGoal$, updateGoal$);
  }
}
