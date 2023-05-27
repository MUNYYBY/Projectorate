import React, { Component } from "react";
// import Chart from "react-apexcharts";
import { options } from "./Options";

import dynamic from "next/dynamic";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

class ProjectTicketsChart extends Component {
  constructor(props) {
    super(props);
    console.log(props.Tickets);
    this.state = {
      series: [
        props.Tickets.todo,
        props.Tickets.inProgress,
        props.Tickets.done,
        props.Tickets.resolved,
        props.Tickets.tested,
        props.Tickets.hold,
      ],
      options: {
        ...options,
        labels: ["Todo", "In-progress", "Done", "Resolved", "Tested", "Hold"],
      },
    };
  }

  render() {
    return (
      <div className="donut bg-gray-800 p-2 rounded-lg flex flex-col justify-center items-center">
        <p className="text-gray-400 font-semibold text-sm">Tickets</p>
        {typeof window !== "undefined" && (
          <Chart
            options={this.state.options}
            series={this.state.series}
            labels={this.state.labels}
            type="donut"
          />
        )}
      </div>
    );
  }
}

export default ProjectTicketsChart;
