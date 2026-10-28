import React, { useState } from 'react';
import { Mail, Phone, Copy, Check, Send, ArrowUpRight, MessageSquare, MapPin } from 'lucide-react';
import { LinkedinIcon } from './Icons';

export const Contact: React.FC = () => {
  const [copied, setCopied] = useState(false);
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');

  const emailAddress = 'ghazali.raihan789@gmail.com';
  const linkedinUrl = 'https://www.linkedin.com/in/raihan-fahri-841376323/';
  const phoneNumber = '+6281296415619';

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendMailto = (e: React.FormEvent) => {
    e.preventDefault();
    const encodedSubject = encodeURIComponent(subject || 'Inquiry / Opportunity for Raihan Fahri Ghazali');
    const encodedBody = encodeURIComponent(message || 'Hello Raihan,\n\nI came across your portfolio and would like to connect regarding...');
    window.location.href = `mailto:${emailAddress}?subject=${encodedSubject}&body=${encodedBody}`;
  };

  return (
    <section id="contact" className="py-20 sm:py-28 bg-[#0F172A] text-white relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[300px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-blue-400">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Have an interesting project in mind?
          </h2>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
            I'm open to internship opportunities, collaborative projects, and conversations about software engineering, data, AI, and cybersecurity.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card with Copy Action */}
            <div className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-mono text-slate-400">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 text-xs font-mono text-blue-400 hover:text-blue-300 transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                      <span className="text-emerald-400 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="text-base sm:text-lg font-bold text-white hover:text-blue-400 transition-colors flex items-center space-x-2 break-all"
              >
                <Mail className="w-4 h-4 text-blue-400 shrink-0" />
                <span>{emailAddress}</span>
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-blue-500/50 hover:bg-slate-850 transition-all shadow-sm block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-slate-400">Professional Network</span>
                  <div className="text-base sm:text-lg font-bold text-white group-hover:text-blue-400 transition-colors flex items-center space-x-2 mt-1">
                    <LinkedinIcon className="w-4 h-4 text-blue-400" />
                    <span>linkedin.com/in/raihan-fahri</span>
                  </div>
                </div>
                <ArrowUpRight className="w-5 h-5 text-slate-500 group-hover:text-blue-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </div>
            </a>

            {/* Phone / Mobile Card */}
            <a
              href={`tel:${phoneNumber}`}
              className="p-5 rounded-2xl bg-slate-900/90 border border-slate-800 hover:border-slate-700 transition-colors shadow-sm block"
            >
              <span className="text-xs font-mono text-slate-400">Mobile / WhatsApp</span>
              <div className="text-base sm:text-lg font-bold text-white flex items-center space-x-2 mt-1">
                <Phone className="w-4 h-4 text-emerald-400" />
                <span>{phoneNumber}</span>
              </div>
            </a>

            {/* Location & Status Info */}
            <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800/80 text-xs text-slate-400 space-y-1">
              <div className="flex items-center space-x-2 text-slate-300">
                <MapPin className="w-3.5 h-3.5 text-slate-400" />
                <span>Based in Surabaya, Indonesia (WIB / UTC+7)</span>
              </div>
              <div className="text-[11px] font-mono text-slate-500">
                Department of Information Technology, Institut Teknologi Sepuluh Nopember
              </div>
            </div>

          </div>

          {/* Quick Direct Compose Form (Mailto-Powered) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMailto}
              className="p-6 sm:p-8 rounded-2xl bg-slate-900/90 border border-slate-800 shadow-xl space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-slate-800">
                <div className="flex items-center space-x-2 text-xs font-mono text-slate-300">
                  <MessageSquare className="w-4 h-4 text-blue-400" />
                  <span>Send a Message (Direct Email)</span>
                </div>
                <span className="text-[10px] font-mono text-slate-400">
                  Opens default email client
                </span>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Internship opportunity / Full-stack inquiry..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-slate-400 mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Hi Raihan, I reviewed your work on SIAW and data lakehouses and would like to talk about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-4 py-2.5 rounded-xl bg-slate-950 border border-slate-800 text-sm text-white placeholder-slate-600 focus:outline-none focus:border-blue-500 transition-colors resize-none"
                />
              </div>

              <div className="flex items-center justify-between pt-2 flex-wrap gap-3">
                <span className="text-[11px] font-mono text-slate-500">
                  Recipient: ghazali.raihan789@gmail.com
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-sm transition-all hover:shadow-blue-500/20 hover:-translate-y-0.5"
                >
                  <span>Compose in Email</span>
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
};
