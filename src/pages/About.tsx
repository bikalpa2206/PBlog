
import React from 'react';
import Layout from '../components/Layout';

const About = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 md:px-6 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-center">
            About This Journey
          </h1>
          
          <div className="w-24 h-1 bg-sage-500 mx-auto mb-12"></div>
          
          <div className="mb-12 rounded-xl overflow-hidden">
            <img 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
              alt="Author in a thoughtful moment" 
              className="w-full h-auto"
            />
          </div>
          
          <div className="prose-custom max-w-none">
            <h2>Welcome to My Corner of the Internet</h2>
            
            <p>
              Hello! I'm so glad you found your way here. This blog is a space where I share my reflections on life's journey—the challenges, the joys, the lessons, and everything in between.
            </p>
            
            <h3>My Story</h3>
            
            <p>
              Like many of us, my path hasn't been a straight line. I've taken detours, faced unexpected obstacles, celebrated victories, and learned from failures. Through it all, I've found that sharing our stories creates connection and meaning.
            </p>
            
            <p>
              I believe that each of our journeys, while unique, share common threads of human experience. My hope is that by sharing my reflections, you might find something that resonates with your own path—whether it's a new perspective, a moment of inspiration, or simply the comfort of knowing you're not alone in your experiences.
            </p>
            
            <h3>What You'll Find Here</h3>
            
            <p>
              This blog covers a range of topics related to personal growth, mindful living, relationships, creativity, and the art of building a meaningful life. You'll find practical insights alongside philosophical musings, always with the intention of supporting your own journey of growth and discovery.
            </p>
            
            <p>
              Some posts will offer practical strategies for navigating life's challenges. Others might pose questions for reflection. All come from my own experience and continuous learning process.
            </p>
            
            <h3>My Philosophy</h3>
            
            <blockquote>
              "The journey is the destination."
            </blockquote>
            
            <p>
              I believe we're all works in progress, continuously evolving and learning. There is no final destination where we "arrive" and have it all figured out. Instead, the richness is in the journey itself—in staying curious, remaining open to growth, and finding beauty in the process.
            </p>
            
            <p>
              I approach life with these principles:
            </p>
            
            <ul>
              <li>Authenticity over perfection</li>
              <li>Curiosity over judgment</li>
              <li>Compassion for self and others</li>
              <li>Finding meaning in both joy and challenge</li>
              <li>Continuous growth and learning</li>
            </ul>
            
            <h3>Let's Connect</h3>
            
            <p>
              This space is as much yours as it is mine. I invite you to engage with the content, share your thoughts and experiences, and join in creating a community of fellow travelers on this journey called life.
            </p>
            
            <p>
              You can reach out via the contact form or connect on social media. I'd love to hear from you!
            </p>
            
            <p>
              Thank you for being here. I'm honored to share this journey with you.
            </p>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;
