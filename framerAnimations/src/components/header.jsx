import styles from "./styles/header.module.css"
import {motion} from 'framer-motion'
import icon from '../assets/pizasvg.svg'
import {FaBars,FaTimes} from 'react-icons/fa'
import { useState } from "react"

export default function Header(params) {



    const headerVarains ={
        hidden:{
            y:-200
        },
        visible:{
            y: -15,
            transition : {
                type :'spring',
                stiffness: 120,
                delay:.5
            }
        }
    }
    const [isOpen, setisOpen] = useState(false);

    return(
        <>
            <header>
                <div className={styles.logo}><img src={icon} alt="pizza"  /></div>
                <motion.div className={styles.headerContent}
                    variants={headerVarains}
                    initial={'hidden'}
                    animate={'visible'}
                >
                    <p>Piza Joint</p>
                    <div className={styles.underline}></div>
                </motion.div>
              
                
            </header>
        </>
    )
};
