import { motion } from "framer-motion";
import { Mail, Github, Linkedin, Twitter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { toast } from "sonner";

/* ✅ Upwork Icon SVG */
const UpworkIcon = (props) => (
  <svg
    {...props}
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M17.5 3c-2.2 0-4 1.8-4 4v3.7c-.6-.8-1.2-1.8-1.7-2.8L10 5H8.3v6.3c0 1-.8 1.7-1.7 1.7S5 12.3 5 11.3V5H3v6.3c0 2.1 1.7 3.7 3.7 3.7 1.6 0 2.9-.9 3.4-2.2.7.9 1.5 1.7 2.4 2.4v3.8h2v-3c2.2-.2 4-2 4-4.3V7c0-2.2-1.8-4-4-4zm2 8.3c0 1.2-.9 2.2-2 2.3V7c0-1.1.9-2 2-2v6.3z"/>
  </svg>
);

/* ✅ Updated social links */
const socialLinks = [
  { icon: Github, href: "https://github.com/Aswinkumar2323", label: "GitHub" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/aswin-kumar-/", label: "LinkedIn" },
  { icon: Twitter, href: "https://x.com/AswinKumar2323", label: "Twitter / X" },
  { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/~0157714dce55800497?mp_source=share", label: "Upwork" },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const mailtoLink = `mailto:aswinak0330@gmail.com?subject=Portfolio Contact from ${formData.name}&body=${formData.message}%0D%0A%0D%0AFrom: ${formData.email}`;
    window.location.href = mailtoLink;

    toast.success("Opening your email client...");

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <section className="py-32 relative" id="contact">
      <div className="container mx-auto px-4">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Get In Touch
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">

          {/* ✅ Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">Name</label>
                <Input
                  id="name"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                  className="glass border-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">Email</label>
                <Input
                  id="email"
                  type="email"
                  placeholder="you@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                  className="glass border-primary/30 focus:border-primary transition-all"
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">Message</label>
                <Textarea
                  id="message"
                  placeholder="Tell me about your project..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                  rows={6}
                  className="glass border-primary/30 focus:border-primary transition-all resize-none"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-gradient-primary hover:shadow-glow transition-all magnetic interactive"
              >
                <Mail className="w-5 h-5 mr-2" /> Send Message
              </Button>
            </form>
          </motion.div>

          {/* ✅ Social Links */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="glass rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-6">Connect With Me</h3>

              <div className="grid grid-cols-2 gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.6 + index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, y: -5 }}
                    className="flex items-center gap-3 p-4 glass rounded-2xl border border-primary/20 hover:border-primary/40 hover:shadow-neon transition-all interactive group"
                  >
                    <social.icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors" />
                    <span className="font-medium">{social.label}</span>
                  </motion.a>
                ))}
              </div>
            </div>

            <div className="glass rounded-3xl p-8 border border-primary/20">
              <h3 className="text-2xl font-bold mb-4">Direct Email</h3>
              <a
                href="mailto:aswinak0330@gmail.com"
                className="text-primary hover:text-secondary transition-colors text-lg interactive"
              >
                aswinak0330@gmail.com
              </a>

              <p className="text-muted-foreground mt-4">
                Available for freelance projects — let's build something incredible together!
              </p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Background Glow */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
    </section>
  );
};

export default Contact;
