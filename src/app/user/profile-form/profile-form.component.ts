import { PlaceService } from '../../services/place.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile-form',
  templateUrl: './profile-form.component.html',
  styleUrls: ['./profile-form.component.css'],
})
export class ProfileFormComponent implements OnInit {
  @Input() user: any = {};
  countries: any = [];


  constructor(private placeService: PlaceService) {
    this.placeService.getCountries()
      .subscribe(data => this.countries = data);
  }

  ngOnInit() {
  }

}

