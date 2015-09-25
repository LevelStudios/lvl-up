//import {computedFrom} from 'aurelia-framework';

export class Suggest{
  heading = 'Make a Suggestion!';
  firstName = 'First';
  prompt = 'Write Suggestion here.';
  box = [
    { comment: 'Here you go!' }
  ]


  get allSuggestions() {
    return '${this.suggestion}';
  }

  // showSuggestion () {
  //   alert('$(this.suggestion)');
  // }

}
