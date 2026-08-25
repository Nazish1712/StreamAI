import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"

function App() {
  return (
    <Provider store={store}>
    <div className="py-2 px-2">
    <Head/>
    <Body/>
    </div>
    </Provider>
  )
}

export default App
