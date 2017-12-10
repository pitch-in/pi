import { Injectable } from '@angular/core';
import { SubjectWrapper } from 'app/shared/stream.helpers';

import * as Goal from './../goal';

@Injectable()
export class AddGoalStream extends SubjectWrapper<Goal.t> {}
