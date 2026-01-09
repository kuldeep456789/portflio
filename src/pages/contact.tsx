import { motion } from 'framer-motion';
import {
  Mail,
  Phone,
  Linkedin,
  Github,
  Instagram,
  MapPin,
  Send,
  MessageSquare,
  User,
  ArrowLeft
} from 'lucide-react';
import emailjs from 'emailjs-com';
import { toast } from 'sonner';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Link } from 'react-router-dom';

const Contact = () => {
  const sendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loadingToast = toast.loading('Sending message...');

    try {
      await emailjs.sendForm(
        'your_service_id', // Replace with your EmailJS service ID
        'your_template_id', // Replace with your EmailJS template ID
        e.currentTarget,
        'your_user_id' // Replace with your EmailJS user ID
      );

      toast.success('Message sent successfully!', { id: loadingToast });
      (e.target as HTMLFormElement).reset();
    } catch (error) {
      console.error('EmailJS Error:', error);
      toast.error('Failed to send the message. Please try again later.', { id: loadingToast });
    }
  };

  const socialLinks = [
    { icon: Linkedin, href: "https://www.linkedin.com/in/kuldeep-prajapati-005080257/", label: "LinkedIn" },
    { icon: Github, href: "https://github.com/kuldeep456789", label: "GitHub" },
    { icon: Instagram, href: "https://www.instagram.com/kuldeep_prajapati_007/", label: "Instagram" },
  ];

  return (
    <div className="min-h-screen bg-[#000000] text-slate-200 selection:bg-primary/30">
      {/* Subtle background glow */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px] translate-y-1/2 -translate-x-1/2" />
      </div>

      <nav className="max-w-7xl mx-auto p-6 flex justify-between items-center relative z-10">
        <Link to="/">
          <Button variant="ghost" className="text-slate-400 hover:text-white hover:bg-white/5 gap-2 transition-all">
            <ArrowLeft className="w-4 h-4" /> Back to Home
          </Button>
        </Link>
      </nav>

      <main className="max-w-6xl mx-auto px-6 py-12 md:py-24 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left Side: Information */}
          <div className="space-y-12">
            <div className="space-y-6">
              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl md:text-5xl font-bold tracking-tight text-white"
              >

              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-lg text-slate-400 leading-relaxed max-w-md"
              >
                I'm always open to new opportunities, collaborations, or simply sharing ideas about technology and design.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-primary">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Email</h3>
                  <a href="mailto:prajapatikuldeep3456@gmail.com" className="text-lg font-medium text-slate-200 hover:text-primary transition-colors">
                    prajapatikuldeep3456@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-blue-500">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Phone</h3>
                  <a href="tel:+918235494985" className="text-lg font-medium text-slate-200 hover:text-blue-500 transition-colors">
                    +91 8235494985
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-xl bg-slate-800/50 border border-slate-700/50 text-green-500">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-500 mb-1">Location</h3>
                  <p className="text-lg font-medium text-slate-200">
                    Ranchi, Jharkhand, India
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="pt-4 flex gap-3"
            >
              {socialLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 rounded-lg bg-slate-800/30 border border-slate-700/50 text-slate-400 hover:text-white hover:bg-slate-800 hover:border-slate-600 transition-all shadow-sm"
                  title={link.label}
                >
                  <link.icon className="w-5 h-5" />
                </a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Form */}
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Card className="bg-slate-900/40 backdrop-blur-sm border-slate-800 shadow-xl rounded-2xl">
              <CardContent className="p-8 md:p-10">
                <form onSubmit={sendEmail} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="user_name" className="text-sm font-medium text-slate-400 ml-1">Full Name</Label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          id="user_name"
                          name="user_name"
                          placeholder="John Doe"
                          required
                          className="bg-slate-800/50 border-slate-700 text-white pl-10 focus:ring-primary h-12 rounded-xl transition-all"
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="user_email" className="text-sm font-medium text-slate-400 ml-1">Email Address</Label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
                        <Input
                          id="user_email"
                          name="user_email"
                          type="email"
                          placeholder="john@example.com"
                          required
                          className="bg-slate-800/50 border-slate-700 text-white pl-10 focus:ring-primary h-12 rounded-xl transition-all"
                        />
                      </div>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-sm font-medium text-slate-400 ml-1">Message</Label>
                    <div className="relative">
                      <MessageSquare className="absolute left-3 top-4 w-4 h-4 text-slate-500" />
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Tell me about your project..."
                        required
                        rows={6}
                        className="bg-slate-800/50 border-slate-700 text-white pl-10 pt-3 focus:ring-primary rounded-xl transition-all resize-none min-h-[120px]"
                      />
                    </div>
                  </div>

                  <Button
                    type="submit"
                    className="w-full h-12 rounded-xl font-semibold bg-primary hover:bg-primary/90 text-primary-foreground shadow-lg shadow-primary/10 transition-all group"
                  >
                    Send Message
                    <Send className="w-4 h-4 ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

        </div>

      </main>
    </div>
  );
};

export default Contact;
