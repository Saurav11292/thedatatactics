import services from "./services.json";
import {motion, useInView} from "framer-motion"
import { useRef } from "react";

export default function Services() {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  return (
    <div> 
        <section className="p-8 flex flex-col justify-start items-center text-gray-400">
    <h2 className="mt-10 text-3xl font-bold md:w-4xl">Use the Datatactic's POI datasets to gain insights and make smarter,data-driven decisions! </h2>
    <motion.div className="p-10 flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-10 ml-12"
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8, delay: 0.2 }}
    animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
    >
      {services.map((el,i) => {
        return(
          <div key={i} className="p-6">
        <h3 className="text-xl font-bold">{el.title}</h3>
        <p className="text-gray-300 mt-2">{el.Description}</p>
      </div>
        )
      })}
    </motion.div>
  </section>
</div>
  )
}
