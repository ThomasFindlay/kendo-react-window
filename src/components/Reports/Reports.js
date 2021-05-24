import styles from "./Reports.module.css";
import { reportsData } from "./reportsData";
import ReportItem from "./ReportItem";

const Reports = () => {
  return (
    <div>
      <h1>Reports</h1>
      <div className={styles.reportsList}>
        {reportsData.map(report => {
          return <ReportItem key={report.id} report={report} />;
        })}
      </div>
    </div>
  );
};

export default Reports;
