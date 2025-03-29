
import React from 'react';
import Layout from '../components/Layout';
import FeaturedPost from '../components/FeaturedPost';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const Index = () => {
  const featuredPosts = posts.filter(post => post.featured);
  const recentPosts = posts.slice(0, 3);

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-sage-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
              Reflections on Life's Journey
            </h1>
            <p className="text-lg md:text-xl text-gray-700 mb-8">
              Exploring the paths, challenges and beautiful moments that make up our shared human experience.
            </p>
            <Link 
              to="/blog" 
              className="inline-flex items-center bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors"
            >
              Read the Blog <ArrowRight size={20} className="ml-2" />
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Posts */}
      {featuredPosts.length > 0 && (
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-8 text-center">
              Featured Stories
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {featuredPosts.map((post) => (
                <FeaturedPost key={post.id} post={post} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Recent Posts */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex justify-between items-center mb-8">
            <h2 className="font-serif text-3xl font-bold text-gray-900">
              Recent Posts
            </h2>
            <Link 
              to="/blog" 
              className="text-sage-600 hover:text-sage-800 font-medium flex items-center transition-colors"
            >
              View all <ArrowRight size={16} className="ml-1" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {recentPosts.map((post) => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>
      
      {/* Newsletter */}
      <section className="py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="font-serif text-3xl font-bold text-gray-900 mb-4">
              Join the Journey
            </h2>
            <p className="text-gray-600 mb-6">
              Sign up to receive new posts and reflections directly in your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="px-4 py-3 border border-gray-300 rounded-lg flex-grow focus:outline-none focus:ring-2 focus:ring-sage-500 focus:border-transparent"
              />
              <button className="bg-sage-600 hover:bg-sage-700 text-white font-medium py-3 px-6 rounded-lg transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
