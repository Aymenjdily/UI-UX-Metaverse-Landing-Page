'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    className={`${styles.xPaddings} relative py-8`}
    variants={navVariants}
    initial="hidden"
    whileInView="show"
  >
    <div
      className="absolute w-[50%] inset-0 gradient-01"
    />
    <div
      className={`${styles.innerWidth} mx-auto flex justify-between gap-8 relative`}
    >
      <img
        src="/search.svg"
        alt="search"
        className="w-[24px] h-[24px] object-contain cursor-pointer"
      />
      <h2
        className="font-extrabold text-[24px] leading-[30.24px] text-white"
      >
        METAVERSUS
      </h2>
      <img
        src="/menu.svg"
        alt="menu"
        className="w-[24px] h-[24px] object-contain"
      />
    </div>
  </motion.nav>
);

export default Navbar;
