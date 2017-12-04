import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RoutingModule } from './routing/routing.module';
import { SharedModule } from './shared/shared.module';
import { GoalModule } from './goal/goal.module';
import { ActionModule } from './action/action.module';

import { RootComponent } from './routing/root/root.component';

@NgModule({
  declarations: [],
  imports: [
    BrowserModule,
    SharedModule,
    RoutingModule,
    GoalModule,
    ActionModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule {}
