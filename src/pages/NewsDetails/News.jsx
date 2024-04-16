import { useParams } from "react-router-dom";
import Header from "../../shared/Header/Header";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";

const News = () => {
    const { id } = useParams();
    return (
        <div>
            <Header></Header>
            <Navbar></Navbar>
            <div className="grid grid-cols-1 md:grid-cols-4">
                <div className="col-span-3">
                    <h2 className="text-3xl">News Details</h2>
                </div>
                <div>
                    <RightSideNav></RightSideNav>
                </div>
            </div>

        </div>
    );
};

export default News;