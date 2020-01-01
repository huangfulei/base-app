import {filter} from 'rxjs/operators';
import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import {Breadcrumb} from './breadcrumb';
import {SharedConstant} from '../../constant/shared-constant';

@Component({
  selector: 'breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumbs.component.less']
})
export class BreadcrumbComponent implements OnInit {

  public breadcrumbs: Breadcrumb[];

  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {
    this.breadcrumbs = [];
  }

  ngOnInit() {
    // subscribe to the NavigationEnd event
    this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe(event => {

      // set breadcrumbs
      const activeRoute: ActivatedRoute = this.activatedRoute.root;
      if (activeRoute.children.length > 0) {
        if (activeRoute.children[0].snapshot.data[SharedConstant.ROUTE_DATA_FOR_BREADCRUMB]) {
          this.breadcrumbs = this.getBreadcrumbs(activeRoute.children[0]);
        }
      }
    });
  }

  private getBreadcrumbs(route: ActivatedRoute): Breadcrumb[] {

    const newBreadcrumbs: Breadcrumb[] = [];

    // add breadcrumb
    const currentBreadcrumb: Breadcrumb = {
      label: route.snapshot.data[SharedConstant.ROUTE_DATA_FOR_BREADCRUMB],
      params: route.snapshot.params,
      url: route.snapshot.url.map(segment => segment.path).join('/')
    };

    if (route.snapshot.data[SharedConstant.ROUTE_DATA_FOR_BREADCRUMB_ROOT] != null &&
      route.snapshot.data[SharedConstant.ROUTE_DATA_FOR_BREADCRUMB_ROOT]) {
      // Do nothing if this is a root, reset the bread crumbs
    } else {

      for (const breadcrumb of this.breadcrumbs) {
        if (breadcrumb && breadcrumb.label !== currentBreadcrumb.label) {
          newBreadcrumbs.push(breadcrumb);
        } else {
          break;
        }
      }
    }

    newBreadcrumbs.push(currentBreadcrumb);
    return newBreadcrumbs;
  }
}
