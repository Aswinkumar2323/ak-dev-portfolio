import { motion } from "framer-motion";

const projects = [
  {
    title: "WEATHERSPHERE",
    description:
      "Weathersphere is a smart weather application that delivers accurate, real-time, location-based weather insights to help users plan their day and stay safe. It provides live temperature readings, weekly forecasts, air-quality information, and severe weather alerts — all powered by environmental data and device location services.",
    tags: [
      "Flutter", "Dart", "REST API", "Weather Data", "Geolocation",
      "Mobile Development", "State Management", "UI/UX Design", "Real-time Forecasting"
    ],
  },
  {
    title: "NFT Marketplace Platform",
    description:
      "A modern NFT marketplace with wallet support, NFT minting, auction bidding, and secure smart-contract based trading. Built for next-gen Web3 users with seamless UI and fast blockchain interaction.",
    tags: ["NFT", "Next.js", "Solidity", "Web3", "IPFS", "Blockchain"],
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
            Explore my latest work showcasing innovation & problem-solving
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
