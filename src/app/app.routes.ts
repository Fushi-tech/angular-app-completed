import { RouterModule, Routes } from '@angular/router';
import { MemberDetailComponent } from './member-detail/member-detail.component';
import { MembersComponent } from './members/members.component';
import { NgModule } from '@angular/core';

export const routes: Routes = [
  {path: '', component: MembersComponent},
  {path: 'detail/:id', component: MemberDetailComponent}

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
