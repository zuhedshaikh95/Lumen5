import Masthead from "../components/Masthead";
import VideoTemplates from "../components/VideoTemplates";
import SignUpCard from "../components/SignUpCard";
import Features from "../components/Features";
import Navbar from "../components/Navbar";

export default function Dashboard() {
  return (
    <>
      <Navbar />
      <Masthead />
      <Features />
      <VideoTemplates />
      <SignUpCard />
    </>
  );
}
