import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  // { path: 'home', component: HomeComponent },
  // { path: '', redirectTo: 'home', pathMatch: 'full'},
  // { path: 'frag-list', component: FragListComponent },
  // { path: 'faq', component: FaqComponent},
  // { path: '**', component: NotFoundComponent }
];

@NgModule({
  // declarations: [],
  // imports: [
  //   CommonModule
  // ]
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
