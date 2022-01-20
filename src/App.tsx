import { BrowserRouter,  Route, Switch } from 'react-router-dom'
import { Home } from "./pages/Home"
import { Room } from "./pages/Room"
import { AuthContextProvider } from './contexts/AuthContext'
import { AdminRoom } from "./pages/AdminRoom"
import { Dashboard } from "./components/Dashboard/index"

function App() {
  return (
    <BrowserRouter>
    <AuthContextProvider>
      <Switch>
        <Route path="/" exact component={Home}/>
        <Route path="/home" component={Room}/>
        <Route path="/admin/home" component={AdminRoom}/>
        <Route path="/admin/dashboard" component={Dashboard}/>
      </Switch>
    </AuthContextProvider>
    </BrowserRouter>
  );
}

export default App;
