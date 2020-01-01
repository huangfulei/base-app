import {Injectable} from '@angular/core';
import {User} from '../../model/user';

@Injectable({
  providedIn: 'root'
})
export class GlobalData {
  user: User = new User();
  isHeaderCollapsed = true;
  cacheMap: Map<string, any> = new Map<string, any>();
}
