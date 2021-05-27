import styles from "./Reports.module.css";
import { reportsData } from "./reportsData";
import ReportItem from "./ReportItem";
import { useState } from "react";

const Reports = () => {
  const [reports, setReports] = useState(reportsData);

  const onChangeArchiveStatus = id => {
    const updatedReports = reports.map(report => {
      if (report.id === id) {
        return {
          ...report,
          archived: !report.archived,
        };
      }
      return report;
    });
    setReports(updatedReports);
  };

  return (
    <div>
      <h1>Reports</h1>
      <div className={styles.reportsList}>
        {reports.map(report => {
          return (
            <ReportItem
              key={report.id}
              report={report}
              onChangeArchiveStatus={onChangeArchiveStatus}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Reports;
