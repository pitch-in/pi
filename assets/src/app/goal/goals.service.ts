import { GoalsRepo } from 'app/repos/goals.repo';
import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';

import { Goal } from 'app/goal/goal.model';

import { Observable } from 'rxjs/Observable';

import 'rxjs/add/observable/of';

@Injectable()
export class GoalsService {
  constructor(
    private goalsRepo: GoalsRepo /* private httpClient: HttpClient */
  ) {}

  myGoals = (): Observable<Goal[]> => Observable.of(this.goalsRepo.index());

  getGoal = (id: string): Observable<Goal> =>
    Observable.of(this.goalsRepo.get(id));

  addGoal = (goal: Goal): Observable<Goal> =>
    Observable.of(this.goalsRepo.post(goal));

  cloneGoal = (id: string): Observable<Goal> =>
    Observable.of(this.goalsRepo.clone(id));

  removeGoal = (id: string): Observable<void> =>
    Observable.of(this.goalsRepo.delete(id));

  updateGoal = (goal: Goal): Observable<Goal> =>
    Observable.of(this.goalsRepo.put(goal));
}
