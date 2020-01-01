import {Component, EventEmitter, Input, OnChanges, Output, SimpleChanges} from '@angular/core';
import {GlobalData} from '../injectors/global-data';


@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.less']
})
export class SidebarComponent implements OnChanges{
  @Input() navItems: string [];
  @Input() activeItem: string;
  @Output() activeItemChange = new EventEmitter<string>();
  @Output() onChange = new EventEmitter<string>();
  @Input() isOpen: boolean;
  @Output() isOpenChange: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(public globalData: GlobalData) {
    console.log(this.isOpen);
    console.log(this.navItems);
  }

  selectRoute(item: string) {
    this.activeItem = item;
    this.activeItemChange.emit(this.activeItem);
    this.onChange.emit(this.activeItem);
  }

  closeSidebar() {
    this.isOpen = false;
    this.isOpenChange.emit(this.isOpen);
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(this.isOpen);
    console.log(this.navItems);
  }
}
