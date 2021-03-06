import { useContext, useEffect } from "react";
import { useMotionValue } from 'framer-motion'

import ModelsContext from "./ModelsContext";

export default function UserWrapperScroll() {
  const { wrapperRef } = useContext(ModelsContext);

  const scrollY = useMotionValue(0)
  const scrollYProgress = useMotionValue(0)

  useEffect(() => {
    scrollY.onChange(scrollY => {
      // console.log({ scrollY });
    })
    scrollYProgress.onChange(scrollYProgress => {
      // console.log({ scrollYProgress });
    })
  }, [scrollY, scrollYProgress]);

  useEffect(() => {
    const element = wrapperRef.current;

    if (element) {
      const updateScrollValue = () => {
        const { scrollTop, scrollHeight, offsetHeight } = element;

        const fullScroll = scrollHeight - offsetHeight

        scrollY.set(scrollTop);
        scrollYProgress.set(scrollTop / fullScroll);
      }

      element.addEventListener('scroll', updateScrollValue)

      return () => element.removeEventListener('scroll', updateScrollValue);
    }
  }, [scrollYProgress, scrollY, wrapperRef]);

  return { scrollY, scrollYProgress };
}
