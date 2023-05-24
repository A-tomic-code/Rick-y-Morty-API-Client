import './SearchButton.css'
import {motion} from 'framer-motion'

export const SearchButton = () =>{
  return (
    <motion.button 
            className="btn-search"
            whileTap={{scale: .8}}
          >
            Buscar
          </motion.button>
  )
}