export default function Dashboard() {
  return (
    <section className="dashboard">
      <div className="dashboard-head">
        <div className="title">CNAAP DashBoard</div>
        <div className="buttons">
          <div className="btn" id="add-widget">
            Add Widget
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="-80 -60 448 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z"></path>
            </svg>
          </div>
          <div className="btn" id="refresh">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 -60 512 512"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M256 93.09V32l-80 81.454 80 81.456v-61.093c65.996 0 120 54.982 120 122.183 0 20.363-5 39.714-14.004 57.016L391 342.547c15.996-25.457 25-54.988 25-86.547 0-89.599-72.002-162.91-160-162.91zm0 285.094c-66.001 0-120-54.988-120-122.184 0-20.363 5-39.709 13.999-57.02L121 169.454C104.999 193.89 96 224.436 96 256c0 89.599 72.002 162.91 160 162.91V480l80-81.453-80-81.457v61.094z"></path>
            </svg>
          </div>
          <div className="btn" id="more">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 -1.5 16 16"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0m0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0"></path>
            </svg>
          </div>
          <div className="btn" id="date">
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="0 -100 600 600"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120V256c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2V120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"></path>
            </svg>
            <svg
              stroke="currentColor"
              fill="none"
              stroke-width="2"
              viewBox="5 0 15 15"
              stroke-linecap="round"
              stroke-linejoin="round"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5v14"></path>
            </svg>
            Last 2 days
            <svg
              stroke="currentColor"
              fill="currentColor"
              stroke-width="0"
              viewBox="100 -30 100 400"
              height="1em"
              width="1em"
              xmlns="http://www.w3.org/2000/svg">
              <path d="M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z"></path>
            </svg>
          </div>
        </div>
      </div>

      <div className="dashboard-body">body</div>
    </section>
  );
}
