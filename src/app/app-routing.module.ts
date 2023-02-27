import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { ViewPostComponent } from './posts/view-post/view-post.component';

const routes: Routes = [
  {path:'', redirectTo:'posts-list',  pathMatch: 'full'},
  {path:'posts-list', component:PostsComponent},
  {path:'post-view/:id', component:ViewPostComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
