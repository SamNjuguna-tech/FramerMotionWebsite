import { Link } from "react-router-dom"
import styles from "./styles/home.module.css"
import {motion} from 'framer-motion'



const H1variant ={
    hidden:{
        x:-40,
    },
    vissible:{
        x:0,
        rotate: [0, 10, 0, 10, 0],
        scale: [1, .5, .5, 1, 1],
        transition:{
            
                repeat: Infinity,
                repeatDelay: 1
        }
    }
} 
export default function Home(params) {
    return(
        <>
        <motion.main className={styles.HomeContent}
            initial={{opacity: 0}}
            animate={{opacity: 1}}
            transition={{delay:1}}
        >
            <div className={styles.titles}>
            <h2 >
            Welcome to
        </h2>
        <motion.h1
        variants={H1variant}
        initial={"hidden"}
        animate={"visible"}
        
        >Cuppies</motion.h1>
            </div>
        
        <Link to={"/base"}>
        <motion.button
             whileHover={{
                scale:1.2,
                originX:0
                
             }}

             onHoverStart={e => {}}
             onHoverEnd={ e => {}}
        >
            Create Your cupcake
        </motion.button>
        </Link>
        </motion.main>
        

        </>
    )
};
