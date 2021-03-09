import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './modules/home/home.component';
import { NotFoundComponent } from './modules/not-found/not-found.component';
import { FaqComponent } from './modules/faq/faq.component';
import { FragListComponent } from './modules/fragrance-list/frag-list.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'frag-list', component: FragListComponent },
  { path: 'faq', component: FaqComponent },
  { path: '**', component: NotFoundComponent }

  // const routes: Routes = [
  //   {
  //     path: '', component: MainComponent, children: [
  //       { 
  //         path: 'home', 
  //         loadChildren: () => import('../home/home.module').then(m => m.HomeModule),
  //         data: {
  //           key: "home"
  //         }
  //       },
  //       { 
  //         path: 'explore', 
  //         loadChildren: () => import('../explore/explore.module').then(m => m.ExploreModule),
  //         data: {
  //           key: "explore",
  //         }
  //       },
  //       { 
  //         path: 'jobs', 
  //         loadChildren: () => import('../jobs/jobs.module').then(m => m.JobsModule),
  //         data: {
  //           key: "jobs",
  //         }
  //       },
  //       { path: 'profile', canActivate: [AuthGuard], loadChildren: () => import('../profile/profile.module').then(m => m.ProfileModule),},
  //       { path: 'custom-search', loadChildren: () => import('../custom-search-form/custom-search-form.module').then(m => m.CustomSearchFormModule)},
  //       { 
  //         path: 'course', 
  //         loadChildren: () => import('../course/course.module').then(m => m.CourseModule),
  //         data: {
  //           key: "course"
  //         }
  //       },
  //       { 
  //         path: 'job-info', 
  //         loadChildren: () => import('../job-info/job-info.module').then(m => m.JobInfoModule),
  //         data: {
  //           key: "job-info"
  //         }
  //       },
  //       { path: '', redirectTo: 'home', pathMatch: 'full' },
  //     ]
  //   },
  // ];
  
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
