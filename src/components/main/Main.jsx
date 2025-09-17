import styles from './main.module.css'
import Instruction from './instruction/Instruction'
import HowWorks from './HowWorks/HowWorks'

export default function Main() {
    return (
        <main className={styles.main}>
            <Instruction /> 
            <HowWorks />
        </main>
        
    )
}