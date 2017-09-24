import { Injectable } from '@angular/core';

@Injectable()
export class ServiceService {
  services: any = [
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
    {id: 1, name: 'Service name', avatar: '', type: 'type service' },
  ]
  constructor() { }

  getServices() {
    return this.services;
  }



}
