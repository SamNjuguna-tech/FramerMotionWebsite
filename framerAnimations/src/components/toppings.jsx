import { useState } from "react"
import styles from './styles/toppings.module.css'
import { ToppingsData } from "../data/toppingsData"
import {Link} from 'react-router-dom'
import { BaseData } from "../data/bases"
import {v4 as uuidv4} from 'uuid';
import {motion, spring} from 'framer-motion'

function ErrorPage(){
    return(
    <div style={{display:"flex",justifyContent:'center', alignItems:"center", color:'red',height:'80vh'}}>
        No Such Pizza Base Found
    </div>
    )
}
const toppingsContainerVariant ={
    from: {
        x : '-100vw'

    },
    to:{
        x: -35,
        transition :{
            delay:.3,
            type:"spring",
            stiffness:300

        }
    }
}
const ToppingsListVariant = {
    hover:{
        scale: 1.3,
        originX: 0,
        transition:{
            type:"spring",
            stiffness:300
        }
    }
}



export default function Toppings(params) {

    let url = window.location.href;
    const UrlParams = new URL(url)
    const currentBase = UrlParams.searchParams.get('base') 
    const [toppings, setToppings] = useState([]);
    const [isActive, setisActive] = useState(false)

    function addtoppings(e) {
        e.preventDefault();

        // make active
        setisActive(!isActive)
        // e.target.className = styles.active
        
        e.target.classList.contains(styles.active)?e.target.classList.add(styles.Notactive):e.target.classList.add(styles.active)
    

        let newToppings = [...toppings]
        
        if (newToppings.includes(e.target.innerHTML)) {
            alert("choose a different topping")
           
        }else if(toppings.length >= 3){
            alert("maximum toppings reached ")
           

        }else{
            newToppings.push(e.target.innerHTML) 
            
             
            console.log(e.target.classList);
        }
    
        setToppings(newToppings)
        
    }

    return(
        <>
        {
          !BaseData.includes(currentBase)?
          <ErrorPage/>:
           <motion.main className={styles.toppingsContainer}

                variants={toppingsContainerVariant}
                initial={"from"}
                animate={"to"}
           >
           <h1>Step: 2 Choose Toppings</h1>
            <ul>
               {ToppingsData.map(topping => (
                   
                   <motion.li onClick={addtoppings} key={uuidv4()}
                        variants={ToppingsListVariant}
                        
                        whileHover={'hover'}
                   >
                    {topping}</motion.li>
               ))}
            </ul>

            
           {toppings.length !== 0 && 
           
           <motion.button 
            initial={{x: '-100vw'}}
            animate={{x: 0}}
            whileHover={{scale:1.1, textShadow:"0px 0px,8px rgb(128, 0, 128)", boxShadow:"0px 0px,8px rgb(18, 8, 128)"}}
            transition={{type: 'spring', stiffness:120}}
           >
               <Link className="" to={`/order?base=${currentBase}&toppings=[${toppings}]`}>
                   Order
               </Link>
           </motion.button>}
           
        </motion.main>
        }
        </>
    )
};
