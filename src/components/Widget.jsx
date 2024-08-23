export default function Widget({ title, description }) {
  console.log(title, description);
  return (
    <section className="widget">
      <div className="widget-title">{title}</div>
      <div className="widget-body">{description}</div>
    </section>
  );
}
