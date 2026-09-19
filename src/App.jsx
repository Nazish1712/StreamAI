import { Provider } from "react-redux"
import Body from "./components/Body"
import Head from "./components/Head"
import store from "./utils/store"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import MainContainer from "./components/MainContainer"
import WatchPage from "./components/WatchPage"
import SavedVideosPage from "./components/SavedVideosPage"

const appRouter = createBrowserRouter([
  {
    path: "/",
    element:( 
      <>
       <Head/>
       <Body/>
      </>
    ),
    children:[
      {
        path: "/",
        element:<MainContainer/>
      },
      {
        path: "watch",
        element: <WatchPage/>
      },
      {
      path: "saved",
      element: <SavedVideosPage/>
      }
    ]
  }
])

function App() {
  return (
    <Provider store={store}>
    <div className="pb-2 px-2">
    <RouterProvider router={appRouter}/>
    </div>
    </Provider>
  )
}

export default App
