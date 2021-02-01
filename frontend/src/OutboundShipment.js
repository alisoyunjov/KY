import React from "react";

import ReactApexChart from "react-apexcharts";
import { Label } from "recharts";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [74, 55],
      options: {
        legend: {
          show: false
        },
        labels: ["", ""],
        plotOptions: {
          pie: {
            donut: {
              labels: {
                show: true,
                total: {
                  show: true,
                  label: "",
                  fontSize: 40,
                  verticalAlign: "center",
                  formatter: () => ""
                }
              }
            }
          }
        },
        chart: {
          type: "donut"
        },
        title: {
          text: "Outbound Shipment",
          align: "center"
        },
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 200
              },
              legend: {
                position: "bottom"
              }
            }
          }
        ]
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="donut"
        />
      </div>
    );
  }
}

module.exports = ApexChart;
