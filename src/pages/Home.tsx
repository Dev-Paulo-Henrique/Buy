import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.gif'
import logoImg from '../assets/images/logo.svg'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'

export function Home() {
  const history = useHistory();
  const { user, signInWithGogle } = useAuth()

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGogle()
    }
    history.push('/rooms')
    //window.location.assign('MapView.html')
  }
  async function participate(){
    if(!user) {
      await signInWithGogle()
    }
    alert('calma')//colocar stripe
  }

  return (
    <div id="page-auth">
      <aside>
        <img src={illustrationImg} alt="Ilustração simbolizando perguntas e respostas"/>
        <p>👏 Hey, Bem-vindo(a) ao</p>
        <strong>Pet Food Publications</strong>
      </aside>
      <main>
      <div className="main-content">
        <img src={logoImg} alt="Letmeask"/>
        <button onClick={handleCreateRoom} className="create-room">
        <img src={googleIconImg} alt="Logo do Google"/>
          Entrar com o Google
        </button>
        <div className="separator">Acumule mensalmente</div>
          <Button type="submit" onClick={participate}>
            Participar
          </Button>
      </div>
      </main>
    </div>
  )
}