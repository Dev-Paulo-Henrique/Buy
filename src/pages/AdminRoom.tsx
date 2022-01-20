import deleteImg from '../assets/images/delete.svg'
import checkImg from '../assets/images/check.svg'
import answerImg from '../assets/images/answer.svg'
// import { Button } from '../components/Button'
import '../styles/room.scss'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'
import { database } from '../services/firebase'
import { Dashboard } from "../components/Dashboard/index"

export function AdminRoom() {
  const { questions } = useRoom()

  //  function Users() {
  //   //Nothing
  // }

  async function handleDeleteQuestion(questionId: string) {
    if(window.confirm('Tem certeza que deseja excluir esta pergunta?')) {
      await database.ref(`rooms/questions/${questionId}`).remove()
    }
  }

  async function handleCheckQuestionAsAnswered(questionId: string) {
    await database.ref(`rooms/questions/${questionId}`).update({
      isAnswered: true
    })
  }

  async function handleHighLigthQuestion(questionId: string) {
    await database.ref(`rooms/questions/${questionId}`).update({
      isHighLighted: true
    })
  }
  
  return (
    <div id="page-room">
      <header>
        <div className="content">
          <p className="logo">Pet Food Publications</p>
          {/* <div>
          <Button isOutline onClick={Users}>Usuários</Button>
          </div> */}
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Pedidos</h1>
          { questions.length > 0 &&  <span>{questions.length} pedido(s)</span> }
        </div>
        <div className="question-list">
        {questions.map(question => {
          return (
            <Question
            key={question.id}
            content={question.content}
            author={question.author}
            isAnswered={question.isAnswered}
            isHighLighted={question.isHighLighted}
            >
             { !question.isAnswered && (
               <>
               { !question.isHighLighted && <button
              type="button"
              onClick={() => handleHighLigthQuestion(question.id)}
              >
                <img src={checkImg} alt="Dar destaque à pergunta"/>
              </button>}
                <button
              type="button"
              onClick={() => handleCheckQuestionAsAnswered(question.id)}
              >
                <img src={answerImg} alt="Marcar pergunta como respondida"/>
              </button>
               </>
             ) }
              <button
              type="button"
              onClick={() => handleDeleteQuestion(question.id)}
              >
                <img src={deleteImg} alt="Remover pergunta"/>
              </button>
            </Question>
          )
        })}
        { questions.length === 0 && 
        <div className="room-title">
          <span>Nenhum pedido</span>
          </div>
          }
          <Dashboard />
        </div>
      </main>
    </div>
  );
}