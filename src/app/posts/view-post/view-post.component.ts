import { Component, OnInit } from '@angular/core';
import { PostsServicesService } from '../posts-services/posts-services.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-view-post',
  templateUrl: './view-post.component.html',
  styleUrls: ['./view-post.component.scss']
})
export class ViewPostComponent implements OnInit {
  postId! :number
  postDetails:any
  constructor(private service: PostsServicesService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.postId = params['id'];
      });
      console.log(this.postId);

      this.getPostData()
  }

  getPostData(){
    this.service.viewPost(this.postId).subscribe(res =>{
      console.log(res)
      this.postDetails = res
    })
  }
}
