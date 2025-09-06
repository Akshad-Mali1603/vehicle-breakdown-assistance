import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import IndexPage from "../LandingPage/Index";

const HomePage=()=>{
    return(
        <div className="min-h-[100vh] bg-mine-shaft-950 font-['poppins']">

            <Header/>
            <IndexPage/>
            <Footer/>
        </div>
    )
}
export default HomePage;