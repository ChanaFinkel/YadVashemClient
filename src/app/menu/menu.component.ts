import { Component } from '@angular/core';
import { DateService } from '../services/date.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {

  constructor(private _dateService: DateService) { }

  fulldate!: string;
  ngOnInit(): void {
    this._dateService.getCurrentFullDate().subscribe(data => {
      if (data) {
        this.fulldate = data;
      }
    })
  }
}
