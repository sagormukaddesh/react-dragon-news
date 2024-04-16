import { useLoaderData } from "react-router-dom";
import Header from "../../shared/Header/Header";
import LeftSideNav from "../../shared/LeftSideNav/LeftSideNav";
import Navbar from "../../shared/Navbar/Navbar";
import RightSideNav from "../../shared/RightSideNav/RightSideNav";
import BreakingNews from "../BreakingNews/BreakingNews";
import NewsCard from "../../Providers/NewsCard/NewsCard";

const Home = () => {

    const news = useLoaderData()
    console.log(news);

    return (
        <div>
            <Header></Header>
            <BreakingNews></BreakingNews>
            <Navbar></Navbar>

            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 my-10 ">
                <div className="bg-stone-300 rounded-xl shadow-lg p-4">
                    <LeftSideNav></LeftSideNav>
                </div>

                <div className="col-span-2 bg-slate-300 rounded-xl shadow-lg p-4">
                    {
                        news.map(aNews => <NewsCard
                        key={aNews.id}
                        news={aNews}
                        ></NewsCard>)
                    }

                </div>

                <div className="bg-slate-300 rounded-xl shadow-lg p-4">
                    <RightSideNav></RightSideNav>
                </div>
            </div>


        </div>
    );
};

export default Home;