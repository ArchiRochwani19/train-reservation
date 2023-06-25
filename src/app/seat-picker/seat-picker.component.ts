import { Component, Input } from '@angular/core';
import { TrainInterface } from '../train-interface';


@Component({
  selector: 'app-seat-picker',
  templateUrl: './seat-picker.component.html',
  styleUrls: ['./seat-picker.component.scss']
})

export class SeatPickerComponent {
  @Input() numSeat:any;
  reservestatus:string="unreserved";
  count:number=0;

  //dummy data for frontend
  trainSeat: TrainInterface[]=[
    {seatNo:1,booking:"unreserved",flag:false},
    {seatNo:2,booking:"unreserved",flag:true},
    {seatNo:3,booking:"disable",flag:true},
    {seatNo:4,booking:"unreserved",flag:true},
    {seatNo:5,booking:"unreserved",flag:true},
    {seatNo:6,booking:"unreserved",flag:false},
    {seatNo:7,booking:"unreserved",flag:true},
    {seatNo:8,booking:"disable",flag:true},
    {seatNo:9,booking:"unreserved",flag:true},
    {seatNo:10,booking:"unreserved",flag:true},
    {seatNo:11,booking:"unreserved",flag:false},
    {seatNo:12,booking:"unreserved",flag:true},
    {seatNo:13,booking:"disable",flag:true},
    {seatNo:14,booking:"unreserved",flag:true},
    {seatNo:15,booking:"unreserved",flag:true},
    {seatNo:16,booking:"unreserved",flag:false},
    {seatNo:17,booking:"unreserved",flag:true},
    {seatNo:18,booking:"disable",flag:true},
    {seatNo:19,booking:"unreserved",flag:true},
    {seatNo:20,booking:"unreserved",flag:true},
    {seatNo:21,booking:"unreserved",flag:false},
    {seatNo:22,booking:"unreserved",flag:true},
    {seatNo:23,booking:"booked",flag:true},
    {seatNo:24,booking:"unreserved",flag:true},
    {seatNo:25,booking:"unreserved",flag:true},
    {seatNo:26,booking:"unreserved",flag:false},
    {seatNo:27,booking:"unreserved",flag:true},
    {seatNo:28,booking:"disable",flag:true},
    {seatNo:29,booking:"unreserved",flag:true},
    {seatNo:30,booking:"unreserved",flag:true},
    {seatNo:31,booking:"unreserved",flag:false},
    {seatNo:32,booking:"unreserved",flag:true},
    {seatNo:33,booking:"disable",flag:true},
    {seatNo:34,booking:"unreserved",flag:true},
    {seatNo:35,booking:"unreserved",flag:true},
    {seatNo:36,booking:"unreserved",flag:false},
    {seatNo:37,booking:"unreserved",flag:true},
    {seatNo:38,booking:"disable",flag:true},
    {seatNo:39,booking:"unreserved",flag:true},
    {seatNo:40,booking:"unreserved",flag:true},
    {seatNo:41,booking:"unreserved",flag:false},
    {seatNo:42,booking:"unreserved",flag:true},
    {seatNo:43,booking:"disable",flag:true},
    {seatNo:44,booking:"unreserved",flag:true},
    {seatNo:45,booking:"unreserved",flag:true},
    {seatNo:46,booking:"unreserved",flag:false},
    {seatNo:47,booking:"unreserved",flag:true},
    {seatNo:48,booking:"disable",flag:true},
    {seatNo:49,booking:"unreserved",flag:true},
    {seatNo:50,booking:"unreserved",flag:true},
    {seatNo:51,booking:"unreserved",flag:false},
    {seatNo:52,booking:"unreserved",flag:true},
    {seatNo:53,booking:"disable",flag:true},
    {seatNo:54,booking:"unreserved",flag:true},
    {seatNo:55,booking:"unreserved",flag:true},
    {seatNo:56,booking:"unreserved",flag:false},
    {seatNo:57,booking:"unreserved",flag:true},
    {seatNo:58,booking:"disable",flag:true},
    {seatNo:59,booking:"unreserved",flag:true},
    {seatNo:60,booking:"unreserved",flag:true},
    {seatNo:61,booking:"unreserved",flag:false},
    {seatNo:62,booking:"unreserved",flag:true},
    {seatNo:63,booking:"disable",flag:true},
    {seatNo:64,booking:"unreserved",flag:true},
    {seatNo:65,booking:"unreserved",flag:true},
    {seatNo:66,booking:"unreserved",flag:false},
    {seatNo:67,booking:"unreserved",flag:true},
    {seatNo:68,booking:"disable",flag:true},
    {seatNo:69,booking:"unreserved",flag:true},
    {seatNo:70,booking:"unreserved",flag:true},
    {seatNo:71,booking:"unreserved",flag:false},
    {seatNo:72,booking:"unreserved",flag:true},
    {seatNo:73,booking:"disable",flag:true},
    {seatNo:74,booking:"unreserved",flag:true},
    {seatNo:75,booking:"unreserved",flag:true},
    {seatNo:76,booking:"unreserved",flag:false},
    {seatNo:77,booking:"unreserved",flag:true},
    {seatNo:78,booking:"disable",flag:true},
    {seatNo:79,booking:"unreserved",flag:true},
    {seatNo:80,booking:"unreserved",flag:true},
    
    
  ];
  getCount: number=5;

  constructor(){
    this.numSeat=this.getCount;


  }
  //changing the color
  changeReservation(num:any){
    if(num.booking=="unreserved"){
      if(this.count!=this.getCount){

     num.booking="reserved";
     this.count=this.count+1;
      }
    }
    else if(this.reservestatus="reserved"){
      num.booking="unreserved";
      this.count=this.count-1;

    }
    else{
      
    }
  
  
  }
  //unreserving the seat
  clearSeat(){
     this.count=0;
     this.trainSeat.forEach(i=>{
      if(i.booking=='reserved'){
       i.booking="unreserved";
     }
    })
     }
     //booking the seat
  bookedSeat(){
    this.trainSeat.forEach(i=>{
      if(i.booking=='reserved'){
       i.booking="booked";
     }
    })
  }
}
