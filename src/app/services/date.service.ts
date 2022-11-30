
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { DatePipe } from '@angular/common';
import { BehaviorSubject, map, Observable, Subscription } from 'rxjs';
import { RadioControlValueAccessor } from '@angular/forms';


@Injectable({
  providedIn: 'root'
})
export class DateService {

  constructor(private http: HttpClient, public datepipe: DatePipe) { }

  subscription!: Subscription;

  currentDate!: Date;
  _currentDate!: Date
  dayInWeek!: number
  hebrewDay!: string
  day!: number
  month!: number
  year!: number
  dateFromServer!: string
  _hebrewDate!: string
  fullCurrentDate!: string
  shortHebrewDate!: string
  startIndex!: number
  endIndex!: number
  currentGregorianDate!: Date

  hebrewDaysArray: string[] = ['ראשון', 'שני', 'שלישי', 'רביעי', 'חמישי', 'שיש', 'שבת',]


  currentFullDate: BehaviorSubject<string | any> = new BehaviorSubject(null);

  getCurrentFullDate(): Observable<string | any> {

    if (!this.currentFullDate.value)
      this.getFullDate()
    if (this.currentGregorianDate < new Date())
      this.getFullDate()
    return this.currentFullDate.asObservable();

  }


  getCurrentDate(): string {
    this.currentDate = new Date();
    return this.currentDate.toLocaleDateString();
  }

  getDay(): string {
    this.dayInWeek = new Date().getDay();
    this.hebrewDay = this.hebrewDaysArray[this.dayInWeek];
    return this.hebrewDay
  }

  getHebrewDateFromServer(year:number,month:number,day:number): Observable<JSON> {
    return this.http.get<JSON>(`https://www.hebcal.com/converter?cfg=json&date=${year}-${month}-${day}&g2h=1&strict=1`)
  }

  getHebrewDate(): Observable<string> {
    this._currentDate = new Date();
    this.day = Number(this.datepipe.transform(this._currentDate, 'dd'));
    this.month = this._currentDate.getMonth() + 1;
    this.year = this._currentDate.getFullYear();
    return this.getHebrewDateFromServer(this.year,this.month,this.day).pipe(map((res: any) => {
      if (res) {
        this.dateFromServer = JSON.stringify(res);
        this.startIndex = this.dateFromServer.indexOf("hebrew") + 9;
        this.endIndex = this.dateFromServer.indexOf("heDateParts") - 3;
        this._hebrewDate = this.dateFromServer.slice(this.startIndex, this.endIndex);
      }
      return this._hebrewDate;
    }))
  }
  getFullDate(): void {

    this.getHebrewDate().subscribe(data => {
      if (data) {
        this.shortHebrewDate = data;
        this.fullCurrentDate = `יום ${this.getDay()} ${this.getCurrentDate()}  ${this.shortHebrewDate}`;
        this.currentGregorianDate = new Date();
        this.currentFullDate.next(this.fullCurrentDate);
      }
    },(err) => {
      console.log( err.error);
    })
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}


