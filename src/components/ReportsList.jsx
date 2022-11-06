import React from "react"
import Reports from "./Reports";
import App from "../App";
import { getReport } from "../containers/ReportsService";


const ReportsList = ({reports}) => {
    const reportsNodes = reports.map(report => {
      return <Reports key={report._id}
        report={report}
      />
    });
  
    return (
      <section id="reports">
        <h2>Reports</h2>
        <div id="reports-wrapper">
          {reportsNodes}
        </div>
      </section>
    )
  };

export default ReportsList;
  


  