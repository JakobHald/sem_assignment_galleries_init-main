import DevAssignmentsNavBtn from "./devAssignmentsNavBtn/devAssignmentsNavBtn";
import styles from "./devAssignmentsNavigation.module.css"

const DevAssignmentsNavigation = () => {
    return (
        <div className={styles.navigation}>
            <div className={styles.header}>
                <h3>Assignments</h3>
            </div>
            <div className={styles.links}>
                <DevAssignmentsNavBtn link={'/assignments'} title={'Assignments'}></DevAssignmentsNavBtn>
                <DevAssignmentsNavBtn link={'/assignments/icons'} title={'Icons'}></DevAssignmentsNavBtn>
                <DevAssignmentsNavBtn link={'/assignments/data'} title={'Data'}></DevAssignmentsNavBtn>
                <DevAssignmentsNavBtn link={'/assignments/data/authors'} title={'Authors'}></DevAssignmentsNavBtn>
                <DevAssignmentsNavBtn link={'/assignments/data/images'} title={'Images'}></DevAssignmentsNavBtn>
            </div>
        </div>
    )
}

export default DevAssignmentsNavigation;