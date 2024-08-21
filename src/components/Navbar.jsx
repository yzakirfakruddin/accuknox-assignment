export default function Navbar() {
  return (
    <section className="navbar">
      <div className="title">Dashboard</div>
      <div className="search-bar">
        <input
          className="search-bar-input"
          type="search"
          placeholder="Search"
        />
      </div>
      <div className="more-items">
        <svg
          stroke="currentColor"
          fill="none"
          stroke-width="2"
          viewBox="0 0 24 24"
          stroke-linecap="round"
          stroke-linejoin="round"
          className="icons"
          height="1.3em"
          width="1.3em"
          xmlns="http://www.w3.org/2000/svg">
          <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"></path>
          <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"></path>
          <path d="M4 2C2.8 3.7 2 5.7 2 8"></path>
          <path d="M22 8c0-2.3-.8-4.3-2-6"></path>
        </svg>
        <svg
          stroke="currentColor"
          fill="currentColor"
          stroke-width="0"
          viewBox="0 0 24 24"
          className="icons"
          height="1.5em"
          width="1.5em"
          xmlns="http://www.w3.org/2000/svg">
          <path fill="none" d="M0 0h24v24H0z"></path>
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20z"></path>
        </svg>
      </div>
    </section>
  );
}
