import './App.scss';
import Content from './components/Profile/Content.js';
import Header from  './components/Header/Header.js';
import SideBar from './components/SideBar/SideBar.js';
import Dialogs from './components/Dialogs/Dialogs.jsx';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Friends from "./components/Friends/Friends";
// import {dialogsData, messagesData} from "./index";
function App(props) {
    //

  return (

      <BrowserRouter>
  <div className="wrapper">

    <Header/>
    <SideBar state={props.state.SidePage} />
      <div className="wrapper_content">
          <Routes>
              <Route path="/profile" element={<Content  ProfilePage={props.state.ProfilePage}
                                                        addPost={props.addPost}
                                                        updateText={props.updateText}/>}/>
              <Route path="/dialogs/*" element={<Dialogs DialogsPage={props.state.DialogsPage}
                                                         newWord={props.state.DialogsPage.newWord}
                                                          addMessage={props.addMessage}
                                                          updateMessageText={props.updateMessageText}/>}/>
              <Route path="/news" element={<div>news</div>}/>
              <Route path="/music" element={<div>music</div>}/>
              <Route path="/friends" element={<div>{<Friends/>}</div>}/>
          </Routes>
  </div>
</div>
      </BrowserRouter>
  );
}



export default App;
