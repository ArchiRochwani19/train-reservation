import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-train-seatbooking',
  templateUrl: './train-seatbooking.component.html',
  styleUrls: ['./train-seatbooking.component.scss']
})
export class TrainSeatbookingComponent {
  numSeat:number=0;
  constructor(private router: Router){
    
  }
  //input from user
  inputSeat(seat:any){
    this.numSeat=seat;
    this.router.navigate(['/seat-picker'])

  }
  
}
