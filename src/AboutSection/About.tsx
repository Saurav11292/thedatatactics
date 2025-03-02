import { useRef } from "react";
import content from "./content.json"
import { motion, useInView } from "framer-motion";
import { GiHourglass, GiGlobe, GiFiles, GiDatabase } from "react-icons/gi";

export default function About() {
    const icons_about={
        GiHourglass, GiGlobe, GiFiles, GiDatabase
    }
    const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { amount: 0.3 });
  return (
    <div>
        <section className="p-8 bg-gray-800 flex flex-col justify-start items-center text-gray-400">
            <div>
            <h2 className="mt-10 text-3xl font-bold">Unlock the power of The Datatactic POI database to revolutionize <br/>your business landscape.</h2>
            </div>
            <div className="p-10 flex flex-col md:flex-row justify-center items-center w-full max-w-5xl gap-10 ml-12">
                {
                    content.map((el,i) => {
                        const Icon_anoutsec = icons_about[el.image as keyof typeof icons_about]
                        return(
                            <motion.h3 key={i} initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: i * 0.2 }}
                            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}>
                                {Icon_anoutsec && <Icon_anoutsec className="text-3xl text-blue-200" />}
                                <p className="mt-5 text-2xl font-semibold">{el.title}</p>
                                <p className="mt-5">{el.description}</p>
                            </motion.h3>
                        )
                    })
                }
            </div>


      </section>

    </div>
  )
}
