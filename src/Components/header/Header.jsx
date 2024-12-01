import logo from "../../assets/file.png";
import style from "./header.module.css";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../store";
import { useContext } from "react";
function Header() {
     const{getUserNotes} =  useContext(ContextProvider)
  function handleNotesData(){
    console.log('hello')
    getUserNotes()
  }
  return (
    <header class="p-3 text-bg-dark">
      <div class="container">
        <div class="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <a
            href="/"
            class="d-flex align-items-center mb-2 mb-lg-0 text-white text-decoration-none"
          >
            <Link to="/">
              <img src={logo} alt="logo" className={style.img} />
            </Link>
          </a>

          <ul
            class={`nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0   ${style.navbar}`}
          >
            <li>
              <Link to="/" class="nav-link px-2 text-secondary">
                Home
              </Link>
            </li>
            <li>
              <Link to="/notes" class="nav-link px-2 text-white" onClick={handleNotesData}>
                Notes
              </Link>
            </li>
          </ul>
             <div class={style.title}>
              <h3>News Reader</h3>
             </div>
          <div class="text-end">
            <Link to='/login'>
            <button type="button" class="btn btn-outline-light me-2">
              Login
            </button>
            </Link>
            <Link to='/signup'> 
            <button type="button" class="btn btn-warning">
              Sign-up
            </button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}

export default Header;
