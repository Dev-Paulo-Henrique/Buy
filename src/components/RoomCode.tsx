// import copyImg from '../assets/images/copy.svg'
import '../styles/room-code.scss'


export function RoomCode() {
  // function copyRoomCodeToClipboard() {
  //   navigator.clipboard.writeText('texto para copiar')
  // }

  return(
    //onClick={copyRoomCodeToClipboard}
    <button className="room-code">
      {/* <div>
        <img src={copyImg} alt="Copy room code" />
      </div> */}
      <a href="https://api.whatsapp.com/send?phone=+55818453-3418&text=I%27m%20interested%20in%20your%20services">Iniciar Conversa</a>
    </button>
  )
}