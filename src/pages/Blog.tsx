
import React, { useState } from 'react';
import Layout from '../components/Layout';
import PostCard from '../components/PostCard';
import { posts } from '../data/posts';

const Blog = () => {
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  
  const categories = [...new Set(posts.map(post => post.category))];
  
  const filteredPosts = selectedCategory 
    ? posts.filter(post => post.category === selectedCategory)
    : posts;

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-5xl mx-auto">
          <h1 className="font-serif text-4xl font-bold text-gray-900 mb-6 text-center">
            The Blog
          </h1>
          
          <div className="w-24 h-1 bg-sage-500 mx-auto mb-12"></div>
          
          {/* Category Filter */}
          <div className="flex flex-wrap gap-2 justify-center mb-12">
            <button
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                selectedCategory === null
                  ? 'bg-sage-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
              onClick={() => setSelectedCategory(null)}
            >
              All Posts
            </button>
            
            {categories.map(category => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-sage-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
          
          {/* Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map(post => (
              <PostCard key={post.id} post={post} />
            ))}
          </div>
          
          {/* Empty State */}
          {filteredPosts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">No posts found in this category.</p>
              <button
                className="mt-4 text-sage-600 hover:text-sage-800 font-medium"
                onClick={() => setSelectedCategory(null)}
              >
                View all posts
              </button>
            </div>
          )}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
