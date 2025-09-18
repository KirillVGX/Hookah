import styles from './main.module.css'
import Instruction from './instruction/Instruction'
import HowWorks from './HowWorks/HowWorks'
import Gets from './Gets/Gets'
import Covid from './Covid/Covid'
import Reason from './Reason/Reason'

export default function Main() {
    return (
        <main className={styles.main}>
            <Instruction /> 
            <HowWorks />
            <Gets />
            <Covid />
            <Reason />
        </main>    
    )
}