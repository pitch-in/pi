import { SubjectWrapper } from 'app/shared/stream.helpers';
import { Action } from 'app/action/action.model';

export class AddActionAction extends SubjectWrapper<[string, Action]> {}
