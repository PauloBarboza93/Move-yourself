import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile() {
    const { level } = useContext(ChallengesContext);

    return (
        <div className={styles.profileContainer}>
            <img src="https://media-exp1.licdn.com/dms/image/C4D03AQHTvX61uVvCAQ/profile-displayphoto-shrink_800_800/0/1613954553415?e=1619654400&v=beta&t=D7MDCoZic9ywIQY8xeUe59RJKi8MAaj4o6qFxRurD64" alt="Paulo de Tarso" />
            <div>
                <strong>Paulo de Tarso</strong>
                <p>
                    <img src="icons/level.svg" alt="Level" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}