import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Router } from '@angular/router';
import { EditPostComponent } from './edit-post/edit-post.component';
import { PostsServicesService } from './posts-services/posts-services.service';

export interface PostData {
  id: string;
  title: string;
  body: string;
  userId: string;
}

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.scss']
})
export class PostsComponent implements OnInit, AfterViewInit {
  displayedColumns: string[] = ['id', 'title', 'body', 'userId','actions'];
  dataSource: MatTableDataSource<PostData>;

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  constructor(private service: PostsServicesService,
    public dialog: MatDialog,
    private _router: Router) {
    this.dataSource = new MatTableDataSource();
  }

  ngOnInit(): void {
    this.getPostsList()
  }

  getPostsList() {
    this.service.getAll().subscribe(res => {
      this.dataSource = new MatTableDataSource(res);
      this.setPagination()
    })
  }

  ngAfterViewInit() {
    
    this.setPagination()
  }
  setPagination() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }
  editRows(row: PostData) {
    const dialogRef = this.dialog.open(EditPostComponent, {
      data: {row},
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      //this.animal = result;
    });
  }

 
  
}


