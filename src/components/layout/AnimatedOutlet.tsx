import { useLocation, Outlet } from 'react-router';
import { motion, AnimatePresence } from 'framer-motion';
import { useMemo } from 'react';

const pageVariants = {
  initial: {
    opacity: 0,
    y: 8,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
  exit: {
    opacity: 0,
    y: -8,
  },
};

const pageTransition = {
  type: 'tween' as const,
  ease: [0.4, 0, 0.2, 1] as const,
  duration: 0.2,
};

export function AnimatedOutlet() {
  const location = useLocation();

  // Create a stable key for each route
  const routeKey = useMemo(() => {
    return `${location.pathname}${location.search || ''}`;
  }, [location.pathname, location.search]);

  return (
    <AnimatePresence mode="wait" initial={false}>
      <motion.div
        key={routeKey}
        initial="initial"
        animate="animate"
        exit="exit"
        variants={pageVariants}
        transition={pageTransition}
        style={{
          width: '100%',
          minHeight: '100%',
        }}
      >
        <Outlet />
      </motion.div>
    </AnimatePresence>
  );
}
