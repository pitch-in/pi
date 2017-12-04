import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { RootComponent } from './root/root.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [RootComponent, NavbarComponent],
  exports: [RootComponent],
  imports: [AppRoutingModule],
  providers: [],
  bootstrap: [RootComponent]
})
export class RoutingModule {}
