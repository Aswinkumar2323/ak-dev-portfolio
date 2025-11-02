import { motion } from "framer-motion";
import { Award, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutPoints = [
  "Hi, I'm Aswin Kumar — a Cloud & Full-Stack Developer specializing in Flutter, Firebase, and backend systems.",
  "Over the past year, I've worked on parental monitoring platforms, real-time IoT early-warning systems, and subscription platforms integrating Razorpay & Chargebee.",
  "I focus on building secure, scalable, and automation-driven applications with strong real-time architecture.",
];

const highlights = [
  "Exceptional Performance Award — Full-Stack Developer",
  "Subscription & payments automation (Chargebee + Razorpay)",
  "Proven resilience in fast-paced product environments",
];

export default function AboutMe() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aswin_Kumar_Resume.docx"; // upload your resume as public file in /public folder
    link.download = "Aswin-Kumar-Resume.docx";
    link.click();
  };

  return (
    <section className="py-32 relative" id="about">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">About Me</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A quick introduction to my work, mission, and skills
          </p>
        </motion.div>

        {/* About Text */}
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4">
            {aboutPoints.map((point, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground"
              >
                {point}
              </motion.p>
            ))}

            {/* Download Resume button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true }}
              className="pt-4"
            >
              <Button
                onClick={handleDownloadResume}
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group magnetic interactive text-lg px-8"
              >
                <Download className="mr-2" /> Download Resume
              </Button>
            </motion.div>
          </div>

          {/* Highlights */}
          <div className="grid gap-6">
            <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" /> Highlights
            </h3>
            <ul className="space-y-2">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.15 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-2 text-muted-foreground"
                >
                  <Zap className="w-4 h-4 text-primary mt-1" /> {item}
                </motion.li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}