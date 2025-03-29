
import React from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';

const NotFound = () => {
  return (
    <Layout>
      <div className="min-h-[70vh] flex items-center justify-center">
        <div className="text-center px-4">
          <h1 className="font-serif text-6xl font-bold text-gray-900 mb-4">404</h1>
          <p className="text-xl text-gray-600 mb-8">Oops! Looks like you've wandered off the path.</p>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist or has been moved.</p>
          
          <Link 
            to="/" 
            className="inline-flex items-center bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
          >
            Return to Home
          </Link>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
