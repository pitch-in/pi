import * as moment from 'moment';

import { Status, Goal } from 'app/goal/goal.model';
import { parseDate } from 'app/shared/date.helpers';

export interface Action {
  id: string;
  name: string;
  notes: string;
  startDaysBefore: number;
  finishDaysBefore: number;
  status: Status;
}

export interface ActionWithContext {
  action: Action;
  goal: Goal;
}

export type ActionParent = Goal;

export const dynamicDate = (
  parent: { deadline: string },
  daysBefore: number
): moment.Moment => {
  if (!parent) return;

  const momentDeadline = parseDate(parent.deadline);

  return momentDeadline.subtract(daysBefore, 'days');
};

export const emptyAction: Action = {
  id: '',
  name: '',
  notes: '',
  startDaysBefore: 0,
  finishDaysBefore: 0,
  status: 'not-started'
};
