import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

const Counter = ({ end, suffix = '' }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
    >
      {isInView ? end : 0}{suffix}
    </motion.span>
  )
}

const Stats = () => {
  const stats = [
    { value: '10K+', label: 'Kayıtlı Kullanıcı' },
    { value: '5K+', label: 'Bulunan Eşya' },
    { value: '15K+', label: 'İlan' },
    { value: '98%', label: 'Memnuniyet' }
  ]

  return (
    <div className="bg-gradient-to-r from-primary-500 to-primary-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                <Counter end={stat.value} />
              </div>
              <div className="text-primary-100 text-sm md:text-base">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Stats
