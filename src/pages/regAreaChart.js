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

export default function RegAreaChart() {
    const [graphData, setData] = useState(data);
    const [type, setType] = useState("year");

    const changeGraph = (e, type) => {
        setType(type);
    };

    return (
        <div className="regCard">
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
                width={"100%"}
                height={"300px"}
                chartType="AreaChart"
                loader={<div>Loading Chart</div>}
                data={graphData[type]}
                options={{
                    colors: ["cadetblue"],
                    title: "Registrations",
                    titleTextStyle: {
                        fontSize: 16,
                        bold: true,
                    },
                    hAxis: {
                        title: "Year",
                        titleTextStyle: { color: "#333" },
                        gridlines: { color: "cedarBlue", minSpacing: 20 },
                        minorGridlines: { color: "red" },
                    },
                    vAxis: {
                        minValue: 0,
                        format: "none",
                        textPosition: "none",
                    },
                    legend: {
                        position: "none",
                        maxLines: 3,
                        textStyle: { color: "cedarBlue", fontSize: 16 },
                    },
                    // For the legend to fit, we make the chart area smaller
                    chartArea: { width: "90%", height: "70%" },
                    // lineWidth: 25
                }}
                // For tests
                rootProps={{ "data-testid": "1" }}
            />
        </div>
    );
}
