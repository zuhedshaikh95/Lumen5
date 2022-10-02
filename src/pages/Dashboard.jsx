import Masthead from "../components/Masthead"
import VideoTemplates from "../components/VideoTemplates";
import SignUpCard from "../components/SignUpCard";
import Features from "../components/Features";

export default function Dashboard(){
    return(
        <>
            <Masthead />
            <Features />
            <VideoTemplates />
            <SignUpCard />
        </>
    )
}