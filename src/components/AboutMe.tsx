import { motion } from "framer-motion";
import { Award, Zap, Download } from "lucide-react";
import { Button } from "@/components/ui/button";

const aboutPoints = [
  "Hi, I'm Aswin Kumar, a Mobile and Full-Stack Developer with hands-on experience in Flutter, Firebase, backend engineering, cloud technologies and Blockchain.",
  "I build high-performance digital products including parental monitoring platforms, NFT marketplace platforms and automated subscription pipelines using Razorpay and Chargebee.",
  "My development approach focuses on real-time architecture, automation, secure data workflows, and scalable cloud infrastructure.",
];

const highlights = [
  "Recognized with an Exceptional Performance Award for Full-Stack Engineering contribution at a startup",
  "Developed complete subscription automation and payment systems integrating Chargebee and Razorpay",
];

export default function AboutMe() {
  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = "/Aswin-Kumar-Resume.pdf"; 
    link.download = "Aswin-Kumar-Resume.pdf";
    link.click();
  };

  return (
    <section className="py-32 relative" id="about">
      <div className="container mx-auto px-4">
        
        {/* Section Title */}
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
            A brief introduction to my experience, mission, and expertise.
          </p>
        </motion.div>

        {/* About & Highlights */}
        <div className="grid md:grid-cols-2 gap-12 items-start">
          
          {/* About Text */}
          <div className="space-y-5">
            {aboutPoints.map((point, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.15 }}
                viewport={{ once: true }}
                className="text-lg text-muted-foreground leading-relaxed"
              >
                {point}
              </motion.p>
            ))}

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
          <div>
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <Award className="w-6 h-6 text-primary" /> Key Highlights
            </h3>

            <ul className="space-y-4">
              {highlights.map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.12 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 text-muted-foreground text-lg leading-relaxed"
                >
                  <Zap className="w-4 h-4 text-primary mt-1" />
                  {item}
                </motion.li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}
