export default function EmptyWidget({ handleAddWidget }) {
  return (
    <section className="empty-widget">
      <div className="empty-widget-btn" onClick={handleAddWidget}>
        <svg
          stroke="currentColor"
          fill="currentColor"
          strokeWidth="0"
          viewBox="-80 -60 448 512"
          height="1em"
          width="1em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
        </svg>
        &nbsp; Add Widget
      </div>
    </section>
  );
}
