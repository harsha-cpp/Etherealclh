import { useState } from 'react';
import { Send } from 'lucide-react';

export default function Newsletter() {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Newsletter signup logic will be implemented later
    console.log('Newsletter signup:', email);
    setEmail('');
  };

  return (
    <section className="bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="text-3xl font-lexend font-light mb-4">Join Our World</h2>
          <p className="text-gray-600 mb-8">
            Subscribe to receive exclusive updates, early access to new collections, and personalized style recommendations.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="flex-1 px-4 py-2 border border-gray-300 focus:outline-none focus:ring-1 focus:ring-gray-500 font-lexend"
              required
            />
            <button
              type="submit"
              className="px-6 py-2 bg-gray-900 text-white hover:bg-gray-800 transition-colors flex items-center gap-2 font-lexend"
            >
              Subscribe <Send className="h-4 w-4" />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}