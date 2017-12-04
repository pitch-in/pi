import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';

import { buildForm } from 'app/shared/form.helpers';

import { Goal } from '../goal.model';

import { goalSchema } from './edit-goal.component.model';

@Component({
  selector: 'pi-edit-goal',
  templateUrl: 'edit-goal.component.html',
  styleUrls: ['edit-goal.component.scss']
})
export class EditGoalComponent {
  @Input()
  set goal(goal: Goal) {
    this.form = buildForm(this.fb, goalSchema, goal);
  }
  get goal(): Goal {
    return this.form.value;
  }

  @Output() update = new EventEmitter();

  form: FormGroup;

  constructor(private fb: FormBuilder) {}
}
