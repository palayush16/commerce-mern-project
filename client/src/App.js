import './App.css'
import { BrowserRouter as Router, Route , withRouter} from "react-router-dom";
import Navbar from "./components/Navbar.js"
import Authpage from "./components/Authpage.js"
import ItemList from "./components/ItemList.js"
import SellForm from "./components/SellForm.js"
import About from "./components/About.js"


function App() {
  return (
    <Router>
      <div className="container">
   
        <Route exact path="/" component={withRouter(Authpage)} />
        <Route path="/item-list" component={withRouter(ItemList)} />
        <Route path="/sell-form" component={withRouter(SellForm)} />
        <Route path="/about" component={withRouter(About)} />

        
      </div>
    </Router>
  );
}

export default App;
