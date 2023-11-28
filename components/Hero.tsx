"use client"

import { image1, image2, image3, image4, image5 } from "@/public/assets/images"
import { motion } from "framer-motion"
import Image from "next/image"

const imageSources = [image1, image2, image3, image4, image5]

const Hero = () => {
  return (
    <div className="mb-[450px] max-w-4xl">
      <div className="flex w-full flex-col space-y-10">
        <h1 className="text-8xl font-bold tracking-tight">
          <motion.span
            className="block"
            initial={{ opacity: 0, x: -60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0 }}
          >
            Hey!
          </motion.span>
          <motion.span
            className="block"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.25, delay: 0 }}
          >
            I&apos;m <span className="text-primary">Samuel</span>
          </motion.span>
        </h1>
        <div className="flex flex-row-reverse">
          <motion.h2
            className="max-w-2xl text-end text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            — a software engineer, web developer, and{" "}
            <span className="text-blue-600">TypeScript </span>
            enthusiast.
          </motion.h2>
        </div>
      </div>

      <div className="absolute left-0 right-0 mt-16 sm:mt-10">
        <motion.div
          className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          {imageSources.map((src, index) => (
            <div
              key={index}
              className={`relative aspect-[9/10] w-44 flex-none ${
                index % 2 === 0 ? "rotate-2" : "-rotate-2"
              } overflow-hidden rounded-xl bg-zinc-100 dark:bg-zinc-800 sm:w-72 sm:rounded-2xl`}
            >
              <Image
                src={src}
                alt={`Image-${index + 1}`}
                className="absolute inset-0 h-full w-full object-cover"
                placeholder="blur"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}

export default Hero
