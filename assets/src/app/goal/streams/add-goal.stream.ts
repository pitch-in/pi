import { Injectable } from '@angular/core';
import { SubjectWrapper } from 'app/shared/stream.helpers';

import { Goal } from './../goal.model';

@Injectable()
export class AddGoalStream extends SubjectWrapper<Goal> {}
