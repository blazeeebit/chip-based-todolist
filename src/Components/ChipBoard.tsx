import Chip from './Chip'
import { useChips } from './Context/chipContext'
import { AnimatePresence } from 'framer-motion'
import Motion from './Animations/Motion'

const ChipBoard = () => {
  const { chips, setChips } = useChips()

  const handleRemoveChips = (id: number) => {
    setChips([...chips.slice(0, id), ...chips.slice(id + 1)])
  }

  return (
    <AnimatePresence mode='wait'>
      <div className="max-w-[600px] rounded-md shadow-lg p-10 bg-[#bb99ff] flex flex-row flex-wrap gap-3">
        {!chips.length ? (
          <span className="text-white font-bold">No Tasks Added</span>
        ) : (
          chips.map((chip, key) => (
            <Motion animation="fadeIn" unique={key} key={key}>
              <Chip label={chip} onDelete={() => handleRemoveChips(key)} />
            </Motion>
          ))
        )}
      </div>
    </AnimatePresence>
  )
}

export default ChipBoard
