import { Goal } from './../goal.model';
import { Injectable } from '@angular/core';
import { SubjectWrapper } from 'app/shared/stream.helpers';

@Injectable()
export class UpdateGoalAction extends SubjectWrapper<Goal> {}
