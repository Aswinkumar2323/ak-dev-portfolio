import { motion } from "framer-motion";

const projects = [
  {
    title: "WEATHERSPHERE — Smart Weather Forecast System",
    description:
      "A real-time smart weather application with GPS-enabled forecasting, live weather analytics, and emergency alert system. Built with Flutter to deliver precise temperature, humidity, AQI, and severe weather warnings using REST APIs and device geolocation.",
    tags: [
      "Flutter", "Dart", "REST API", "Weather API", "Geolocation", 
      "Real-Time Updates", "Mobile App", "UI/UX", "State Management"
    ],
  },
  {
    title: "NFT Marketplace Platform — Web3 Trading System",
    description:
      "A decentralized NFT marketplace supporting wallet login, NFT minting, secure smart-contract trading, and auction system. Built on Ethereum with Next.js and IPFS, enabling fast blockchain interaction and seamless crypto asset management.",
    tags: ["Next.js", "Solidity", "Ethereum", "Web3.js", "IPFS", "Blockchain", "Smart Contracts"],
  },
  {
    title: "LAN-to-LAN Audio Calling DApp (WebRTC SDK)",
    description:
      "A serverless WebRTC-powered DApp enabling peer-to-peer voice calls within local networks. Built without SIP or dedicated signaling servers by leveraging Firebase Firestore for custom signaling. Includes a reusable LAN WebRTC SDK for decentralized communication architectures.",
    tags: [
      "WebRTC", "Peer-to-Peer", "Firebase", "Vite", "HTML", "CSS",
      "Serverless", "Real-Time Communication", "Decentralized Apps"
    ],
  },
];

const Projects = () => {
  return (
    <section className="py-32 relative" id="projects">
      <div className="container mx-auto px-4">
        
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              Featured Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of impactful real-world projects in Web3, real-time communication, and scalable mobile systems.
          </p>
        </motion.div>

        {/* Project Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group"
            >
              <div className="glass rounded-3xl p-6 border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow space-y-4">
                
                <h3 className="text-2xl font-bold">{project.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-sm rounded-full bg-primary/10 border border-primary/20"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
