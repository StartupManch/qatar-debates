import React from "react";
import { Chart } from "react-google-charts";

export default function EventsBarGraph() {
  return (
    <div>
      <Chart
        width={"600px"}
        height={"400px"}
        chartType="PieChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["Task", "Hours per Day"],
          ["seats filled", 11],
          ["seats filled", 5],
          ["seats filled", 7],
        ]}
        options={{
          title: "",
          pieSliceText: "label",
          legend: "none",
          slices: {
            0: { color: "cadetblue" },
            1: { color: "lightGrey" },
            2: { color: "grey" },
          },
          sliceVisibilityThreshold: 0.2, // 20%
          // Just add this option
          is3D: true,
        }}
        rootProps={{ "data-testid": "2" }}
      />
    </div>
  );
}
