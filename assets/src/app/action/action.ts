import * as moment from 'moment';

import * as Goal from 'app/goal/goal';

import { parseDate } from 'app/shared/date.helpers';

export interface t {
  id: string;
  name: string;
  notes: string;
  startDaysBefore: number;
  finishDaysBefore: number;
  status: Goal.Status;
}

export interface ActionWithContext {
  action: t;
  goal: Goal.t;
}

export type ActionParent = Goal.t;

export const emptyAction: t = {
  id: '',
  name: '',
  notes: '',
  startDaysBefore: 0,
  finishDaysBefore: 0,
  status: 'not-started'
};

export const dynamicDate = (
  parent: { deadline: string },
  daysBefore: number
): moment.Moment => {
  if (!parent) return;

  const momentDeadline = parseDate(parent.deadline);

  return momentDeadline.subtract(daysBefore, 'days');
};
