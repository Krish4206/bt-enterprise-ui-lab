function Topbar() {
  return (
    <header className="topbar">
      <div className="topbar__breadcrumb">
        <span>Home</span>
        <span className="crumb-sep">/</span>
        <span>Customers</span>
        <span className="crumb-sep">/</span>
        <span className="crumb-current">Dashboard</span>
      </div>

      <div className="topbar__search">
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.35-4.35" />
        </svg>
        <input type="text" placeholder="Search..." />
      </div>

      <div className="topbar__actions">
        <button className="icon-btn" aria-label="Notifications">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
            <path d="M13.73 21a2 2 0 0 1-3.46 0" />
          </svg>
        </button>
        <div className="topbar__avatar">KM</div>
      </div>
    </header>
  );
}

export default Topbar;