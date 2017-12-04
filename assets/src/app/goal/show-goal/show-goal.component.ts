import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Goal } from '../goal.model';

@Component({
  selector: 'pi-show-goal',
  templateUrl: 'show-goal.component.html',
  styleUrls: ['show-goal.component.scss']
})
export class ShowGoalComponent {
  @Input() goal: Goal;
  @Output() edit = new EventEmitter();
  expanded: boolean;

  constructor() {}

  toggleExpansion(): void {
    this.expanded = !this.expanded;
  }

  get expandButtonClass(): string {
    return this.expanded ? 'expand-button--expanded' : 'expand-button--closed';
  }
}
