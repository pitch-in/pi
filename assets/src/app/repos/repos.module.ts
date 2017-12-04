import { NgModule } from '@angular/core';

import { ActionRepo } from './action.repo';
import { GoalsRepo } from './goals.repo';

@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [ActionRepo, GoalsRepo]
})
export class ReposModule {}
