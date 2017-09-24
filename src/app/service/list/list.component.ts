import { ServiceService } from '../../services/service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  services: any = {};
  constructor(private serviceService: ServiceService) { }

  ngOnInit() {
    this.services = this.serviceService.getServices();
  }

}
