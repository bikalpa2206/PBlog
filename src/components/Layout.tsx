
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Get repository name from the current URL or use a fallback
  const repoUrl = "https://github.com/" + (
    process.env.GITHUB_REPOSITORY || 
    window.location.hostname.includes('github.io') 
      ? window.location.pathname.split('/')[1] 
      : 'YOUR-USERNAME/YOUR-REPOSITORY'
  );

  return (
    <div className="flex flex-col min-h-screen">
      <a 
        href={repoUrl}
        target="_blank" 
        rel="noopener noreferrer"
        className="absolute top-4 right-4 text-gray-700 hover:text-black z-50"
        aria-label="GitHub repository"
      >
        <Github size={24} />
      </a>
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
