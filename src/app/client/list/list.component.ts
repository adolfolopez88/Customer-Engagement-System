import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any = [];
  client: any = {};

  constructor(private clientsService: UserService) { }

  ngOnInit() {
    this.clientsService.getUsers().then(users => { console.log(users); this.clients = users; });
  }

  showNavClient(client_id: number) {

    this.clientsService.getUser(client_id).then(user => {
      console.log(user); this.client = user;
      document.getElementById('btn-sidenav-client').click();
    });

  }
}
