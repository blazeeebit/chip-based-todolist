import React from "react"
import { useChips } from "./Context/chipContext"

const Input = () => {

  const {
    setChips
  } = useChips()

  const [isTask, setIsTask] = React.useState<string>('')
  const [isError, setIsError] = React.useState<string>('')

  const handleTaskInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsTask(e.target.value)
    setIsError('')
  }

  const handleAddTask = () => {
    if(!isTask) {
      setIsError("No Task Entered")
    }else{
      setChips((prevState: string[]) => [...prevState, isTask])
      setIsTask('')
      setIsError('')
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      <div className="bg-white overflow-hidden rounded-full flex flex-row items-center shadow-lg">
        <input placeholder="Enter your task here" onChange={handleTaskInput} value={isTask} type="text" className="outline-none text-2xl border-none px-5 py-3" />
        <button onClick={handleAddTask} className="rounded-l-full h-full px-10 text-white font-bold bg-[#cc66ff] shadow-md">
          Add
        </button>
    </div>
    <p className="text-blue-600 font-bold">{isError}</p>
    </div>
  )
}

export default Input