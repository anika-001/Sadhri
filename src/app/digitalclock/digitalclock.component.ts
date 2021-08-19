import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-digitalclock',
  templateUrl: './digitalclock.component.html',
  styleUrls: ['./digitalclock.component.scss']
})
export class DigitalclockComponent implements OnInit {

  private daysArray =['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Sunday'];

  private date = new Date();

  public hour: any;
  public minute: string='';
  public second: string='';
  public ampm: string='';
  public day: string='';
  
  constructor() { }

  ngOnInit(): void {
    setInterval(() => {
      const date = new Date();
      this.updateDate(date);
    }, 1000); //this will call the upDate method in each second.

    this.day = this.daysArray[this.date.getDay()];
    // getDay() returns the day in integer format. form 0 to 6 then takes the correspondent day from the daysArray
  }
  private updateDate(date: Date){
    const hours = date.getHours(); // gets the hours from the date

    this.ampm = hours >= 12 ? 'PM' : 'AM';
    this.hour = hours %12; // Makes the hour in 12 hour format.

    this.hour = this.hour ? this.hour : 12; // If the hour is 0 then 12 is assigned to it.
    this.hour = this.hour < 10 ? '0'  + this.hour : this.hour; // if the hour is single digit, 
                                                              //then add 0 in front of it.
    const minute = date.getMinutes();
    this.minute = minute < 10 ? '0' + minute : minute.toString();

    const seconds = date.getSeconds();
    this.second = seconds < 10 ? '0' + seconds : seconds.toString();
    
    
              
  }

}
