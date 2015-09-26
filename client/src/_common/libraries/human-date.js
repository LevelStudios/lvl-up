import moment from 'moment';

export class HumanDateValueConverter {
  toView(value) {
    var humanDate = moment.unix(value);

    return humanDate.format("dddd, MMMM Do YYYY");
  }
}