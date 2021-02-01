import React from "react";

import ReactApexChart from "react-apexcharts";
var mydata = [20, 29, 37, 36, 44, 45, 50, 58, 67, 16];
class ApexChart extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Inventory",
          type: "column",
          data: [110, 30, 310, 40, 200, 150, 250, 85, 100, 20]
        },
        {
          name: "Days of inventory",
          type: "line",
          data: mydata
        }
      ],
      options: {
        chart: {
          height: 1000,
          type: "line",
          stacked: true
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: [1, 5]
        },
        xaxis: {
          labels: {
            rotate: -45
          },
          categories: [
            "Product 1",
            "Product 2",
            "Product 3",
            "Product 4",
            "Product 5",
            "Product 6",
            "Product 7",
            "Product 8",
            "Product 9",
            "Product 10"
          ]
        },
        yaxis: [
          {
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#000000"
            },
            labels: {
              style: {
                colors: "#000000"
              }
            },
            title: {
              text: "Inventory Level",
              style: {
                color: "#000000",
                fontSize: "medium"
              }
            },
            tooltip: {
              enabled: true
            }
          },
          {
            seriesName: "Income",
            opposite: true,
            axisTicks: {
              show: true
            },
            axisBorder: {
              show: true,
              color: "#000000"
            },
            labels: {
              style: {
                colors: "#000000"
              }
            },
            title: {
              text: "Days of Inventory",
              style: {
                color: "#000000",
                fontSize: "medium"
              }
            }
          }
        ],
        tooltip: {
          fixed: {
            enabled: true,
            position: "bottomRight", // topRight, topLeft, bottomRight, bottomLeft
            offsetY: 30,
            offsetX: 60
          }
        },
        legend: {
          horizontalAlign: "center",
          offsetX: 40
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
          type="line"
          height={450}
        />
      </div>
    );
  }
}

module.exports = ApexChart;
