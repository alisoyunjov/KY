import React from "react";
import ReactDOM from "react-dom";

//import App from "./App";

//import PieChartShow from "./PieChart";
import PurchaseOrder from "./PurchaseOrder";
import OutboundShipment from "./OutboundShipment";
import InboundShipment from "./InboundShipment";
import SalesOrder from "./SalesOrder";
import ApexChart from "./DoubleAxisChart";
import BarChart from "./BarChart";

ReactDOM.render(<ApexChart />, document.getElementById("doubleAxisChart"));
ReactDOM.render(<BarChart />, document.getElementById("barChart"));
ReactDOM.render(<PurchaseOrder />, document.getElementById("pieChart1"));
ReactDOM.render(<OutboundShipment />, document.getElementById("pieChart2"));
ReactDOM.render(<InboundShipment />, document.getElementById("pieChart3"));
ReactDOM.render(<SalesOrder />, document.getElementById("pieChart4"));
