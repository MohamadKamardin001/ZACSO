import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <section className="section-padding">
      <div className="container">
        <div className="relative rounded-3xl overflow-hidden reveal">
          <div className="absolute inset-0">
            <img src="https://images.pexels.com/photos/8804775/pexels-photo-8804775.jpeg?auto=compress&cs=tinysrgb&w=1920&h=600&fit=crop" alt="" className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-[#123e35]/85" />
          </div>
          <div className="relative px-6 py-16 lg:py-20 text-center">
            <Mail className="w-12 h-12 text-[#d8e93b] mx-auto mb-5" />
            <h2 className="text-white text-3xl lg:text-4xl font-extrabold mb-4">Stay Connected</h2>
            <p className="text-white/80 text-lg max-w-xl mx-auto mb-8">
              Subscribe to our newsletter for the latest updates, events, and stories from our community.
            </p>
            {submitted ? (
              <p className="text-[#d8e93b] text-lg font-semibold">Thank you for subscribing!</p>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                <input
                  type="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="input-field flex-1 bg-white/95"
                />
                <button type="submit" className="btn btn-accent whitespace-nowrap">
                  Subscribe <Send className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
