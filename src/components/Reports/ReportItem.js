import { useState } from "react";
import { Window } from "@progress/kendo-react-dialogs";
import styles from "./Reports.module.css";

const ReportWindow = props => {
  const { report, setShowWindow } = props;
  const { id, author, text, created } = report;

  return (
    <Window
      title={author}
      onClose={() => setShowWindow(false)}
      initialHeight={350}
    >
      <div>{text}</div>
    </Window>
  );
};

const ReportItem = props => {
  const { report } = props;
  const { id, author, text, created } = report;
  const [showWindow, setShowWindow] = useState(false);
  return (
    <>
      <button onClick={() => setShowWindow(true)} className={styles.reportItem}>
        <div>
          {author} - {created}
        </div>
        {text.slice(0, 60).padEnd(63, "...")}
      </button>
      {showWindow ? (
        <ReportWindow setShowWindow={setShowWindow} report={report} />
      ) : null}
    </>
  );
};

export default ReportItem;
