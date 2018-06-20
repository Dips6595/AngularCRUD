import { Component, OnInit } from '@angular/core';

import { ClientService } from './shared/client.service';

@Component({
  selector: 'app-register-clients',
  templateUrl: './register-clients.component.html',
  styleUrls: ['./register-clients.component.css'],
  providers: [ClientService]
})
export class RegisterClientsComponent {
  constructor(private clientService: ClientService) { }
}
