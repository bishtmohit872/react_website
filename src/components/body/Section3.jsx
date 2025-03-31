import { about_img1, about_img2, about_img3 } from "../utils/Constant"

const Section3 = () => {
    return (
        <div id="Section3" className="w-full px-8 text-justify font-sans text-lg flex flex-row items-center justify-center bg-[#696B62]">
            <div className="h-max w-5/6 p-4 flex flex-col items-start">
                <h1 className="w-full mb-4 ml-0 text-[10vw] xl:text-8xl border-b-1 text-white">ABOUT US </h1>

                <div className="flex items-center justify-around flex-col lg:flex-row">
                    <img className="p-2 border-t-1 border-l-1 border-white shadow-lg shadow-gray-800" src={about_img1} />
                    <p className="text-2xl w-full lg:w-[50%] mt-4 lg:mt-0 p-4 bg-gray-200 rounded-lg shadow-lg shadow-gray-800">Established in Delhi in 2006 as a Vinod Kumar Sharma.Marble Contractor and now its well known as "A.R. MARBLE LAYING & POLISHING"</p>
                </div>

                <div className="mt-4 flex items-center justify-around flex-col-reverse lg:flex-row">
                    <p className="text-2xl w-full lg:w-[50%] mt-4 lg:mt-0 p-4 bg-gray-200 rounded-lg shadow-lg shadow-gray-800">
                        "A.R. MARBLE LAYING & POLISHING" is in the marble fixing industry for more than 14 year and has successfully delivered top quality of works to various prestigious and reputed client acrosss india and outside India.
                        Our team focus on all type of stone fixing inlay, CNC Polishing, Restoration and enjoy excellent market reputaiion for the high quality of work.
                    </p>
                    <img className="p-2 border-1 border-white shadow-lg shadow-gray-800" src={about_img2} />
                </div>

                <div className="mt-4 flex items-center justify-around flex-col lg:flex-row">
                    <img className="p-2 border-l-1 border-b-1 border-white shadow-lg shadow-gray-800" src={about_img3} />
                    <p className="text-2xl w-full lg:w-[50%] mt-4 lg:mt-0 p-4 bg-gray-200 rounded-lg shadow-lg shadow-gray-800">
                        The stone fixing work was taken up by the interior & exterios stone work to its clients "A.R. MARBLE LAYING & POLISHING"  has the expertise of working in different segments with a vast experience ranging from Residential, Commercial Projects , Retail and Farmhouses.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Section3