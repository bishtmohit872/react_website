import { address_img } from "../utils/Constant"
const Footer = () => {
    return (
        <div id="Footer" className="h-max w-full py-10 flex flex-col-reverse items-center lg:flex-row justify-around">
            <div className="h-[450px] w-[500px] flex flex-col items-center lg:items-start font-mono">
                <p className="text-[6vw] lg:text-6xl">📍Our Location</p>
                <ul className="mx-2 mt-4 text-2xl lg:text-3xl">
                    <li className="bg-gray-200 p-2 mt-2 rounded-xl">
                        Building No - 293<br/>
                        Ward No. 4, Mehrauli<br/>
                        New Delhi - 110030
                    </li>
                    <li className="bg-gray-200 p-2 mt-2 rounded-xl">Mobile : 9899470351 , 851424308</li>
                    <li className="bg-gray-200 p-2 mt-2 rounded-xl">Email : vinodkbs1@gmail.com</li>
                </ul>
            </div>

            <div>
                <img src={address_img} className="h-[500px] w-[500px]"></img>
            </div>
        </div>
    )
}

export default Footer