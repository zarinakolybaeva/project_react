import logo from '../../assets/logos/logo192.png'
import './Header.scss'
function Header(){
    return (
      
        <header className="Header">
        <img src={logo} alt="logo" width="70" height="50"/>
        </header>
     
    )
  }

  export default Header;