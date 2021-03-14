import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from '../contexts/CountdownContext';
import styles from '../styles/components/ChallengeBox.module.css';

export function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountdown } = useContext(CountdownContext);

    function handleChallengesSucceeded() {
        completeChallenge();
        resetCountdown();
    }

    function handleChallengesFailed() {
        resetChallenge();
        resetCountdown();
    }



    return (
        <div className={styles.challengeBoxContainer}>
           { activeChallenge ? (
               <div className={styles.challengeActive}>
                   <header>Ganhe {activeChallenge.amount}</header>

                   <main>
                       <img src={`icons/${activeChallenge.type}.svg`} />
                       <strong>Novo desafio</strong>
                       <p>{activeChallenge.description}</p>
                   </main>

                   <footer>
                       <button 
                       type="button"
                       className={styles.challengeFailedButton}
                       onClick={handleChallengesFailed}
                       >
                           Falhei
                        </button>
                        <button 
                       type="button"
                       className={styles.challengeSucceededButton}
                       onClick={handleChallengesSucceeded}
                       >
                           Completei
                        </button>
                   </footer>
               </div>
           ) : (
            <div className={styles.challengeNotActive}>
                <strong>Complete um cilo para receber um desafio</strong>
                <p>
                    <img src="icons/level-up.svg" alt="Level Up" />
                    Evolua de level finalizando desafios.
                </p>
            </div>
           )}
            
        </div>
    )
}