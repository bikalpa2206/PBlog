
import React from 'react';
import { Link } from 'react-router-dom';

interface PostCardProps {
  post: {
    id: string;
    title: string;
    excerpt: string;
    date: string;
    category: string;
    imageUrl: string;
  };
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
      <Link to={`/blog/${post.id}`} className="block">
        <div className="aspect-[16/9]">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-full object-cover"
          />
        </div>
      </Link>
      <div className="p-5">
        <div className="flex items-center text-sm text-gray-500 mb-2">
          <span className="inline-block px-2 py-1 text-xs bg-sage-100 text-sage-800 rounded-full">
            {post.category}
          </span>
          <span className="mx-2">•</span>
          <span>{post.date}</span>
        </div>
        
        <Link to={`/blog/${post.id}`}>
          <h3 className="font-serif text-xl font-bold text-gray-900 mb-2 hover:text-sage-700 transition-colors">
            {post.title}
          </h3>
        </Link>
        
        <p className="text-gray-600 mb-3 line-clamp-2">
          {post.excerpt}
        </p>
        
        <Link 
          to={`/blog/${post.id}`} 
          className="text-sage-600 hover:text-sage-800 transition-colors text-sm font-medium"
        >
          Continue reading →
        </Link>
      </div>
    </div>
  );
};

export default PostCard;
