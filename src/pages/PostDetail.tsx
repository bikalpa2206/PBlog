
import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Layout from '../components/Layout';
import { posts } from '../data/posts';
import { ArrowLeft } from 'lucide-react';

const PostDetail = () => {
  const { postId } = useParams<{ postId: string }>();
  const navigate = useNavigate();
  
  const post = posts.find(p => p.id === postId);
  
  useEffect(() => {
    if (!post) {
      navigate('/blog', { replace: true });
    }
    
    // Scroll to top when post loads
    window.scrollTo(0, 0);
  }, [post, navigate]);
  
  if (!post) return null;

  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <Link to="/blog" className="inline-flex items-center text-sage-600 hover:text-sage-800 mb-8 transition-colors">
            <ArrowLeft size={16} className="mr-2" /> Back to all posts
          </Link>
          
          {/* Post Header */}
          <header className="mb-12">
            <div className="mb-4">
              <span className="inline-block px-3 py-1 text-sm font-medium bg-sage-100 text-sage-800 rounded-full mr-3">
                {post.category}
              </span>
              <span className="text-gray-500">{post.date}</span>
            </div>
            
            <h1 className="font-serif text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              {post.title}
            </h1>
            
            <div className="rounded-xl overflow-hidden mb-8">
              <img
                src={post.imageUrl}
                alt={post.title}
                className="w-full h-auto"
              />
            </div>
          </header>
          
          {/* Post Content */}
          <div 
            className="prose-custom max-w-none"
            dangerouslySetInnerHTML={{ 
              __html: post.content
                .replace(/^# (.*$)/gim, '<h1>$1</h1>')
                .replace(/^## (.*$)/gim, '<h2>$1</h2>')
                .replace(/^### (.*$)/gim, '<h3>$1</h3>')
                .replace(/\*\*(.*)\*\*/gim, '<strong>$1</strong>')
                .replace(/\*(.*)\*/gim, '<em>$1</em>')
                .replace(/\n/gim, '<br />')
                .replace(/^\d\. (.*$)/gim, '<ol><li>$1</li></ol>')
                .replace(/^- (.*$)/gim, '<ul><li>$1</li></ul>')
                .replace(/^>(.*$)/gim, '<blockquote>$1</blockquote>')
            }}
          />
          
          {/* Author Bio */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-4">
              About the Author
            </h3>
            <p className="text-gray-700 mb-4">
              Passionate about personal growth, mindfulness, and the art of living a meaningful life. 
              I write to explore my own journey and connect with fellow travelers on their paths.
            </p>
          </div>
          
          {/* Related Posts Section */}
          <div className="mt-16">
            <h3 className="font-serif text-xl font-bold text-gray-900 mb-6">
              You might also enjoy
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {posts
                .filter(p => p.id !== post.id)
                .slice(0, 2)
                .map(relatedPost => (
                  <div key={relatedPost.id} className="bg-gray-50 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow">
                    <Link to={`/blog/${relatedPost.id}`} className="block">
                      <div className="aspect-video">
                        <img
                          src={relatedPost.imageUrl}
                          alt={relatedPost.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4">
                        <h4 className="font-serif text-lg font-bold text-gray-900 mb-2 hover:text-sage-700 transition-colors">
                          {relatedPost.title}
                        </h4>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedPost.excerpt}
                        </p>
                      </div>
                    </Link>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PostDetail;
