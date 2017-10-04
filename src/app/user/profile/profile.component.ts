import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: any = {};

  constructor(private userService: UserService, private route: ActivatedRoute) {
    this.userService.getUser(this.route.snapshot.params['id']).then(user => this.user = user);
  }

  ngOnInit() {

  }
}
