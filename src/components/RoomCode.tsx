// import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'
import { auth } from '../services/firebase'
import { useHistory } from 'react-router-dom'



export function RoomCode() {
  const history = useHistory()
  // function copyRoomCodeToClipboard() {
  //   navigator.clipboard.writeText('texto para copiar')
  // }
  async function LogOut(){
    if(auth) {
      await auth.signOut()
      history.push('/')
      console.log('Usuário desconectado.')
    }
  }

  return(
    //onClick={copyRoomCodeToClipboard}
    <>
    <div>
    {/* <button className="room-code">
      <div>
        <img src={copyImg} alt="Copy room code" />
      </div>
      <a href="https://api.whatsapp.com/send?phone=+55818453-3418&text=I%27m%20interested%20in%20your%20services">Tirar Dúvidas</a>
    </button>
    <br /> */}
    <button className="room-code" onClick={LogOut}><p>Sair</p></button>
    </div>
    </>
  )
}