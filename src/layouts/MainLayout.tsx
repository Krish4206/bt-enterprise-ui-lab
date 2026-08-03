import Sidebar from '../components/layout/Sidebar';
import Topbar from '../components/layout/Topbar';
import type { ReactNode } from 'react';

interface MainLayoutProps {
  children: ReactNode;
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <div className="app-layout">
      <Sidebar />
      <div className="app-content">
        <Topbar />
        <main className="page-content">{children}</main>
      </div>
    </div>
  );
}

export default MainLayout;