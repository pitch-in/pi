import { SubjectWrapper } from 'app/shared/stream.helpers';
import * as Action from 'app/action/action';

export class AddActionAction extends SubjectWrapper<[string, Action.t]> {}
