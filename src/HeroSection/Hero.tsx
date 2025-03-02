import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Forms from "./Form";
import service from "./service.json"
import { FaArrowsDownToPeople, FaArchway, FaChargingStation,FaUtensils, FaShop, FaRoute,FaTrafficLight } from "react-icons/fa6";


export default function Hero() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  const icons = {FaArrowsDownToPeople, FaArchway, FaChargingStation,FaUtensils, FaShop, FaRoute,FaTrafficLight}
  return (
    <div style={{background:'rgba(0,0,0,0.6)'}}>
      
      <section className="h-210 flex flex-col justify-center items-center text-center px-4 ">
        <div>
        <motion.h1
          className="text-4xl font-bold sm:text-6xl md:text-8xl text-gray-200"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        >
          The Datatactic
        </motion.h1>

        <div className="flex flex-col md:flex-row items-center justify-center w-full max-w-6xl mt-20 gap-6">
          {/* Text Content */}
          <div className="md:w-1/2 text-left px-6 md:px-10">
            <motion.h3
              className="text-xl md:text-3xl text-gray-200 font-semibold"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            >
              Access accurate and on-demand global POI location data
            </motion.h3>
            <motion.h4
              className="mt-10 text-base md:text-lg text-gray-200"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
            >
              Harness the power of precise location data to drive strategic
              decisions and outpace your competition with our location database.
            </motion.h4>

            {/* Stats Section */}
            <div className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-6">
              {[
                { value: "6M+", label: "Location Dataset" },
                { value: "11+", label: "Industries Covered" },
                { value: "20+", label: "Attributes per POI" },
                { value: "5000+", label: "Recognized Brands" },
              ].map((item, index) => (
                <div
                  key={index}
                  className="border-r last:border-none border-gray-200 px-2"
                >
                  <h1 className="text-blue-200 text-3xl md:text-4xl font-bold">
                    {item.value}
                  </h1>
                  <p className="mt-2 text-sm md:text-base text-gray-200">
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Form Section */}
          <div className="w-full md:w-1/3 px-4">
            <Forms />
          </div>
        </div>
        </div>
      </section>
      <div className="overflow-hidden bg-black-900 backdrop-blur-2xl py-8">
      <motion.div
            
            className="flex gap-50 whitespace-nowrap"
        initial={{ x: "100%" }}
        animate={{ x: "-100%" }}
        transition={{ repeat: Infinity, repeatType:'loop', duration: 40, ease:"linear", }}
            >
        {[...service,...service].map((el,i) => {
          const IconComponent = icons[el.icon as keyof typeof icons];
          return(
            <div key={i} className="flex gap-4 justify-center items-center">
              {IconComponent && <IconComponent className="text-3xl text-blue-200" />}
              <h1 className="text-2xl font-semibold">{el.name}</h1>
              </div>
          )
        })
        }
        </motion.div>
      </div>
    </div>
  );
}
