import './App.scss';
import Content from './components/Profile/Content.js';
import Header from  './components/Header/Header.js';
import SideBar from './components/SideBar/SideBar.js';

function App() {
  return (
  <div className="wrapper">
    <Header/>
    <SideBar/>
    <Content/>
</div>

  );
}



export default App;
