import { Window, WindowActionsBar } from "@progress/kendo-react-dialogs";

const ReportWindow = props => {
  const { report, setShowWindow, onChangeArchiveStatus } = props;
  const { id, author, text, archived } = report;

  return (
    <Window
      title={author}
      onClose={() => setShowWindow(false)}
      initialHeight={350}
    >
      <div>{text}</div>

      <WindowActionsBar layout="end">
        <button
          type="button"
          className="k-button k-primary"
          onClick={() => {
            onChangeArchiveStatus(id);
            setShowWindow(false);
          }}
        >
          {`${archived ? "Unarchive" : "Archive"} report`}
        </button>
      </WindowActionsBar>
    </Window>
  );
};

export default ReportWindow;
