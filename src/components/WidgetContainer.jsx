import Widget from "./Widget.jsx";
import EmptyWidget from "./EmptyWidget.jsx";

export default function WidgetContainer({ widgets, title, handleAddWidget }) {
  let content1 = widgets.widget1.visible;
  let content2 = widgets.widget2.visible;
  let content3 = widgets.widget3.visible;

  return (
    <div className="widget-container">
      <div className="widget-container-title">{title}</div>
      <div className="widget-container-body">
        {content1 && (
          <Widget
            title={widgets.widget1.Title}
            description={widgets.widget1.Description}
          />
        )}
        {content2 && (
          <Widget
            title={widgets.widget2.Title}
            description={widgets.widget2.Description}
          />
        )}
        {content3 && (
          <Widget
            title={widgets.widget3.Title}
            description={widgets.widget3.Description}
          />
        )}
        {!content1 && <EmptyWidget handleAddWidget={handleAddWidget} />}
        {!content2 && <EmptyWidget handleAddWidget={handleAddWidget} />}
        {!content3 && <EmptyWidget handleAddWidget={handleAddWidget} />}
      </div>
    </div>
  );
}
