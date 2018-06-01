import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // selector: '[app-servers]',
  templateUrl: './servers.component.html',
  // template: `
  // <app-server></app-server>
  // <app-server></app-server>
  // `,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer: boolean = false;
  serverCretionStatus: string= 'No Server was created!';
  serverName: string;
  serverCreated: boolean= false;
  servers= ['testserver', 'testserver2', 'tesstserver3'];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
      console.log(this.allowNewServer);
    }, 2000);

  }
  ngOnInit() {
  }
  onCreateServer(){
    this.serverCreated= true;
    this.serverCretionStatus='New Server was created! Name is ' + this.serverName;
    this.servers.push(this.serverName);
  }
  onUpdateServerName(event: Event){
    // console.log(event);
    this.serverName = (<HTMLInputElement>event.target).value;
  }
}
