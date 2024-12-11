import quizCompleted from '../assets/quiz-complete.png';
import QUESTIONS from '../questions.js'

export default function Summary({ userAnswers }) {

    const skippedAnswers = userAnswers.filter(answer => answer ===  null);

    const correctAnswers = userAnswers. filter((answer, index) => answer === QUESTIONS[index].answers[0]);

    const skippedAnswersShared = Math.round((skippedAnswers.length / userAnswers.length) * 100);

    const correctAnswersShared = Math.round((correctAnswers.length / userAnswers.length) * 100);

    const wrongAnswersShared = 100 - skippedAnswersShared - correctAnswersShared;

    return <div id="summary">
        <img src={quizCompleted} alt="Trophy Icon" />
        <h2>Quiz Completed!</h2>
        <div id="summary-stats">
            <p>
                <span className='number'>{ skippedAnswersShared }%</span>
                <span className='text'>Skipped</span>
            </p>
            <p>
                <span className='number'>{ correctAnswersShared }%</span>
                <span className='text'>Answered Correctly</span>
            </p>
            <p>
                <span className='number'>{ wrongAnswersShared }%</span>
                <span className='text'>Answered Incorrectly</span>
            </p>
        </div>
        <ol>
            {
                userAnswers.map((answer, index) => {

                    let cssClass = "user-answer";

                    if (answer === null) {
                        cssClass += " skipped";
                    } else if (answer === QUESTIONS[index].answers[0]) {
                        cssClass += " correct";
                    } else {
                        cssClass += " wrong";
                    }

                    return (
                        <li key={ index }>
                            <h2>{ index + 1 }</h2>
                            <p className='question'>{ QUESTIONS[index].text }</p>
                            <p className={ cssClass }>{ answer ?? "Skipped" }</p>
                        </li>
                    )
                })
            }

        </ol>
    </div>
}