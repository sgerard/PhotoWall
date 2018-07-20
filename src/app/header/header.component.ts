import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  currentTab = 'intro';

  scrollToElement(id): void {
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
    history.pushState(null, null, '#' + id);
    this.currentTab = id;
  }

  constructor() { }

  ngOnInit() {
  }

}
