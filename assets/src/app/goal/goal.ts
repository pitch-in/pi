import * as Action from 'app/action/action';

export type Status = 'not-started' | 'in-progress' | 'ready' | 'done';

export interface t {
  id: string;
  name: string;
  notes: string;
  deadline: string;
  status: Status;
  actions: Action.t[];
}

export const emptyGoal: t = {
  id: '',
  name: '',
  notes: '',
  deadline: '',
  status: 'not-started',
  actions: []
};
