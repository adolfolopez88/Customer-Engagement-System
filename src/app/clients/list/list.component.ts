import { ClientsService } from '../../services/clients.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  clients: any = {};

  constructor(private clientsService: ClientsService) { }

  ngOnInit() {
    this.clients = this.clientsService.getClients();
  }

  showNavClient() {
    document.getElementById('btn-sidenav-client').click();
  }

}
