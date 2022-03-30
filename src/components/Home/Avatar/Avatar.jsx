import React, { useEffect, useRef } from 'react';
// import gsap from 'gsap-trial';
// import DrawSVGPlugin from 'gsap-trial/dist/DrawSVGPlugin';
import { motion } from 'framer-motion';
import myAvatar from '../../../assets/rcg-avatar.png';

import './Avatar.scss';

const Avatar = () => {
  // const bgRef = useRef();
  // const outlineAvatarRef = useRef();
  // const solidAvatarRef = useRef();

  // useEffect(() => {
  //   gsap.registerPlugin(DrawSVGPlugin);
  //   gsap
  //     .timeline()
  //     .to(bgRef.current, {
  //       duration: 1,
  //       opacity: 1,
  //     })
  //     .from(outlineAvatarRef.current, {
  //       drawSVG: 0,
  //       duration: 20,
  //     });

  //   gsap.fromTo(
  //     solidAvatarRef.current,
  //     {
  //       opacity: 0,
  //     },
  //     {
  //       opacity: 1,
  //       delay: 4,
  //       duration: 4,
  //     }
  //   );
  // }, []);

  return (
    <motion.div
      className='avatar-container'
      initial={{ scale: 0 }}
      animate={{ rotate: 360, scale: 1 }}
      transition={{
        type: 'spring',
        stiffness: 260,
        damping: 30,
      }}
    >
      <img src={myAvatar} alt='avatar' />
    </motion.div>
  );
};

export default Avatar;
