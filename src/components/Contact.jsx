import { useState } from 'react';
import { Mail, Send } from 'lucide-react';

export default function Contact() {
  const [status, setStatus] = useState('');

  function handleSubmit(e) {
    e.preventDefault();
    setStatus('Thanks! I’ll get back to you soon.');
  }

  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10">
          <p className="text-sm font-medium text-blue-600">Let’s connect</p>
          <h2 className="mt-2 text-3xl font-bold tracking-tight text-gray-900">Contact</h2>
          <p className="mt-2 text-gray-600 max-w-prose">Have an idea or an opportunity? Drop a message and I’ll respond within a day.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          <div className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input required type="text" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Your name" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input required type="email" className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea required rows={4} className="mt-1 w-full rounded-md border-gray-300 focus:border-gray-900 focus:ring-gray-900" placeholder="Tell me about your project" />
              </div>
              <button type="submit" className="inline-flex items-center gap-2 rounded-full bg-gray-900 text-white px-5 py-2.5 text-sm">
                <Send size={16} /> Send
              </button>
              {status && (
                <p className="text-sm text-green-600">{status}</p>
              )}
            </form>
          </div>

          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm">
              <Mail size={16} /> hello@yourdomain.com
            </div>
            <p className="text-gray-600 max-w-prose">Prefer email? Reach out directly — I’m always happy to chat about new ideas, freelance work, and collaborations.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
