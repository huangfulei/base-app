import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.less']
})
export class HeaderComponent implements OnInit {
  @Input() sidebarOpen: boolean;
  @Input() useSidebar: boolean;
  @Output() sidebarOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();
  currentDate: Date = new Date();
  // faCoffee = faCoffee;

  constructor() {
  }

  ngOnInit() {
  }

  toggleSidebar(): void {
    this.sidebarOpen = !this.sidebarOpen;
    this.sidebarOpenChange.emit(this.sidebarOpen);
    console.log(this.sidebarOpen);
  }

}
