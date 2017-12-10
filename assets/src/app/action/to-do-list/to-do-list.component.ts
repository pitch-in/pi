import { SearchToDoListAction } from './../streams/search-to-do-list.action';
import { Component, OnInit } from '@angular/core';

import { ToDoListStream } from './../streams/to-do-list.stream';
// import * as Action from '../action';

@Component({
  selector: 'pi-to-do-list',
  templateUrl: 'to-do-list.component.html',
  styleUrls: ['to-do-list.component.scss']
})
export class ToDoListComponent implements OnInit {
  constructor(
    public toDoListStream: ToDoListStream,
    private searchToDoListAction: SearchToDoListAction
  ) {}

  ngOnInit() {
    setTimeout(() => this.searchToDoListAction.$.next());
  }
}
