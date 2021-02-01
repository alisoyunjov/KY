import React from "react";

import ReactApexChart from "react-apexcharts";
import { YAxis } from "recharts";
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [0.03, 0.8, 0.5, 0.3, 0.4, 0.7, 14]
        }
      ],
      options: {
        chart: {
          type: "bar",
          height: 350
        },
        plotOptions: {
          bar: {
            borderRadius: 15,
            horizontal: true,
            dataLabels: {
              position: "top"
            }
          }
        },
        dataLabels: {
          enabled: true,
          style: {
            colors: ["#333"]
          },
          offsetX: 30
        },
        xaxis: {
          categories: [
            "Arrive Customer address to Goods Receipt",
            "Pick to Arrive Customer address",
            "Customer Order to pick",
            "Arrive Inbound Airport to warehouse",
            "Arrive Outbound Airport to Arrive Inbound Airport",
            "Exit Factory to Arrive Outbound Airport",
            "Confirmation to Exit Factory"
          ],
          title: {
            text: "Days()",
            style: {
              colors: [],
              fontSize: "15px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 100,
              cssClass: "apexcharts-yaxis-label"
            }
          }
        },
        grid: {
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        yaxis: {
          labels: {
            show: true,
            rotateAlways: false,
            hideOverlappingLabels: true,
            showDuplicates: false,
            trim: false,
            minHeight: undefined,
            maxHeight: 22,
            maxWidth: 700,

            style: {
              colors: [],
              fontSize: "15px",
              fontFamily: "Helvetica, Arial, sans-serif",
              fontWeight: 100,
              cssClass: "apexcharts-yaxis-label"
            }
          },
          reversed: false,
          axisTicks: {
            show: true
          }
        }
      }
    };
  }

  render() {
    return (
      <div id="chart">
        <ReactApexChart
          options={this.state.options}
          series={this.state.series}
          type="bar"
          height={500}
          width={1000}
        />
      </div>
    );
  }
}

module.exports = ApexChart;
