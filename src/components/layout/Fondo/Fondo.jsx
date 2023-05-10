import './Fondo.css'
import bg_video from '../../../assets/background.webm'

export const Fondo = () => {
  return (
    <video className="background" src={bg_video} loop muted autoPlay></video>
  )
}
