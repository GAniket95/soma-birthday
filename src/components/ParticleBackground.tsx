import { motion } from 'framer-motion';

type Props = {
  count?: number;
};

export function ParticleBackground({ count = 25 }: Props) {
  const particles = Array.from({ length: count }, (_, index) => ({
    id: index,
    left: `${(index * 17) % 100}%`,
    top: `${(index * 29) % 100}%`,
    size: 4 + (index % 5),
    delay: `${(index % 6) * 0.8}s`,
  }));

  return (
    <div aria-hidden="true" className="pointer-events-none absolute inset-0 overflow-hidden">
      {particles.map((particle) => (
        <motion.span
          key={particle.id}
          className="absolute rounded-full bg-white/40"
          style={{
            left: particle.left,
            top: particle.top,
            width: particle.size,
            height: particle.size,
          }}
          animate={{ y: [0, -18, 0], opacity: [0.2, 0.8, 0.2] }}
          transition={{ duration: 8 + (particle.id % 5), repeat: Infinity, delay: Number.parseFloat(particle.delay) }}
        />
      ))}
    </div>
  );
}
