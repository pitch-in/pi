import { FormSchema } from 'app/shared/form.helpers';

import * as Action from '../action';

export const actionSchema: FormSchema<Action.t> = {
  id: [''],
  name: [''],
  notes: [''],
  startDaysBefore: [''],
  finishDaysBefore: [''],
  status: ['']
};
