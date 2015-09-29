import {inject} from 'aurelia-framework';
import {HttpClient} from 'aurelia-fetch-client';
import 'fetch';



@inject(HttpClient)
export class Suggestions{
  heading = 'Suggest';


  constructor(http){
    http.configure(config => {
      config
        .useStandardConfiguration()
        .withBaseUrl('/api/');
    });
    this.http = http;

    this.isEditing = false;
  }

    setActiveEdit(){
        this.isEditing = !this.isEditing;
    }
}