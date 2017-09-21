import { Injectable } from '@angular/core';

@Injectable()
export class ClientsService {
  clients: any = [
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
    {id: 1, name: 'Adolfo Lopez', avatar: '', address: '',  },
  ]

  constructor() { }

  getClients() {
    return this.clients;
  }

}
