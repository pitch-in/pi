import { Injectable } from '@angular/core';
import { SubjectWrapper } from 'app/shared/stream.helpers';

@Injectable()
export class CloneGoalStream extends SubjectWrapper<string> {}
