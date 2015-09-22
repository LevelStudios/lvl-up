export class App {
  configureRouter(config, router){
    config.title = 'Level Up';
    config.map([
      { route: ['','litmus'],  name: 'litmus',       moduleId: 'litmus',       nav: true, title:'Style Test' }
      // { route: 'users',         name: 'users',        moduleId: 'users',        nav: true, title:'Github Users' },
      // { route: 'litmus',        name: 'litmus',       moduleId: 'litmus',       nav: true, title:'Style Test' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);

    this.router = router;
  }
}
