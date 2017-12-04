import { SearchMyGoalsAction } from './streams/search-my-goals.action';
import { UpdateGoalStream } from './streams/update-goal.stream';
import { UpdateGoalAction } from './streams/update-goal.action';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from 'app/shared/shared.module';
import { ActionModule } from 'app/action/action.module';

import { MyGoalsComponent } from './my-goals/my-goals.component';
import { GoalComponent } from './goal/goal.component';
import { EditGoalComponent } from './edit-goal/edit-goal.component';
import { ShowGoalComponent } from './show-goal/show-goal.component';
import { ReposModule } from 'app/repos/repos.module';

import { GoalsService } from './goals.service';

import { MyGoalsStream } from './streams/my-goals.stream';
import { AddGoalStream } from './streams/add-goal.stream';
import { CloneGoalStream } from './streams/clone-goal.stream';

@NgModule({
  imports: [
    SharedModule,
    BrowserModule,
    ActionModule,
    FormsModule,
    ReactiveFormsModule,
    ReposModule
  ],
  exports: [],
  declarations: [
    MyGoalsComponent,
    GoalComponent,
    EditGoalComponent,
    ShowGoalComponent
  ],
  providers: [
    SearchMyGoalsAction,
    GoalsService,
    MyGoalsStream,
    AddGoalStream,
    CloneGoalStream,
    UpdateGoalAction,
    UpdateGoalStream
  ]
})
export class GoalModule {}
