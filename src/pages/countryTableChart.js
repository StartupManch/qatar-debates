import React, { useState } from "react";
import { Button, Table } from "react-bootstrap";
import { Chart } from "react-google-charts";

const data = {
  country: [
    { name: "Qatar", count: 500, percentage: "50%" },
    { name: "USA", count: 120, percentage: "12%" },
    { name: "India", count: 200, percentage: "40%" },
    { name: "Canada", count: 80, percentage: "9%" },
    { name: "Italy", count: 100, percentage: "8%" },
  ],
  age: [
    { name: "Qatar", count: 500, percentage: "50%" },
    { name: "USA", count: 120, percentage: "12%" },
    { name: "India", count: 200, percentage: "40%" },
    { name: "Canada", count: 80, percentage: "9%" },
    { name: "Italy", count: 100, percentage: "8%" },
  ],
  event: [
    { name: "Qatar", count: 500, percentage: "50%" },
    { name: "USA", count: 120, percentage: "12%" },
    { name: "India", count: 200, percentage: "40%" },
    { name: "Canada", count: 80, percentage: "9%" },
    { name: "Italy", count: 100, percentage: "8%" },
  ],
};

const defaultPieData = [
  ["Task", "Hours per Day"],
  ["Qatar", 500],
  ["USA", 120],
  ["India", 200],
  ["Canada", 80],
  ["Italy", 100],
];

export default function CountryTableChart() {
  const [graphData, setData] = useState(data);
  const [type, setType] = useState("country");
  const [pieData, setPiedata] = useState(defaultPieData);

  const changeGraph = (e, type) => {
    let resData = [];
    resData.push(["Task", "Hours per Day"]);
    setType(type);
    data[type].map((item) => {
      resData.push([item.name, item.count]);
    });
    setPiedata(resData);
  };

  const renderTableRows = (data) => {
    return (
      <tr>
        <td>{data.name}</td>
        <td>{data.count}</td>
        <td>{data.percentage}</td>
      </tr>
    );
  };

  return (
    <>
      <div className="col-md-12 countryTable">
        <div className="tableBorder">
          <div className="row">
            <div className="col-md-7">
              <div className="tableInnerBorder">
                <div className="time">
                  <Button
                    variant="info active"
                    onClick={(e) => changeGraph(e, "country")}
                  >
                    Country
                  </Button>
                  <Button variant="info" onClick={(e) => changeGraph(e, "age")}>
                    Age
                  </Button>
                  <Button
                    variant="info"
                    onClick={(e) => changeGraph(e, "event")}
                  >
                    Event
                  </Button>
                </div>
                <Table striped bordered hover>
                  <thead>
                    <tr>
                      <th>Country</th>
                      <th>Count</th>
                      <th>Percentage</th>
                    </tr>
                  </thead>
                  <tbody>
                    {graphData[type].map((item) => {
                      return renderTableRows(item);
                    })}
                  </tbody>
                </Table>
              </div>
            </div>
            <div className="col-md-5">
              <Chart
                width={"500px"}
                height={"500px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={pieData}
                options={{
                  title: "",
                  // Just add this option
                  pieHole: 0.4,
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
