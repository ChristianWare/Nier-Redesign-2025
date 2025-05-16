import LayoutWrapper from '@/components/shared/LayoutWrapper'
import styles from './Destinations.module.css'

export default function Destinations() {
  return (
    <section className={styles.container}>
        <LayoutWrapper>
            <div className={styles.content}>
                <div className={styles.top}>
                    <h2 className={styles.heading}>
                        Top Destinations <br /> in Arizona
                    </h2>
                </div>
                <div className={styles.bottom}></div>
            </div>
        </LayoutWrapper>
    </section>
  )
}