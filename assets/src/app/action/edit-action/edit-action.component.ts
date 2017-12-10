import { Component, Input, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import * as moment from 'moment';

import { buildForm } from 'app/shared/form.helpers';

import * as Action from '../action';
import * as Goal from 'app/goal/goal';
import { actionSchema } from './edit-action.component.model';

@Component({
  selector: 'pi-edit-action',
  templateUrl: 'edit-action.component.html',
  styleUrls: ['edit-action.component.scss']
})
export class EditActionComponent {
  @Input()
  set action(action: Action.t) {
    this.form = buildForm(this.fb, actionSchema, action);
  }
  get action(): Action.t {
    return this.form.value;
  }

  @Input() parent: Goal.t;
  @Output() update = new EventEmitter();
  @Output() close = new EventEmitter();
  form: FormGroup;

  constructor(private fb: FormBuilder) {}

  get goalDeadline(): moment.Moment {
    return moment(this.parent.deadline);
  }

  get startByDate(): moment.Moment {
    return Action.dynamicDate('startDaysBefore', this.parent, this.action);
  }

  get finishByDate(): moment.Moment {
    return Action.dynamicDate('finishDaysBefore', this.parent, this.action);
  }
}
