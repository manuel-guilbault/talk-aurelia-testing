import { PLATFORM } from 'aurelia-framework';
import { RouterConfiguration, Router, ConfiguresRouter } from 'aurelia-router';

export class App implements ConfiguresRouter {

  public router: Router;
  
  public configureRouter(config: RouterConfiguration, router: Router) {
    config.map([
      { route: ['', 'page-1'], moduleId: PLATFORM.moduleName('./page-1'), nav: true, title: 'Page 1' },
      { route: 'page-2', moduleId: PLATFORM.moduleName('./page-2'), nav: true, title: 'Page 2' },
    ]);
    this.router = router;
  }
}
