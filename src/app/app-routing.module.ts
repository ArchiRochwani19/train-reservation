import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeatPickerComponent } from './seat-picker/seat-picker.component';
import { TrainSeatbookingComponent } from './train-seatbooking/train-seatbooking.component';

const routes: Routes = [
  {path:'',redirectTo:'train-seatbooking',pathMatch:'full'},
  {path:'seat-picker',component:SeatPickerComponent},
  {path:'train-seatbooking',component:TrainSeatbookingComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
