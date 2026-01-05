import Image from "next/image"
import { useState } from "react"
import { motion } from "framer-motion"

export default function FolderReveal({ items, slug }) {
  const [hovered, setHovered] = useState(false)
  return (
    <div
      className='w-full relative'
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Image
        src='/images/portfolio-back.png'
        alt='poster'
        className='absolute top-0'
        width={400}
        height={300}
      />
      <motion.div
        animate={{
          y: hovered ? -100 : 0,
          rotate: hovered ? -20 : 0,
          x: hovered ? -20 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='w-[50%] p-5 flex justify-center absolute lg:h-[200px] md:h-[150px] rounded-2xl bg-white lg:top-18 md:top-8 left-1/2 -translate-x-1/2 rotate-6'
      >
        <h5 className='text-blu-500'>{items[0]}</h5>
      </motion.div>
      <motion.div
        animate={{
          y: hovered ? -60 : 0,
          x: hovered ? 20 : 0,
          rotate: hovered ? 10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='w-[50%] p-5 flex justify-center absolute lg:h-[200px] md:h-[150px] rounded-2xl bg-moss-500 lg:top-18 md:top-8 right-12 rotate-6'
      >
        <h5 className='text-butter-500'>{items[1]}</h5>
      </motion.div>
      <motion.div
        animate={{
          y: hovered ? -30 : 0,
          rotate: hovered ? -10 : 0,
        }}
        transition={{ duration: 0.3 }}
        className='w-[50%] p-5 flex justify-center absolute lg:h-[200px] md:h-[150px] rounded-2xl bg-butter-500 lg:top-18 md:top-8 left-12 -rotate-3'
      >
        <h5 className='text-blu-500'>{items[2]}</h5>
      </motion.div>
      <Image
        src={`/images/folder-front-${slug}.png`}
        alt='poster'
        className='absolute top-0'
        width={400}
        height={300}
      />
    </div>
  )
}
