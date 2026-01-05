"use client"
import Image from "next/image"
import { useRef, useState } from "react"
import { motion, useScroll, useTransform } from "motion/react"
import MovingObject from "./components/moving-object"
import FolderReveal from "./components/folder-reveal"

function Contact() {
  const [clicked, setClicked] = useState(false)

  return (
    <div className='w-screen h-screen bg-stone-800 rounded-t-3xl sticky overflow-hidden'>
      <div className='relative pt-20 flex flex-col items-center'>
        <span className='text-blu-500 font-bold text-5xl leading-none'>
          cmon, don't be shy
        </span>
        <span className='leading-none uppercase font-bold text-[200px] tracking-tighter text-butter-500'>
          talk to us
        </span>
      </div>
      <div className=''>
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 50 }}
          transition={{ duration: 0.5 }}
          src='/images/envelope-back.png'
          alt='logo'
          className='w-[60vw] absolute -bottom-64 -rotate-6 left-1/2 -translate-x-1/2'
        />
        <motion.div
          onClick={() => setClicked(true)}
          initial={{ y: 500, rotate: 10 }}
          whileInView={{ y: 0, rotate: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className='bg-zinc-50 w-[40vw] h-[50vw] absolute left-1/2 -translate-x-1/2 rounded-2xl'
        ></motion.div>
        <motion.img
          initial={{ y: 100 }}
          whileInView={{ y: 50 }}
          transition={{ duration: 0.5 }}
          src='/images/envelope-front.png'
          alt='logo'
          className='w-[60vw] absolute -bottom-64 -rotate-6 left-1/2 -translate-x-1/2'
        />
      </div>
    </div>
  )
}

function Studio() {
  const ref = useRef(null)
  const dragRef = useRef(null)
  const containerRef = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1])
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 10])

  const color = useTransform(
    scrollYProgress,
    [0, 0.7, 0.8],
    ["#709f64", "#709f64", "#f0e6d5"]
  )

  return (
    <motion.div ref={containerRef} style={{ backgroundColor: color }}>
      <div
        ref={ref}
        className='h-[200vh] w-full  px-20 flex flex-col items-center'
      >
        <Image
          src='/images/logo.png'
          alt='logo'
          className='w-[75%] sticky top-0'
          width={600}
          height={300}
        />

        <div ref={dragRef} className='sticky top-0 w-screen h-screen'>
          <motion.img
            src='/images/poster.png'
            alt='poster'
            className='w-[60%] drop-shadow-xl absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2'
            style={{ scale, rotate }}
            width={800}
            height={300}
          />
          <motion.img
            whileInView={{ top: 150, left: 150 }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            src='/images/sticker-1.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <motion.img
            whileInView={{ top: "60%", left: 180 }}
            transition={{ duration: 0.5, delay: 1.3 }}
            viewport={{ once: true }}
            src='/images/sticker-2.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <motion.img
            whileInView={{ top: 80, left: "50%" }}
            transition={{ duration: 0.5, delay: 0.8 }}
            viewport={{ once: true }}
            src='/images/sticker-3.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <motion.img
            whileInView={{ top: "90%", left: "50%" }}
            transition={{ duration: 0.5, delay: 1.5 }}
            viewport={{ once: true }}
            src='/images/sticker-4.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <motion.img
            whileInView={{ top: 150, left: "80%" }}
            transition={{ duration: 0.5, delay: 1 }}
            viewport={{ once: true }}
            src='/images/sticker-5.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
          <motion.img
            whileInView={{ top: "60%", left: "80%" }}
            transition={{ duration: 0.5, delay: 1.2 }}
            viewport={{ once: true }}
            src='/images/sticker-6.png'
            alt='poster'
            width={200}
            height={200}
            drag
            dragMomentum={false}
            dragConstraints={dragRef}
            className='z-10 drop-shadow-xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'
          />
        </div>
      </div>
      <div className='h-[200vh]'>
        <div className='sticky p-20 top-0 h-screen'>
          <h2 className='text-blu-500 font-instrument-serif text-center'>
            we can help you with:
          </h2>
          <div className='grid grid-cols-3 w-full h-[80vh] pt-10 gap-10'>
            <div className='flex flex-col items-center gap-10'>
              <FolderReveal
                items={["BRANDING", "UI/UX", "STRATEGY"]}
                slug='design'
              />
            </div>
            <div className='flex flex-col items-center gap-10'>
              <FolderReveal
                items={["TOOLS", "APPS", "WEBSITES"]}
                slug='webdev'
              />
            </div>
            <div className='flex flex-col items-center gap-10'>
              <FolderReveal
                items={["EDITING", "DESIGN", "STRATEGY"]}
                slug='content'
              />
            </div>
          </div>
        </div>
        <Contact />
      </div>
    </motion.div>
  )
}

export default function Home() {
  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  })

  const scale = useTransform(scrollYProgress, [0, 1], [1, 10])
  const position = useTransform(scrollYProgress, [0, 1], [20, 0])
  const opacity = useTransform(scrollYProgress, [0, 0.9, 1], [1, 1, 0])

  const color = useTransform(
    scrollYProgress,
    [0, 0.6, 1],
    ["#2e93d1", "#2e93d1", "#709f64"]
  )

  return (
    <div className='flex min-h-screen font-sans'>
      <nav className='fixed top-0 left-0 h-8 px-5 w-screen'>
        <div>
          <Image src='/images/logo.png' alt='logo' width={100} height={100} />
        </div>
      </nav>
      <main className='min-h-screen w-full'>
        <motion.div
          ref={ref}
          className='h-[200vh] w-full'
          style={{ background: color }}
        >
          <div className='h-screen w-full'>
            <h1 className='text-butter-500 tracking-tighter leading-24 absolute left-20 top-20'>
              We build your <br />
              <span className='font-instrument-serif italic tracking-normal'>
                tiny corners
              </span>
            </h1>
            <p className='tracking-tighter text-right absolute font-bold text-3xl right-20 top-1/2'>
              (and your <br /> big ones)
            </p>
            <h2 className='text-right tracking-tighter text-butter-500 leading-20 absolute right-20 bottom-20'>
              on the <br />
              internet
            </h2>
            {/* Object Overlay */}
            <div className='absolute w-full h-full top-0 left-0 grid grid-cols-9 grid-rows-12 pointer-events-none'>
              <MovingObject
                className={"w-28 h-28 col-start-5 row-start-3"}
                lerpFactor={0.03}
              >
                <Image
                  src='/images/dinosaur.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-9 row-start-4"}
                lerpFactor={0.15}
              >
                <Image
                  src='/images/folder.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-2 row-start-6"}
                lerpFactor={0.2}
              >
                <Image
                  src='/images/heart.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-8 row-start-7"}
                lerpFactor={0.05}
              >
                <Image src='/images/cd.png' alt='cd' width={100} height={100} />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-6 row-start-5"}
                lerpFactor={0.05}
              >
                <Image
                  src='/images/message.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-3 row-start-9"}
                lerpFactor={0.05}
              >
                <Image
                  src='/images/sparkle.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-2 row-start-11"}
                lerpFactor={0.5}
              >
                <Image
                  src='/images/globe.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
              <MovingObject
                className={"w-28 h-28 col-start-9 row-start-12"}
                lerpFactor={0.08}
              >
                <Image
                  src='/images/envelope.png'
                  alt='cd'
                  width={100}
                  height={100}
                />
              </MovingObject>
            </div>
          </div>
          <motion.img
            src='/images/computer.png'
            alt='cd'
            className='w-[50vw] fixed left-1/2 -translate-x-1/2'
            style={{ scale, opacity, bottom: `-${position.get()}vh` }}
            width={800}
            height={800}
          ></motion.img>
        </motion.div>
        <Studio />
      </main>
    </div>
  )
}
