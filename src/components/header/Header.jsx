import { useState } from "react";
import LOGO from "../../assets/logo.png";


const Header = () => {

    const [show, setShow] = useState(false)

    const scrollToFooter = () => {
        document.getElementById('Footer').scrollIntoView({ behavior: 'smooth' })
    }

    return (
        <div className="h-[100px] w-full px-4 py-2 lg:px-15 flex items-center justify-between bg-white fixed top-0 z-40">
            <img className="h-[90px] w-[120px]" src={LOGO} alt="logo" />

            <p className="text-lg lg:text-[2vw] font-mono">A.R. Marble Laying & Polishing</p>

            <button className="hidden lg:block py-2 px-4 bg-amber-700 text-white cursor-pointer" onClick={scrollToFooter}>
                Find Us Here
            </button>

        </div>
    )
}

export default Header