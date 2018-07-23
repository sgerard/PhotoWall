import { Component, OnInit, Input } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  currentTab = 'home';

  scrollToElement(id): void {
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    history.pushState(null, null, '#' + id);
    this.currentTab = id;
  }

  constructor(
      private route: ActivatedRoute,
      private location: Location
  ) { }

  logInfo() {
    console.log(this.route);
    console.log(this.location);
  }

  ngOnInit() {
  }

}
