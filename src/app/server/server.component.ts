import { Component } from "@angular/core";

@Component({
    selector: 'app-server',
    templateUrl: './server.component.html',
    styles: [`
        .online{
            color: blue;
            font-size: 30px;
        }

        .standard{
            color: white;        
            font-size: 24px;
        }
    `]
})
export class ServerComponent{
    serverId: number = 10;
    serverStatus: string = 'offline';
    // flag: boolean = false;

    constructor(){
        this.serverStatus = Math.random() > 0.5 ? 'Online': 'Offline';
    }
    
    getServerStatus(){
        return this.serverStatus;
    }

    getBackgroundColor(){
        return this.serverStatus === 'Online'? 'green' : 'red';
    }
    getColor(){
        return this.serverStatus === 'Online'? 'white' : 'yellow';
    }
}