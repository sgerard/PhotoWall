import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  @Input() title: string;

  scrollToElement(id): void {
    const el = document.getElementById(id);
    console.log(el);
    el.scrollIntoView({behavior: 'smooth', block: 'start', inline: 'nearest'});
  }

  constructor() { }

  ngOnInit() {
  }

}
