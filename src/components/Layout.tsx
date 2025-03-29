
import React from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Github } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  // Get repository name from the current URL
  const getRepoUrl = () => {
    // Default repo URL in case we can't determine it
    let repoUrl = "https://github.com/YOUR-USERNAME/YOUR-REPOSITORY";
    
    try {
      const hostname = window.location.hostname;
      
      // If we're on GitHub Pages
      if (hostname.endsWith('github.io')) {
        const pathParts = window.location.pathname.split('/');
        if (pathParts.length > 1) {
          const username = hostname.replace('.github.io', '');
          const repo = pathParts[1]; // First part of the path is the repo name
          if (repo) {
            repoUrl = `https://github.com/${username}/${repo}`;
          }
        }
      }
    } catch (e) {
      console.error("Error determining repo URL:", e);
    }
    
    return repoUrl;
  };

  return (
    <div className="flex flex-col min-h-screen">
      <a 
        href={getRepoUrl()}
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
