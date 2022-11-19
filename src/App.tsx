import ChipBoard from "./Components/ChipBoard"
import Input from "./Components/Input"

const App = () => {
 return (
  <div className="flex flex-col justify-center gap-10 items-center h-screen bg-gradient-to-r from-[#9966ff] to-[#aa80ff]">
    <h2 className="text-4xl text-white font-bold">Chip Based To Do List</h2>
    <Input />
    <ChipBoard/>
  </div>
 )
}

export default App
