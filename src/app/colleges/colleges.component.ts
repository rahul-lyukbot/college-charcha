import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';

@Component({
  selector: 'app-colleges',
  templateUrl: './colleges.component.html',
  styleUrls: ['./colleges.component.css'],
})
export class CollegesComponent implements OnInit {
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  dataSource!: MatTableDataSource<any>;
  displayedColumns: string[] = ['serialNumber', 'courseName', 'collegeName'];
  pageSize = 7;
  pageSizeOptions: number[] = [20, 50, 80, 100];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.fetchColleges();
  }

  fetchColleges() {
    const apiUrl = 'http://universities.hipolabs.com/search?name=university';

    this.http.get(apiUrl).subscribe((data: any) => {
      const mappedData = data.map((item: any, index: number) => ({
        serialNumber: index + 1,
        courseName: item.country, // Replace with actual property name from the API
        collegeName: item.name, // Replace with actual property name from the API
      }));

      this.dataSource = new MatTableDataSource(mappedData);
      this.dataSource.paginator = this.paginator;
    });
  }
}
