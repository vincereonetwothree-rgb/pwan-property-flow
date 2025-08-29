import { motion } from "framer-motion";

export default function HeroBackgroundGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Animated gradient blobs using PWAN colors */}
      <motion.div
        className="absolute -top-40 -left-40 w-[600px] h-[600px] rounded-full opacity-20 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, hsl(358, 94%, 45%) 0%, transparent 70%)' 
        }}
        animate={{
          x: [0, 100, -100, 0],
          y: [0, -50, 50, 0],
          scale: [1, 1.2, 0.9, 1],
        }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
      
      <motion.div
        className="absolute -bottom-40 -right-40 w-[500px] h-[500px] rounded-full opacity-15 blur-3xl"
        style={{ 
          background: 'radial-gradient(circle, hsl(224, 71%, 20%) 0%, transparent 70%)' 
        }}
        animate={{
          x: [0, -120, 120, 0],
          y: [0, 80, -80, 0],
          scale: [1, 1.1, 0.95, 1],
        }}
        transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
      />
      
      {/* Additional subtle blob for more depth */}
      <motion.div
        className="absolute top-1/3 left-1/3 w-[400px] h-[400px] rounded-full opacity-10 blur-2xl"
        style={{ 
          background: 'radial-gradient(circle, hsl(0, 0%, 50%) 0%, transparent 60%)' 
        }}
        animate={{
          x: [0, 50, -50, 0],
          y: [0, -30, 30, 0],
          scale: [1, 1.15, 0.85, 1],
        }}
        transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
}