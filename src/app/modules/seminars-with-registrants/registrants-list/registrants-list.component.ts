import { Component, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { Subscription } from 'rxjs';
import { Address } from 'src/app/models/address.model';
import { Registrant } from 'src/app/models/registrant.model';
import { SeminarWithRegistrantsService } from '../seminars-with-registrants.service';

@Component({
  selector: 'app-registrants-list',
  templateUrl: './registrants-list.component.html',
  styleUrls: ['./registrants-list.component.css']
})
export class RegistrantsListComponent {

  constructor(private _seminarWithRegistrantsService: SeminarWithRegistrantsService) {

  }
  allRegistrants: Registrant[] = []
  subscription!: Subscription;


  displayedColumns: string[] = ['שם', 'סלולרי', 'אימייל', 'ארץ', 'הערות המזמין', "מס' אישור"
    , 'שם האירוע', 'שם האירוע הפנימי', 'שנה', 'שנה עברית', 'גמול', 'סטטוס תשלום'];
  dataSource!: MatTableDataSource<Registrant>;
  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort

  ngOnInit(): void {
    this.getAllRegistrants()
  }
  getAllRegistrants() :void{
    this.subscription = this._seminarWithRegistrantsService.getAllRegistranrs().subscribe(data => {
      if (data) {
        console.log(data);
        this.allRegistrants = data
        this.dataSource = new MatTableDataSource(this.allRegistrants);
        this.dataSource.sort = this.sort;
        this.dataSource.paginator = this.paginator;
      }
      else { console.log("no registants") }
    },(err) => {
      console.log( err.error);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
