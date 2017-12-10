import * as Goal from 'app/goal/goal';
import { SearchMyGoalsAction } from './../streams/search-my-goals.action';
import { Component, OnInit } from '@angular/core';

import { MyGoalsStream } from '../streams/my-goals.stream';

import { AddGoalStream } from '../streams/add-goal.stream';

@Component({
  selector: 'pi-my-goals',
  templateUrl: 'my-goals.component.html',
  styleUrls: ['my-goals.component.scss']
})
export class MyGoalsComponent implements OnInit {
  newGoal: Goal.t = Goal.emptyGoal;
  showNewGoal: boolean;

  constructor(
    private searchMyGoalsAction: SearchMyGoalsAction,
    public myGoalsStream: MyGoalsStream,
    private addGoalStream: AddGoalStream
  ) {}

  ngOnInit() {
    setTimeout(() => this.searchMyGoalsAction.$.next());
  }

  openNewGoal() {
    this.showNewGoal = true;
  }

  addGoal(goal: Goal.t) {
    this.addGoalStream.$.next(goal);
    this.showNewGoal = false;
  }
}
