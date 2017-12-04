import { FormSchema } from 'app/shared/form.helpers';

import { Action } from '../action.model';

export const actionSchema: FormSchema<Action> = {
  id: [''],
  name: [''],
  notes: [''],
  startDaysBefore: [''],
  finishDaysBefore: [''],
  status: ['']
};
