import { motion } from "framer-motion";
import { Download, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "./3d/Scene3D";

const Hero = () => {
  const handleDownloadResume = () => {
    // Create a sample resume download link
    const link = document.createElement('a');
    link.href = '#';
    link.download = 'resume.pdf';
    link.click();
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="container mx-auto px-4 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h1 className="text-6xl md:text-8xl font-bold mb-4">
                <span className="bg-gradient-primary bg-clip-text text-transparent">
                  Creative
                </span>
                <br />
                <span className="neon-text">Developer</span>
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-xl md:text-2xl text-muted-foreground max-w-2xl"
            >
              Building immersive digital experiences with cutting-edge technologies.
              Specialized in React, Three.js, and interactive 3D web applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                size="lg"
                className="bg-gradient-primary hover:shadow-glow transition-all duration-300 group magnetic interactive text-lg px-8"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={handleDownloadResume}
                className="glass border-primary/30 hover:border-primary hover:shadow-neon transition-all duration-300 magnetic interactive text-lg px-8"
              >
                <Download className="mr-2" />
                Download Resume
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex gap-4 pt-4"
            >
              {["React", "Three.js", "TypeScript", "Framer Motion"].map((tech, i) => (
                <motion.div
                  key={tech}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 1.2 + i * 0.1 }}
                  className="px-4 py-2 glass rounded-full text-sm border border-primary/20"
                >
                  {tech}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right side - 3D Scene */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="h-[500px] relative"
          >
            <div className="absolute inset-0 bg-gradient-glow rounded-3xl blur-3xl opacity-30 animate-glow" />
            <div className="relative h-full glass rounded-3xl overflow-hidden border border-primary/20 shadow-glow">
              <Scene3D />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
    </section>
  );
};

export default Hero;
