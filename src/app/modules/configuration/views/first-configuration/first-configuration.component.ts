import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Post } from 'src/app/models/Post';
import { FirstService } from 'src/app/services/first.service';

@Component({
  selector: 'app-first-configuration',
  templateUrl: './first-configuration.component.html',
  styleUrls: ['./first-configuration.component.css']
})
export class FirstConfigurationComponent implements OnInit {

  loadingPost: boolean = true;
  isFullFeed: boolean = false;
  //posts: Post[] = [];

  displayedColumns: string[] = ['id', 'title', 'body','action'];

  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
    this.firstService.getAll().subscribe({
      next: (response : any) => {
        this.isFullFeed = true;
        this.loadingPost = false;

        this.dataSource = new MatTableDataSource(response);

        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;

        
      },
      error: (error: HttpErrorResponse) => {

      }
    });
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
  public deletePost(post:Post){
    this.firstService.deletePost(post.id)
    .subscribe(() => {
     console.log(post);
      const index = this.dataSource.data.findIndex(p => p.id === post.id);
     
      if (index !== -1) {
        this.dataSource.data.splice(index, 1);
        this.dataSource = new MatTableDataSource<Post>(this.dataSource.data);
      }
    });
    
  }

}
