import React from "react";
import { ReactApexChart } from "apexcharts";

export default function PieChart() {
  const chart = {
    series: [44, 55, 41, 17, 15],
    options: {
      chart: {
        type: "donut",
      },
      responsive: [
        {
          breakpoint: 480,
          options: {
            chart: {
              width: 200,
            },
            legend: {
              position: "bottom",
            },
          },
        },
      ],
    },
  };
  return (
    <div>
        <Chart
      <ReactApexChart
        options={chart.options}
        series={chart.series}
        type="donut"
      />
    </div>
  );
}
