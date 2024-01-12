'use client';
import { useState } from "react";
import styles from "./devDebugJson.module.css"
import {
    FaChevronUp,
    FaChevronDown
} from "react-icons/fa";


const DevDebugJson = ({ content }) => {

    const [active, setActive] = useState(false)

    let icon = active ? <FaChevronUp /> : <FaChevronDown />

    let style = active ? styles.active : '';

    return <div className={`${styles.container} ${style}`}>
        <div className={styles.handle} onClick={() => setActive(!active)}>
            {icon} Print Json
        </div>
        <pre className={styles.content}>
            {JSON.stringify(content, null, 2)}
        </pre>
    </div>
}

export default DevDebugJson;