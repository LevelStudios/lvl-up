import moment from 'moment';

export class HumanDateValueConverter {
  toView(value) {
    console.log(value);
    var humanDate = moment(value);

    return humanDate.format("dddd, MMMM Do YYYY");
  }
}