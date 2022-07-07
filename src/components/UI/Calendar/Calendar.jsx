import React, {Component} from 'react';
import './Calendar.scss'

let today = new Date();
let dayOfMonth = today.getDate();
let month = today.getMonth();

const monthList = [
	"Jan",
	"Feb",
	"March",
	"April",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

class Calendar extends Component {
	render() {
		return (
		<div className="Calendar">
			<div className="Calendar__icon">
				<div className="Calendar__month">
					{monthList[month]}
				</div>
				<div className="Calendar__day">
					{dayOfMonth}
				</div>
			</div>
			<div className="Calendar__title">
				Today
			</div>
		</div>
		);
	}
}

export default Calendar;