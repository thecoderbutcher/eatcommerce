import { BrowserRouter} from "react-router-dom"
import { LangProvider } from "./lib/context/LangContext"
import AppRoutes from "./lib/routes/AppRoutes"
import Layout from "./layout"
function App() { 

  return (
    <LangProvider> 
      <BrowserRouter>
        <Layout>
          <AppRoutes />
        </Layout>
      </BrowserRouter>
    </LangProvider>  
  )
}

export default App
