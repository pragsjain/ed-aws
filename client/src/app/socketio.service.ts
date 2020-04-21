import { Injectable } from '@angular/core';
import * as io from 'socket.io-client';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})

export class SocketioService {
  socket;
  constructor() { }
  
  setupSocketConnection() {
    this.socket = io(environment.SOCKET_ENDPOINT);
    this.socket.emit('my message', 'Hello there from Angular.');
    console.log('socket started');

    this.socket.emit('connect', {data: 'data'});
        this.socket.on('news', (data)=>{
        console.log(data);
       this.socket.emit('my other event', { my: 'data' });
    });
  }
}
