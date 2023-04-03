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

  displayedColumns: string[] = ['id', 'title', 'body', 'actions'];

  dataSource: MatTableDataSource<Post>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private firstService: FirstService) { }

  ngOnInit(): void {
  
    this.listPost();
    
  }

  listPost(){
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

  deletePost(id: number) {
    if (confirm('sure')) {
      this.firstService.delete(id).subscribe(
        (resp) => {
          this.listPost();
          console.log("Done a 3amo");
        },
        (error: HttpErrorResponse) => {
          console.log('Error deleting post:');
          console.log(error);
        }
      );
    }
  }

}
