import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Chart } from "react-google-charts";

const data = {
    year: [
        ["Year", "Sales"],
        ["2014", 1000],
        ["2015", 1170],
        ["2016", 660],
        ["2017", 1030],
        ["2018", 100],
        ["2019", 530],
        ["2020", 630],
    ],
    month: [
        ["Month", "Sales"],
        ["Jan", 1000],
        ["Feb", 1170],
        ["Mar", 660],
        ["Apr", 1030],
        ["May", 1030],
        ["Jun", 1030],
        ["Jul", 100],
        ["Aug", 130],
        ["Sep", 1130],
        ["Oct", 1330],
        ["Nov", 503],
        ["Dec", 130],
    ],
    day: [
        ["Day", "Sales"],
        ["Mon", 1000],
        ["Tue", 1170],
        ["Thr", 660],
        ["Fri", 1030],
        ["Sat", 1030],
        ["Sun", 1030],
    ],
};

export default function EventsBarGraph() {
    const [graphData, setData] = useState(data);
    const [type, setType] = useState("year");

    const changeGraph = (e, type) => {
        setType(type);
    };

    return (
        <div>
            <div className="time">
                <Button
                    variant="info active"
                    onClick={(e) => changeGraph(e, "year")}
                >
                    Year
                </Button>
                <Button variant="info" onClick={(e) => changeGraph(e, "month")}>
                    Month
                </Button>
                <Button variant="info" onClick={(e) => changeGraph(e, "day")}>
                    Day
                </Button>
            </div>
            <Chart
                width={"500px"}
                height={"300px"}
                chartType="Bar"
                loader={<div>Loading Chart</div>}
                data={graphData[type]}
                options={{
                    // Material design options
                    chart: {
                        title: "Events",
                    },
                    colors: ["cadetblue"],
                }}
                // For tests
                rootProps={{ "data-testid": "2" }}
            />
        </div>
    );
}
