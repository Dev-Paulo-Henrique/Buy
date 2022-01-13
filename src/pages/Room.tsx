import { Button } from '../components/Button'
import '../styles/room.scss'
import { RoomCode } from '../components/RoomCode'
import { useState, FormEvent} from 'react'
import { useAuth } from '../hooks/useAuth'
import { database } from '../services/firebase'
import { Question } from '../components/Question'
import { useRoom } from '../hooks/useRoom'

export function Room() {
  const {user, signInWithGogle } = useAuth()
  const [ newQuestion, setNewQuestion ] = useState('')
  const { questions } = useRoom()

  async function SignIn() {
    if(!user) {
      await signInWithGogle()
    }
  }

  async function  handleSendQuestion(event: FormEvent) {
    event.preventDefault()

    if(newQuestion.trim() === '') {
      return 
    }

    if(!user) {
      throw new Error('You must be logged in')
    }
    
    const question = {
      content: newQuestion,
      author: {
        name: user.name,
        avatar: user.avatar
      },
      isHighLighted: false,
      isAnswered: false
    }

    await database.ref(`rooms/questions`).push(question)
    setNewQuestion('')
  }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <p className="logo">Pet Food Publications</p>
          <RoomCode/>
        </div>
      </header>

      <main className="content">
        <div className="room-title">
          <h1>Pedidos</h1>
          { questions.length > 0 &&  <span>{questions.length} pedido(s)</span> }
        </div>
        <form onSubmit={handleSendQuestion}>
          <textarea
          placeholder="O que você quer perguntar?"
          onChange={event => setNewQuestion(event.target.value)}
          value={newQuestion}
          />
          <div className="form-footer">
            { user ? (
              <div className="user-info">
                <img src={user.avatar} alt={user.name} />
                <span>{user.name}</span>
              </div>
            ) : (
              <span>Para enviar um pedido, <button onClick={SignIn}>faça seu login</button>.</span>
            ) }
            <Button type="submit" disabled={!user}>Enviar pergunta</Button>
          </div>
        </form>
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
            </Question>
          )
        })}
        { questions.length === 0 && 
        <div className="room-title">
          <span>Nenhum pedido</span>
          </div>
          }
        </div>
      </main>
    </div>
  );
}