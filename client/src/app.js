export class App {
  configureRouter(config, router){
    config.title = 'Level Up';
    config.map([
      { route: ['litmus'],  name: 'litmus',       moduleId: 'litmus',       nav: true,          title:'Style Test' },
      { route: [''],        name: 'litmus',       moduleId: 'litmus',       nav: true,          title:'Level Up',   classname:'level-up'},
      { route: 'suggestions',         name: 'suggestions',        moduleId: 'suggestions',        nav: true, title:'Suggestions' }
      // { route: 'litmus',        name: 'litmus',       moduleId: 'litmus',       nav: true, title:'Style Test' },
      // { route: 'child-router',  name: 'child-router', moduleId: 'child-router', nav: true, title:'Child Router' }
    ]);
    console.log(router);
    this.router = router;
  }
}
