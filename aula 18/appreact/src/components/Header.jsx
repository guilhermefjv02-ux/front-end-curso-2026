// components/Header.jsx
import banner from "../assets/banner.jpg";

function Header() {
    return (
        <header className="header">
            <img
            src= "https://pl.cc/150?u=perfil"
                alt="Foto do perfil"
            
            />
             <div>
             <img src={banner} alt="banner code frontier" />
            </div>
        </header>
    )
}

export default Header