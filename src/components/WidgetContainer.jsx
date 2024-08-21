import Widget from "./Widget.jsx";
import EmptyWidget from "./EmptyWidget.jsx";

export default function WidgetContainer() {
  return (
    <div className="widget-container">
      <div className="widget-container-title">Title</div>
      <div className="widget-container-body">
        <Widget />
        <Widget />
        <EmptyWidget />
      </div>
    </div>
  );
}
