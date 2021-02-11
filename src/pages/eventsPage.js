import React from "react";
import EventsBarGraph from "./eventsBarGraph";
import EventsPieGraph from "./eventsPieGraph";

const cardData = [
  {
    name: "Today",
    price: "05",
  },
  {
    name: "Tomorrow",
    price: "03",
  },
  {
    name: "This Week",
    price: "25",
  },
  {
    name: "This Month",
    price: "105",
  },
  {
    name: "This Year",
    price: "205",
  },
  {
    name: "Next Year",
    price: "505",
  },
];

export default function EventsPage() {
  return (
    <div className="row">
      <div className="col-md-5 leftSide ">
        <div className="eventsCard">
          <div className="eventTitle"> Events</div>
          <div className="itemList">
            <div className="item">
              <p className="eventName">Total</p>
              <p className="eventPrice">1,000</p>
            </div>
            <div className="item verticalLine">
              <p className="eventName">Completed</p>
              <p className="eventPrice">600</p>
            </div>
            <div className="item verticalLine">
              <p className="eventName">Upcoming</p>
              <p className="eventPrice">500</p>
            </div>
          </div>
        </div>
        <div className="eventBarGraph">
          <EventsBarGraph />
        </div>
      </div>
      <div className="col-md-1 ">
        <div className="seperationLine"></div>
      </div>
      <div className="col-md-6 rightSide ">
        <div className="row">
          {cardData.map((item) => {
            return (
              <div className="col-md-3 statusCard">
                <div className="number">{item.price}</div>
                <div className="text">{item.name} </div>
              </div>
            );
          })}
        </div>
        <div className="eventPieGraph">
          <EventsPieGraph />
        </div>
      </div>
    </div>
  );
}
