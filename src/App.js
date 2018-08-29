import moment from "moment";
import React, { Component } from 'react';

import { DateRangePicker } from "react-dates";

class App extends Component {

  state = {
    endDate: moment(),
    focusedInput: null,
    startDate: moment()
  }

  render() {
    const { endDate, focusedInput, startDate } = this.state;
    return (
      <div className="App">
        <DateRangePicker
          endDate={ endDate }
          endDateId="myEndDate"
          focusedInput={ focusedInput }
          isOutsideRange={ this.isOutsideRange }
          onDatesChange={ this.onDatesChange }
          onFocusChange={ this.onFocusChange }
          startDate={ startDate }
          startDateId="myStartDate"
        />
      </div>
    );
  }

  isOutsideRange = day => {
    const { startDate } = this.state
    return (startDate.diff(day, "days") < -31) || (startDate.diff(day, "months") > 4);
  }

  onDatesChange = ({ startDate, endDate }) => this.setState({ endDate, startDate });

  onFocusChange = focusedInput => this.setState({ focusedInput });

}

export default App;
