import './App.scss';
import Content from './components/Profile/Content.js';
import Header from  './components/Header/Header.js';
import SideBar from './components/SideBar/SideBar.js';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
// import {dialogsData, messagesData} from "./index";
function App(props) {
    //

  return (

      <BrowserRouter>
  <div className="wrapper">

    <Header/>
    <SideBar/>
      <div className="wrapper_content">
          <Routes>
              <Route path="/profile" element={<Content  postsMap={props.postsMap} />}/>
              <Route path="/dialogs/*" element={<Dialogs dialogsData={props.dialogsData} messagesData={props.messagesData}/>}/>
              <Route path="/news" element={<div>news</div>}/>
              <Route path="/music" element={<div>music</div>}/>
          </Routes>
  </div>
</div>
      </BrowserRouter>
  );
}



export default App;
