import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { SocketioService } from './socketio.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  users:any=[]
  constructor(private http:HttpClient, private socketService:SocketioService){}
  ngOnInit(){
    //this.http.get('http://52.66.252.216:3000/api/users').subscribe((data)=>
    this.http.get('http://localhost:3000/api/users').subscribe((data)=>
    {this.users=data;
    })

    //socket
    this.socketService.setupSocketConnection();
  }
    
    // fetch('http://localhost:3000/api/users')
    // .then(response => response.text())
    // .then(data =>{
    //   eval(`${data}`)
    //   console.log(data)
    // })
    // .catch(error => console.error(error));
    // }
}
