import React, { useEffect, useRef } from 'react';

import { motion } from 'framer-motion';
// import myAvatar from '../../../assets/rcg-avatar.png';

import './Avatar.scss';

const Avatar = () => {
  return (
    <motion.div
      className='avatar-container'
      initial={{ scale: 0, rotate: 0 }}
      animate={{ x: 1, rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 250,
        damping: 30,
        duration: 2.8,
        delay: 1.5,
      }}
    >
      {/* <img src={myAvatar} alt='avatar' /> */}
    </motion.div>
  );
};

export default Avatar;
