/* eslint-disable react/jsx-no-target-blank */
import { useHistory } from 'react-router-dom'
import illustrationImg from '../assets/images/illustration.gif'
import logoImg from '../assets/images/logo.png'
import googleIconImg from '../assets/images/google-icon.svg'
import '../styles/auth.scss'
import { Button } from '../components/Button'
import { useAuth } from '../hooks/useAuth'
import { auth } from '../services/firebase'

interface SubscribeButtonProps{
  priceId: string;
}


export function Home({ priceId }: SubscribeButtonProps) {
  const history = useHistory();
  const { user, signInWithGogle } = useAuth()

  async function handleCreateRoom() {
    if(!user) {
      await signInWithGogle()
    }
    history.push('/home')
    if(auth.currentUser?.uid === process.env.REACT_APP_ADMIN){
      history.push('admin/home')
    }
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
        <img src={logoImg} alt="Pet Food Publications"/>
        <button onClick={handleCreateRoom} className="create-room">
        <img src={googleIconImg} alt="Logo do Google"/>
          Entrar com o Google
        </button>
        <div className="separator">Acumule mensalmente</div>
          <Button>
          <a href="https://buy.stripe.com/test_dR600w5VA3wd2lObII" target="_blank">Participar</a>
          </Button>
      </div>
      </main>
    </div>
  )
}
