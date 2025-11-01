import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";

const articles = [
  {
    title: "Building Interactive 3D Experiences with Three.js",
    excerpt: "Learn how to create stunning 3D web experiences using Three.js and React Three Fiber.",
    date: "2024-01-15",
    readTime: "8 min read",
    category: "3D Development",
    image: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop",
  },
  {
    title: "The Future of Web Animations with Framer Motion",
    excerpt: "Discover advanced animation techniques and best practices for modern web applications.",
    date: "2024-01-10",
    readTime: "6 min read",
    category: "Animation",
    image: "https://images.unsplash.com/photo-1557853197-aefb550b6fdc?w=800&h=400&fit=crop",
  },
  {
    title: "Optimizing React Performance for Large Applications",
    excerpt: "Deep dive into React optimization techniques and performance best practices.",
    date: "2024-01-05",
    readTime: "10 min read",
    category: "React",
    image: "https://images.unsplash.com/photo-1633356122102-3fe601e05bd2?w=800&h=400&fit=crop",
  },
];

const Articles = () => {
  return (
    <section className="py-32 relative" id="articles">
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
              Featured Articles
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Thoughts and insights on modern web development
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {articles.map((article, index) => (
            <motion.article
              key={article.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="group cursor-pointer interactive"
            >
              <div className="glass rounded-3xl overflow-hidden border border-primary/20 hover:border-primary/40 transition-all duration-300 hover:shadow-glow h-full">
                {/* Article Image */}
                <div className="relative h-48 overflow-hidden">
                  <motion.img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 text-xs rounded-full bg-primary/90 text-primary-foreground font-semibold">
                      {article.category}
                    </span>
                  </div>
                </div>

                {/* Article Content */}
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-bold group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {article.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center justify-between pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(article.date).toLocaleDateString()}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {article.readTime}
                      </span>
                    </div>
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Articles;
