'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Product {
  id: number
  name: string
  code: string
  price: string
  image: string
  label: string
}

const products: Product[] = [
  {
    id: 1,
    name: 'J-432 Cognac',
    code: 'J-432 Cognac',
    price: '€110.00',
    image: '/shoes/shoes1.jpg',
    label: 'Must',
  },
  {
    id: 2,
    name: 'J-513 Darkbrown',
    code: 'J-513 Darkbrown',
    price: '€169.00',
    image: '/shoes/shoes2.jpg',
    label: 'Have',
  },
]

export default function DisplayItems() {
  const [hoveredId, setHoveredId] = useState<number | null>(null)

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  }

  return (
    <section className="w-full bg-[#eee] py-16 md:py-24 px-4 md:px-8">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: '-100px' }}
        className="max-w-7xl mx-auto"
      >
        {/* Grid of Products */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {products.map((product) => (
            <motion.div
              key={product.id}
              variants={itemVariants}
              onMouseEnter={() => setHoveredId(product.id)}
              onMouseLeave={() => setHoveredId(null)}
              className="flex flex-col group"
            >
              {/* Product Image Container */}
              <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-square mb-4">
                <motion.img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.4 }}
                />

                {/* Overlay Label */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredId === product.id ? 1 : 0 }}
                  transition={{ duration: 0.25 }}
                  className="absolute inset-0 bg-black/20 pointer-events-none"
                />

                {/* Label Text */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{
                    opacity: hoveredId === product.id ? 1 : 1,
                    y: 0,
                  }}
                  transition={{ duration: 0.3 }}
                  className="absolute bottom-6 left-6 text-white text-4xl md:text-5xl font-bold"
                >
                  {product.label}
                </motion.div>
              </div>

              {/* Product Info */}
              <div className="space-y-3">
                <div>
                  <h3 className="text-lg md:text-xl font-semibold text-gray-900">
                    {product.code}
                  </h3>
                  <p className="text-sm md:text-base text-gray-600">
                    {product.price}
                  </p>
                </div>


                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 border-2 border-gray-900 text-gray-900 font-semibold text-sm rounded-lg hover:bg-gray-900 hover:text-white transition-colors duration-300 cursor-pointer"
                >
                  GET YOURS
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}
