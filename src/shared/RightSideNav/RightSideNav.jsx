import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram, } from "react-icons/fa";
import qZoon1 from '../../assets/qZone1.png'
import qZoon2 from '../../assets/qZone2.png'
import qZoon3 from '../../assets/qZone3.png'


const RightSideNav = () => {
    return (
        <div className="">
            <div className=" mb-6"> <h2 className="text-3xl font-bold">Login with</h2>
                <button className="btn btn-outline w-5/6 mx-auto justify-center flex my-2 ">
                    <FaGoogle></FaGoogle> Google
                </button>
                <button className="btn btn-outline w-5/6 mx-auto justify-center flex  ">
                    <FaGithub></FaGithub> Github
                </button>
            </div>
           
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold">Find Us On</h2>

                <a className="flex p-4 items-center gap-2 font-bold text-xl border border-blue-600 rounded-t-xl" href="">
                    <FaFacebook></FaFacebook> Facebook
                </a>
                <a className="flex p-4 items-center gap-2 font-bold text-xl border-x border-blue-600 " href="">
                    <FaTwitter></FaTwitter> Twitter
                </a>
                <a className="flex p-4 items-center gap-2 font-bold text-xl border border-blue-600 rounded-b-xl" href="">
                    <FaInstagram></FaInstagram> Facebook
                </a>

            </div>

            {/* q zoon  */}
            <div className="p-4 mb-6">
                <h2 className="text-3xl font-bold">Q Zoon</h2>
                <img src={qZoon1} alt="" />
                <img src={qZoon2} alt="" />
                <img src={qZoon3} alt="" />

            </div>

        </div>
    );
};

export default RightSideNav;