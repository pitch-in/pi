import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MyGoalsComponent } from 'app/goal/my-goals/my-goals.component';
import { ToDoListComponent } from 'app/action/to-do-list/to-do-list.component';

const routes: Routes = [
  { path: '', redirectTo: '/my-goals', pathMatch: 'full' },
  { path: 'my-goals', component: MyGoalsComponent },
  { path: 'to-do', component: ToDoListComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
