import { Component } from '@angular/core';
import { faTruckFast, faMoneyBill1Wave, faHeadset, faCreditCard } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-supp-services',
  templateUrl: './supp-services.component.html',
  styleUrls: ['./supp-services.component.css']
})
export class SuppServicesComponent {
  truck = faTruckFast;
  money = faMoneyBill1Wave;
  call = faHeadset;
  card = faCreditCard;


}
