import { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import NET from 'vanta/dist/vanta.net.min';
import { Button } from '../components/ui/button';
import { Mail, Phone, Linkedin, GitHub, Instagram, Youtube, Twitter } from 'react-feather';
import emailjs from 'emailjs-com';

const Contact = () => {
  const vantaRef = useRef<HTMLDivElement>(null);
  const vantaEffect = useRef<any>(null);
  const [showLinks, setShowLinks] = useState(false);

  useEffect(() => {
    if (vantaRef.current && !vantaEffect.current) {
      vantaEffect.current = NET({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.0,
        minWidth: 200.0,
        scale: 1.0,
        scaleMobile: 1.0,
        color: 0xffffff,
        backgroundColor: 0x0a0a0a,
      });
    }
    return () => {
      if (vantaEffect.current) vantaEffect.current.destroy();
    };
  }, []);

  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const result = await emailjs.sendForm(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        e.currentTarget,
        'your_user_id' // Replace with your EmailJS user ID
      );
      console.log('Email sent successfully:', result);
      alert('Message sent successfully!');
    } catch (error) {
      console.error('EmailJS Error:', error);
      if (error.status === 0) {
        alert('Failed to send the message. Please check your network connection.');
      } else {
        alert('Failed to send the message. Please try again later.');
      }
    }

    e.currentTarget.reset();
  };

  const handleCallMeClick = () => {
    window.location.href = 'mailto:prajapatikuldeep3456@gmail.com';
  };

  const handleContactClick = () => {
    setShowLinks(!showLinks);
  };

  return (
    <div ref={vantaRef} className="min-h-screen flex items-center justify-center p-8 text-white">
      <div className="bg-black bg-opacity-60 p-8 rounded-2xl shadow-2xl w-full max-w-lg">
        <h1 className="text-4xl font-bold mb-6 text-center">Contact Me</h1>
        <form className="flex flex-col gap-4" onSubmit={sendEmail}>
          <input 
            type="text" 
            name="user_name"
            placeholder="Your Name" 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <input 
            type="email" 
            name="user_email"
            placeholder="Your Email" 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea 
            name="message"
            placeholder="Your Message" 
            rows={5} 
            className="p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
          ></textarea>
          <button 
            type="submit" 
            className="bg-blue-600 hover:bg-blue-700 transition p-3 rounded-lg font-semibold"
          >
            Send Message
          </button>
        </form>
        <div className="flex flex-col gap-4 mt-6">
          <Button onClick={handleContactClick} className="gap-2 hover:scale-105 transition shadow-lg shadow-primary/20 hover:shadow-primary/30">
            <Mail size={18} /> Contact Me
          </Button>
          {showLinks && (
            <div className="mt-4 grid grid-cols-2 gap-4">
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-blue-600 rounded-lg hover:bg-blue-700 transition">
                <Linkedin size={18} /> LinkedIn
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-gray-800 rounded-lg hover:bg-gray-900 transition">
                <GitHub size={18} /> GitHub
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-pink-500 rounded-lg hover:bg-pink-600 transition">
                <Instagram size={18} /> Instagram
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-red-600 rounded-lg hover:bg-red-700 transition">
                <Youtube size={18} /> YouTube
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 p-3 bg-blue-400 rounded-lg hover:bg-blue-500 transition">
                <Twitter size={18} /> Twitter
              </a>
            </div>
          )}
          <Button onClick={handleCallMeClick} className="gap-2 hover:scale-105 transition shadow-lg shadow-primary/20 hover:shadow-primary/30">
            <Phone size={18} /> Call Me +91 8235494985
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Contact;
