/* eslint-disable */
import days from './days';
// First check date
const date = new Date();

// For monday through friday, open normal classes
switch (days.get(date.getDay())) {
  // If it's a weekend
  case 'Sunday': // FALLTHROUGH
  case 'Saturday': {
    // Do nothing
    break;
  }
  // If it's wednesday
  case 'Wednesday': {
    // Then check the time
    break;
  }
  // Then it must be a regular weekday
  default: {
    break;
  }
}
