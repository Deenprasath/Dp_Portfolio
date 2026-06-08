import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Linkedin, Github, Globe, Send, Loader2, CheckCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';

const ContactInfoCard = ({ icon, label, value, href }) => (
  <motion.a
    href={href}
    target="_blank"
    whileHover={{ x: 10, backgroundColor: 'rgba(139, 92, 246, 0.1)' }}
    className="flex items-center gap-4 p-4 glass-card rounded-2xl border border-white/5 transition-all group"
  >
    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all">
      {icon}
    </div>
    <div>
      <p className="text-[10px] font-black uppercase tracking-widest text-gray-500 mb-0.5">{label}</p>
      <p className="text-gray-200 font-bold group-hover:text-white transition-colors">{value}</p>
    </div>
  </motion.a>
);

const Contact = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const contactDetails = [
    { icon: <Mail size={20} />, label: "Email", value: "sdeenprasath@gmail.com", href: "mailto:sdeenprasath@gmail.com" },
    { icon: <Phone size={20} />, label: "Phone", value: "+91 7338870582", href: "tel:+917338870582" },
    { icon: <MapPin size={20} />, label: "Location", value: "Chennai, Tamil Nadu, India", href: "https://maps.google.com/?q=Chennai" },
    { icon: <Linkedin size={20} />, label: "LinkedIn", value: "deenprasaths090705", href: "https://linkedin.com/in/deenprasaths090705" },
    { icon: <Github size={20} />, label: "GitHub", value: "Deenprasath", href: "https://github.com/Deenprasath" },
    { icon: <Globe size={20} />, label: "Website", value: "deenportfolio.netlify.app", href: "https://deenportfolio.netlify.app" },
  ];

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
    const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
    const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

    if (!SERVICE_ID || !TEMPLATE_ID || !PUBLIC_KEY) {
      console.warn("EmailJS credentials are not set in environment variables. Falling back to simulation mode.");
      // Simulating email send for demonstration if keys are placeholders
      setTimeout(() => {
        setLoading(false);
        setSuccess(true);
        form.current.reset();
        setTimeout(() => setSuccess(false), 5000);
      }, 1500);
      return;
    }

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY)
      .then((result) => {
          setLoading(false);
          setSuccess(true);
          form.current.reset();
          setTimeout(() => setSuccess(false), 5000);
      }, (error) => {
          setLoading(false);
          console.error("EmailJS Error:", error);
          alert("Failed to send message. Please make sure your EmailJS credentials are correct.");
      });
  };

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold text-white mb-4"
          >
            Get in <span className="text-gradient">Touch</span>
          </motion.h2>
          <p className="text-gray-400">Let's build something amazing together.</p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          {/* Left - Contact Info */}
          <div className="lg:col-span-2 space-y-4">
            {contactDetails.map((detail, index) => (
              <ContactInfoCard key={index} {...detail} />
            ))}
          </div>

          {/* Right - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-3 glass-card p-8 rounded-3xl border border-white/5"
          >
            <form ref={form} onSubmit={sendEmail} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Name</label>
                  <input
                    type="text"
                    name="user_name"
                    required
                    placeholder="John Doe"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Email</label>
                  <input
                    type="email"
                    name="user_email"
                    required
                    placeholder="john@example.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Subject</label>
                <input
                  type="text"
                  name="subject"
                  required
                  placeholder="Inquiry for SDE Role"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold uppercase tracking-widest text-gray-400 ml-1">Message</label>
                <textarea
                  name="message"
                  required
                  rows="5"
                  placeholder="Tell me about your project or role..."
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-gray-600 focus:border-primary/50 focus:ring-1 focus:ring-primary/50 outline-none transition-all resize-none"
                ></textarea>
              </div>

              <motion.button
                type="submit"
                disabled={loading || success}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all ${
                  success 
                  ? "bg-green-500 text-white" 
                  : "bg-primary text-white hover:shadow-lg hover:shadow-primary/30"
                }`}
              >
                {loading ? (
                  <>
                    <Loader2 className="animate-spin" size={20} />
                    Sending...
                  </>
                ) : success ? (
                  <>
                    <CheckCircle size={20} />
                    Message Sent!
                  </>
                ) : (
                  <>
                    <Send size={20} />
                    Send Message
                  </>
                )}
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
