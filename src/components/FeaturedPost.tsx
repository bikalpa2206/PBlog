
import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

interface FeaturedPostProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
  };
}

const FeaturedPost: React.FC<FeaturedPostProps> = ({ post }) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-white shadow-md hover:shadow-lg transition-shadow">
      <div className="aspect-[16/9] w-full">
        <img
          src={post.imageUrl}
          alt={post.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-6">
        <div className="mb-2">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-sage-100 text-sage-800 rounded-full">
            {post.category}
          </span>
          <span className="ml-2 text-sm text-gray-500">{post.date}</span>
        </div>
        
        <h3 className="font-serif text-2xl font-bold text-gray-900 mb-2">
          {post.title}
        </h3>
        
        <p className="text-gray-600 mb-4">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="inline-flex items-center text-sage-600 hover:text-sage-800 transition-colors"
        >
          Read more <ArrowRight size={16} className="ml-1" />
        </Link>
      </div>
    </div>
  );
};

export default FeaturedPost;
