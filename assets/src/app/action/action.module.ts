import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { ReposModule } from 'app/repos/repos.module';

import { ActionComponent } from './action/action.component';
import { EditActionComponent } from './edit-action/edit-action.component';
import { ShowActionComponent } from './show-action/show-action.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';

import { ActionService } from './action.service';

import { SearchToDoListAction } from './streams/search-to-do-list.action';
import { AddActionAction } from './streams/add-action.action';
import { RemoveActionAction } from './streams/remove-action.action';
import { UpdateActionAction } from './streams/update-action.action';

import { ToDoListStream } from './streams/to-do-list.stream';
import { UpdateActionStream } from './streams/update-action.stream';

@NgModule({
  imports: [FormsModule, BrowserModule, ReactiveFormsModule, ReposModule],
  exports: [ToDoListComponent, ActionComponent, EditActionComponent],
  declarations: [
    ToDoListComponent,
    ActionComponent,
    EditActionComponent,
    ShowActionComponent
  ],
  providers: [
    ActionService,
    SearchToDoListAction,
    UpdateActionAction,
    AddActionAction,
    RemoveActionAction,
    UpdateActionStream,
    ToDoListStream
  ]
})
export class ActionModule {}
