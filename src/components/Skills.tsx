import { motion } from "framer-motion";
import { useState } from "react";
import {
  Globe,
  Palette,
  FileJson,
  Server,
  Smartphone,
  Flame,
  Code2,
  Network,
  Webhook,
  Link,
  type LucideIcon,
} from "lucide-react";

const skills = [
  { name: "HTML", color: "#E44D26", Icon: Globe },
  { name: "CSS", color: "#264DE4", Icon: Palette },
  { name: "JavaScript", color: "#F7DF1E", Icon: FileJson },
  { name: "Node.js", color: "#339933", Icon: Server },
  { name: "Flutter", color: "#02569B", Icon: Smartphone },
  { name: "Firebase", color: "#FFCA28", Icon: Flame },
  { name: "Kotlin", color: "#7F52FF", Icon: Code2 },
  { name: "REST API", color: "#06B6D4", Icon: Link },
  { name: "WebSocket", color: "#0078D7", Icon: Network },
  { name: "Webhook", color: "#47A248", Icon: Webhook },
];

const KeyCap = ({
  skill,
  index,
}: {
  skill: { name: string; color: string; Icon: LucideIcon };
  index: number;
}) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.1,
        rotateX: -15,
        rotateY: 15,
        z: 50,
      }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      className="interactive relative perspective-1000"
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="relative p-6 glass rounded-2xl border-2 border-primary/30 cursor-pointer overflow-hidden"
        animate={{
          borderColor: isHovered ? skill.color : "hsl(var(--primary) / 0.3)",
          boxShadow: isHovered
            ? `0 0 30px ${skill.color}40, 0 10px 20px rgba(0,0,0,0.3)`
            : "var(--shadow-card)",
        }}
        transition={{ duration: 0.3 }}
      >
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
          animate={{ opacity: isHovered ? 1 : 0.5 }}
        />

        <div className="relative z-10 text-center flex flex-col items-center gap-2">
          <motion.div
            animate={{
              color: isHovered ? skill.color : "hsl(var(--foreground))",
              filter: isHovered ? `drop-shadow(0 0 10px ${skill.color})` : "none",
            }}
          >
            <skill.Icon size={32} />
          </motion.div>

          <motion.p
            className="text-sm font-bold"
            animate={{
              color: isHovered ? skill.color : "hsl(var(--foreground))",
              textShadow: isHovered ? `0 0 20px ${skill.color}` : "none",
            }}
          >
            {skill.name}
          </motion.p>
        </div>

        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at center, ${skill.color}20, transparent)`
              : "transparent",
          }}
        />

        <div
          className="absolute -bottom-2 left-2 right-2 h-2 bg-black/40 rounded-b-xl blur-sm"
          style={{ transform: "translateZ(-10px)" }}
        />
      </motion.div>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section className="py-32 relative overflow-hidden" id="skills">
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
              Skills
            </span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Interact with the 3D keyboard below — each key represents a technology I’ve mastered.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <KeyCap key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default Skills;
