import { Header } from "./components/Header/Header"
import { AllNotifications } from "./containers/AllNotifications/AllNotifications"

function App() {
  return (
    <div className="py-4 px-3 max-w-lg mx-auto flex flex-col gap-4 rounded-md bg-white ">
      <Header />
      <AllNotifications />
    </div>
  )
}

export default App
