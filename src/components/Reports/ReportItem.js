import { useState } from "react";
import ReportWindow from "./ReportWindow";
import styles from "./Reports.module.css";

const ReportItem = props => {
  const { report, onChangeArchiveStatus } = props;
  const { author, text, created, archived } = report;
  const [showWindow, setShowWindow] = useState(false);
  return (
    <>
      <button
        onClick={() => setShowWindow(true)}
        className={`${styles.reportItem} ${
          archived ? styles.archivedReport : ""
        }`}
      >
        <div>
          {author} - {created}
        </div>
        <span>{text.slice(0, 55).padEnd(58, "...")}</span>
      </button>
      {showWindow ? (
        <ReportWindow
          setShowWindow={setShowWindow}
          report={report}
          onChangeArchiveStatus={onChangeArchiveStatus}
        />
      ) : null}
    </>
  );
};

export default ReportItem;
