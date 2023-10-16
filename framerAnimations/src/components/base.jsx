import { useState } from "react"
import styles from "./styles/base.module.css"
import { BaseData } from "../data/bases"
import {  Link} from "react-router-dom";
import {delay, motion} from 'framer-motion'

export default function Base(params) {


    const containerVariants = {
        hidden: {
            x : '100vh',
            opacity : 0
        },
        visible: {
            x : 0,
            opacity : 1,
            transition :{
                type : "spring",
                stiffness :120,
                delay :.6
            }

        
        }
    }

    const listVariants ={
        hover: {
            scale : 1.3,
            // originY: 0,
            originX: 0,
            
            transition:{
                type:"spring",
                stiffness: 300
            }
        }
    }
    const [base, setBase] = useState(null)
    function AddBase(e){
        e.preventDefault();
       setBase(e.target.InnerHTML)
       

    }
    return(
        <>
            <motion.div
             className={styles.baseContainer}
             variants={containerVariants}
             initial={"hidden"}
             animate={'visible'}
             >
                <h1>Step 1 : Choose Your Base</h1>

            <ul className={styles.bases}>
            {
                BaseData.map(base => (
                    <motion.li onClick={AddBase} key={BaseData.indexOf(base)}
                        variants={listVariants}
                        whileHover={'hover'}
                    ><Link className={styles.link} to={`/toppings?base=${base}`}>{base}</Link></motion.li>
                ))
            }
         </ul>
            </motion.div>
         
        </>
    )
};
