'use client'
import { ImAccessibility, ImAidKit, ImAmazon, ImAngry, ImAppleinc, ImBasecamp, ImBoxAdd, ImChrome, ImEarth, ImOmega} from "react-icons/im";
import styles from './devIcons.module.css'
import { useState } from "react";
import DevActionbar from "../actionbar/devActionBar";


const DevIcons = () => {

    const [size, setSize] = useState(150);

    const [color, setColor] = useState("#000000")
    
    let style = {width: `${size}px`, height:`${size}px`, color: color}

    let config = {
        small: 50,
        medium: 100,
        max: 150
    }


    return (
        <div className={styles.container}>

            <DevActionbar setSizeFunction={setSize} setColor={setColor} size={size} config={config}></DevActionbar>
            
            <div className={styles.icons}>
                <ImAccessibility style={style}/>
                <ImAidKit style={style}/>
                <ImAmazon style={style}/>
                <ImAngry style={style}/>
                <ImAppleinc style={style}/>
                <ImBasecamp style={style}/>
                <ImChrome style={style}/>
                <ImBoxAdd style={style}/>
                <ImEarth style={style}/>
                <ImOmega style={style}/>
            </div>

        </div>
    )
}

export default DevIcons;