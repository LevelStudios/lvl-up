import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';



@inject(HttpClient)
export class Suggestions{
  heading = 'Suggestion Box';
  suggestions = [];

  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('/api/');
    });

    this.http = http;
  }

  activate(){
    return this.http.fetch('/suggestions')
      .then(response => response.json())
      .then(suggestions => this.suggestions = suggestions)
      .then(suggestions => console.log({suggestions}));

  }
}
