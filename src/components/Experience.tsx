export default function Experience() {
  return (
    <section id="experience" className="py-20 container mx-auto px-4">
      <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
        Professional Experience
      </h2>

      <div className="glass p-6 rounded-2xl shadow-lg backdrop-blur-xl space-y-4">
        <div>
          <p className="text-lg font-semibold">
            Mobile & Full Stack Developer  —{" "}
            <span className="text-primary">Oct 2024 – Present</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Parental Monitoring Application (Startup)
          </p>
        </div>

        <ul className="space-y-2 text-sm leading-relaxed">
    <li><span className="text-green-500 font-bold">➤</span> Built a cross-platform parental-monitoring system using <strong>Flutter & Firebase</strong></li>
    <li><span className="text-green-500 font-bold">➤</span> Designed scalable <strong>Firestore + Node.js API architecture</strong> for real-time secure data sync</li>
    <li><span className="text-green-500 font-bold">➤</span> Developed background services & secure device communication for Android monitoring</li>
    <li><span className="text-green-500 font-bold">➤</span> Integrated <strong>Chargebee v3 + Razorpay</strong> for subscription and payment workflows </li>
    <li><span className="text-green-500 font-bold">➤</span> Implemented <strong>Mixpanel analytics</strong> for user behavior & event tracking</li>
    <li><span className="text-green-500 font-bold">➤</span> Worked with <strong>Cloud Functions & Google Cloud</strong> for automation & backend logic</li>
      </ul>
      </div>
    </section>
  );
}
