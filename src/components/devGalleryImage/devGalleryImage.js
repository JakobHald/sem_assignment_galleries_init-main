import Image from "next/image";
import DevDebugJson from "../devDebugJson/devDebugJson";
import styles from './devGalleryImage.module.css'

const DevGalleryImage = ({image}) => {
    return (
        <>
            <Image src={image.path} alt={`Portfolio billede taget af ${image.author} udstillet i falleriet ${image.gallery}`} className={styles.image} width={image.width} height={image.height}></Image>

            <DevDebugJson content={image}></DevDebugJson>
        </>
    )
} 

export default DevGalleryImage;