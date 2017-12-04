import * as Factory from 'app/shared/factory.helpers';

import { toString } from 'ramda';

import { Action } from 'app/action/action.model';

let id = 1;

export function nextActionId(): string {
  return toString(id++);
}

export const actionFactory = Factory.makeFactory<Action>({
  id: Factory.each(nextActionId),
  name: 'Do a small task',
  notes: '',
  startDaysBefore: 2,
  finishDaysBefore: 1,
  status: 'in-progress'
});

export const emptyActionFactory = Factory.makeFactory<Action>({
  id: Factory.each(nextActionId),
  name: '',
  notes: '',
  startDaysBefore: 0,
  finishDaysBefore: 0,
  status: 'not-started'
});
