import Chat from "./components/Chat/Chat";
import Auth from "./components/Auth/Auth";
import Register from "./components/Register/Register";
import { Route } from "react-router-dom";
import AuthNew from './components/Auth/Auth';
import './index.css';

const App = () => {
  return (
    <div className="App">
      {false && <Route path="/auth" component={Auth}/>}
      <Route path="/auth" component={AuthNew}/>
      <Route path="/register" component={Register}/>
      <Route  path="/" component={Chat}/>
    </div> 
  );
}
export default App;

