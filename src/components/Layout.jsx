function Layout({ children }) {
  return (
    <div className="app-container">
      <div className="mobile-card">
        {children}
      </div>
    </div>
  );
}

export default Layout;