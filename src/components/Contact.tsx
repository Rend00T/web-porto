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
    <section id="contact" className="py-20 sm:py-28 relative z-10">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mb-12 sm:mb-16 space-y-3">
          <div className="inline-flex items-center space-x-2 text-xs font-mono font-semibold uppercase tracking-widest text-[#858585] dark:text-[#737373]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#171717] dark:bg-white"></span>
            <span>Get In Touch</span>
          </div>
          <h2 className="font-display text-3xl sm:text-5xl font-bold tracking-tight text-[#171717] dark:text-white leading-tight">
            Have an interesting project in mind?
          </h2>
          <p className="text-sm sm:text-base text-[#666666] dark:text-[#A3A3A3] leading-relaxed">
            I'm open to internship opportunities, collaborative projects, and conversations about software engineering, data, AI, and cybersecurity.
          </p>
        </div>

        {/* 2-Column Contact Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Direct Channels Cards */}
          <div className="lg:col-span-5 space-y-3.5">
            
            {/* Email Card with Copy Action */}
            <div className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] shadow-xs">
              <div className="flex items-center justify-between mb-1.5">
                <span className="text-xs font-mono text-[#858585] dark:text-[#737373]">Direct Email</span>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center space-x-1 text-xs font-mono text-[#171717] dark:text-neutral-200 hover:text-black dark:hover:text-white transition-colors"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-500" />
                      <span className="text-emerald-500 font-semibold">Copied!</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5 text-[#858585]" />
                      <span>Copy Address</span>
                    </>
                  )}
                </button>
              </div>

              <a
                href={`mailto:${emailAddress}`}
                className="font-display text-base font-bold text-[#171717] dark:text-white hover:underline transition-all flex items-center space-x-2 break-all"
              >
                <Mail className="w-4 h-4 text-[#858585] shrink-0" />
                <span>{emailAddress}</span>
              </a>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="group p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-xs block"
            >
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-xs font-mono text-[#858585] dark:text-[#737373]">Professional Network</span>
                  <div className="font-display text-base font-bold text-[#171717] dark:text-white group-hover:underline transition-all flex items-center space-x-2 mt-1">
                    <LinkedinIcon className="w-4 h-4 text-[#858585]" />
                    <span>linkedin.com/in/raihan-fahri</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-[#858585] group-hover:text-black dark:group-hover:text-white transition-colors" />
              </div>
            </a>

            {/* Phone / Mobile Card */}
            <a
              href={`tel:${phoneNumber}`}
              className="p-5 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] hover:border-neutral-400 dark:hover:border-neutral-600 transition-colors shadow-xs block"
            >
              <span className="text-xs font-mono text-[#858585] dark:text-[#737373]">Mobile / WhatsApp</span>
              <div className="font-display text-base font-bold text-[#171717] dark:text-white flex items-center space-x-2 mt-1">
                <Phone className="w-4 h-4 text-[#858585]" />
                <span>{phoneNumber}</span>
              </div>
            </a>

            {/* Location & Status Info */}
            <div className="p-4 rounded-xl bg-neutral-100 dark:bg-[#101010] border border-[#E5E5E5] dark:border-[#242424] text-xs text-[#858585] dark:text-[#737373] space-y-1 font-mono">
              <div className="flex items-center space-x-2 text-[#171717] dark:text-neutral-300 font-sans">
                <MapPin className="w-3.5 h-3.5 text-[#858585]" />
                <span>Based in Surabaya, Indonesia (WIB / UTC+7)</span>
              </div>
              <div className="text-[11px] text-[#858585] dark:text-[#666666]">
                Department of Information Technology, Institut Teknologi Sepuluh Nopember
              </div>
            </div>

          </div>

          {/* Quick Direct Compose Form (Mailto-Powered) */}
          <div className="lg:col-span-7">
            <form
              onSubmit={handleSendMailto}
              className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-[#141414] border border-[#E5E5E5] dark:border-[#282828] shadow-xs space-y-4"
            >
              <div className="flex items-center justify-between pb-2 border-b border-[#E5E5E5] dark:border-[#262626]">
                <div className="flex items-center space-x-2 text-xs font-mono text-[#171717] dark:text-neutral-300">
                  <MessageSquare className="w-4 h-4 text-[#858585]" />
                  <span>Send a Message (Direct Email)</span>
                </div>
                <span className="text-[10px] font-mono text-[#858585] dark:text-[#666666]">
                  Opens default email application
                </span>
              </div>

              <div>
                <label htmlFor="contact-subject" className="block text-xs font-mono text-[#858585] dark:text-[#737373] mb-1.5">
                  Subject / Topic
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  placeholder="Internship opportunity / Technical collaboration..."
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#0E0E0E] border border-[#E5E5E5] dark:border-[#282828] text-xs text-[#171717] dark:text-white placeholder-[#999999] dark:placeholder-[#555555] focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 transition-colors font-sans"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-mono text-[#858585] dark:text-[#737373] mb-1.5">
                  Message Details
                </label>
                <textarea
                  id="contact-message"
                  rows={4}
                  placeholder="Hi Raihan, I reviewed your work on SIAW and data lakehouses and would like to talk about..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-lg bg-[#FAFAFA] dark:bg-[#0E0E0E] border border-[#E5E5E5] dark:border-[#282828] text-xs text-[#171717] dark:text-white placeholder-[#999999] dark:placeholder-[#555555] focus:outline-none focus:border-neutral-900 dark:focus:border-neutral-400 transition-colors resize-none font-sans"
                />
              </div>

              <div className="flex items-center justify-between pt-1 flex-wrap gap-3">
                <span className="text-[11px] font-mono text-[#858585] dark:text-[#666666]">
                  Destination: ghazali.raihan789@gmail.com
                </span>

                <button
                  type="submit"
                  className="inline-flex items-center space-x-2 px-5 py-2.5 rounded-lg bg-[#171717] hover:bg-neutral-800 dark:bg-white dark:hover:bg-neutral-200 text-white dark:text-neutral-900 text-xs font-semibold tracking-wide transition-colors shadow-sm"
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
