import { motion } from "framer-motion";

export default function MagicAppear({ children }) {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        initial={{ opacity: 0, scale: 0.6, rotate: -15 }}
        whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
        transition={{
          duration: 1,
          ease: "easeOut",
        }}
        viewport={{ once: true, margin: "-100px 0px -100px 0px" }} // 画面外でも発火
        className="relative"
      >
        <div className="absolute inset-0 rounded-full opacity-30 animate-spin-slow pointer-events-none"></div>

        {children}
      </motion.div>
    </div>
  );
}


