// import Toppings from "./toppings"
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid';
import styles from './styles/order.module.css'
import {motion} from 'framer-motion'
import { Link } from 'react-router-dom';

export default function Order(params) {
   
    const url = window.location.href
    const UrlParams = new URL(url)
    const base = UrlParams.searchParams.get('base') 
    const toppingsParams = UrlParams.searchParams.get('toppings')
    let toppings;
    const toppingsTexst = toppingsParams.match(/\[(.*?)\]/)[1];
    toppings = toppingsTexst.split(',').map(item => item.trim());

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
                delay :.6,
                mass:0.4,
                damping: 8,
                when:"beforeChildren",
                staggerChildren:0.4
            }

        
        }
    }
   
   
    return(
        <>
            <motion.div 
            className={styles.redirectContainer}
            initial={{y:'-200vh', opacity :0}}
            animate={{y:0, opacity: 1}}
            transition={{delay:5, type:"tween", duration:.5}}

            >
                <div className={styles.redirect}>
                    <p>Create another pizza?</p>
                    <div className={styles.btnContainer}>
                    <Link className={styles.link} to={'/base'}>YES</Link>
                    <Link className={styles.link} to={'/'}>NO</Link>
                    </div>
                    
                </div>
            </motion.div>
            <motion.main className={styles.ordersContainer}
                 variants={containerVariants}
                 initial={"hidden"}
                 animate={'visible'}
            >

            <h1>Thank you for Your Order 🎉</h1>
            <p>You ordered a  {base} pizza with: </p>
            <ul>
                {
                    toppings.map(topping => (
                        <motion.li key={uuidv4()}
                        initial={{x :30}}
                        animate={{x:0}}
                        transition={{type:"", delay:1, duration:2 }}
                        >{topping}</motion.li>
                    ))
                }
            </ul>
        </motion.main>          
        </>
    )
};
