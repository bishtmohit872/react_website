import { KEY_POINTS } from "../utils/Constant"

const Section1 = () => {
    const scrollToSection3=()=>{
        document.getElementById('Section3').scrollIntoView({behavior:'smooth'})
    }
    return (
        <div className="h-max w-full px-4 flex flex-col md:flex-row md:items-center items-center justify-center">
            <div className="lg:h-[600px] lg:w-[1000px] lg:px-20 flex flex-col justify-center mt-4 mr-2 h-max w-full">
                <p className="text-5xl lg:text-6xl lg:font-semibold font-serif"> Expertly Designed for Lasting Shine </p>
                <p className="mt-8 font-sans text-justify"> Whether you're looking to restore the lost shine of your marble or need premium polishing solutions for new flooring, we provide top-notch services tailored to your needs. We focus on perfection so you can enjoy the beauty of your space without any worries. Our expert team uses the latest techniques and high-quality materials to breathe new life into marble and stone surfaces. </p>
                <button className="mt-6 h-[50px] w-[200px] px-4 py-2 bg-amber-700 text-white cursor-pointer hover:bg-amber-600" onClick={scrollToSection3}>
                    Know More...
                </button>
            </div>

            <ul className="flex flex-col items-center xl:h-[600px] w-full lg:mt-4 mt-8 py-4 px-2 lg:flex-wrap lg:justify-evenly xl:justify-around ">
                {
                    KEY_POINTS.map((option, index) => (
                        <div key={index} className="h-[140px] w-[420px] xl:h-[120px] xl:w-[22vw] flex flex-wrap items-center justify-center xl:justify-center mb-2 md:mb-2 md:py-2 bg-[#EFE8E3]">
                            <img src={option[1]} className="h-[60px] w-[60px] xl:h-[50px] xl:w-[50px]"></img>
                            <li className="m-2 lg:text-md font-semibold xl:text-lg">{option[0]}</li>
                        </div>
                    ))
                }
            </ul>

        </div>
    )
}

export default Section1