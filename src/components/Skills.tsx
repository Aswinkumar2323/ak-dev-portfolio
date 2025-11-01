import { motion } from "framer-motion";
import { useState } from "react";

const skills = [
  { name: "React", color: "#61dafb" },
  { name: "TypeScript", color: "#3178c6" },
  { name: "Three.js", color: "#ffffff" },
  { name: "Node.js", color: "#339933" },
  { name: "Flutter", color: "#02569B" },
  { name: "Firebase", color: "#FFCA28" },
  { name: "Next.js", color: "#ffffff" },
  { name: "Tailwind", color: "#06B6D4" },
  { name: "GraphQL", color: "#E10098" },
  { name: "MongoDB", color: "#47A248" },
  { name: "Docker", color: "#2496ED" },
  { name: "AWS", color: "#FF9900" },
  { name: "Python", color: "#3776AB" },
  { name: "Framer", color: "#0055FF" },
  { name: "WebGL", color: "#990000" },
];

const KeyCap = ({ skill, index }: { skill: { name: string; color: string }; index: number }) => {
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
      style={{
        transformStyle: "preserve-3d",
      }}
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
        {/* Keycap shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent"
          animate={{
            opacity: isHovered ? 1 : 0.5,
          }}
        />

        {/* Skill name */}
        <div className="relative z-10 text-center">
          <motion.p
            className="text-lg font-bold"
            animate={{
              color: isHovered ? skill.color : "hsl(var(--foreground))",
              textShadow: isHovered ? `0 0 20px ${skill.color}` : "none",
            }}
          >
            {skill.name}
          </motion.p>
        </div>

        {/* Glow effect */}
        <motion.div
          className="absolute inset-0 rounded-2xl"
          animate={{
            background: isHovered
              ? `radial-gradient(circle at center, ${skill.color}20, transparent)`
              : "transparent",
          }}
        />

        {/* Bottom shadow (mechanical keyboard depth) */}
        <div
          className="absolute -bottom-2 left-2 right-2 h-2 bg-black/40 rounded-b-xl blur-sm"
          style={{
            transform: "translateZ(-10px)",
          }}
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
            Interact with the 3D keyboard below. Each keycap represents a technology I master.
          </p>
        </motion.div>

        {/* 3D Keyboard Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => (
            <KeyCap key={skill.name} skill={skill} index={index} />
          ))}
        </div>

        {/* Decorative elements */}
        <div className="absolute top-1/2 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl -z-10" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl -z-10" />
      </div>
    </section>
  );
};

export default Skills;
