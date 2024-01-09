import styles from './devActionBar.module.css'
import { useEffect, useRef } from "react"; 

const DevActionbar = ({setSizeFunction, size, config, setColor}) => {

    const activeSlideRef = useRef(null)

    useEffect(() => {

        let slider = activeSlideRef.current;
        slider.value = size;

    }, [size])


    return (
        <div className={styles.container}>
            <div className={styles.status}><h1>{size}</h1></div>
            <div className={styles.actionBar}>     
                <span className={styles.btn} onClick={() => setSizeFunction(config.small)}>{config.small}</span>
                <span className={styles.btn} onClick={() => setSizeFunction(config.medium)}>{config.medium}</span>
                <span className={styles.btn} onClick={() => setSizeFunction(config.max)}>{config.max}</span>
                <input type="range" ref={activeSlideRef} min="50" max ="150" defaultValue={size} onChange={(e) => setSizeFunction(e.target.value)}></input>
                <input type="color" className={styles.color} onChange={(e) => setColor(e.target.value)}></input>
            </div>
        </div>
    )
}

export default DevActionbar;