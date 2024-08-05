import { Component } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  
  clients: string[] = [];
  selectedClient: string = '';

  constructor(private myService: MyServiceService){
    this.clients  = this.myService.getClients();
  }

   ngOnInit():void{}

  
   getBackgroundColor(): string {
    switch (this.selectedClient) {
      case 'Client A':
        document.body.style.backgroundColor = "white";
        return 'blue';
      case 'Client B':
        document.body.style.backgroundColor = "	#D3D3D3";
        return 'green';
      case 'Client C':
        document.body.style.backgroundColor = "beige";
        return 'red'; 
      default:
        return 'transparent'; 
    }
   }
}
