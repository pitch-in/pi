import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { buildForm } from 'app/shared/form.helpers';

import { Action, dynamicDate } from '../action.model';
import { Goal } from 'app/goal/goal.model';
import { actionSchema } from './edit-action.component.model';

@Component({
  selector: 'pi-edit-action',
  templateUrl: 'edit-action.component.html',
  styleUrls: ['edit-action.component.scss']
})
export class EditActionComponent {
  @Input()
  set action(action: Action) {
    this.form = buildForm(this.fb, actionSchema, action);
  }
  get action(): Action {
    return this.form.value;
  }

  @Input() parent: Goal;
  @Output() update = new EventEmitter();
  @Output() close = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get goalDeadline(): moment.Moment {
    return moment(this.parent.deadline);
  }

  get startByDate(): moment.Moment {
    return dynamicDate(this.parent, this.action.startDaysBefore);
  }

  get finishByDate(): moment.Moment {
    return dynamicDate(this.parent, this.action.finishDaysBefore);
  }
}
