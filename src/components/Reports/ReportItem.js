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
        {text.slice(0, 60).padEnd(63, "...")}
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
