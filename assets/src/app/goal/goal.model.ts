import { Action } from 'app/action/action.model';

export type Status = 'not-started' | 'in-progress' | 'ready' | 'done';

export interface Goal {
  id: string;
  name: string;
  notes: string;
  deadline: string;
  status: Status;
  actions: Action[];
}

export const emptyGoal: Goal = {
  id: '',
  name: '',
  notes: '',
  deadline: '',
  status: 'not-started',
  actions: []
};
