import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyServiceService {

  private clients: string[] = ['Client A', 'Client B', 'Client C'];

  getClients(): string[] {
    return this.clients;
  }
}
