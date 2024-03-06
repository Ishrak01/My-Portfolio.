import Contact from "./Contact/page";
import Footer from "./Footer/page";
import Projects from "./Projects/page";
import Service from "./Service/page";
import Skill from "./Skill/page";
import Homepage from "./components/Homepage";


export default function Home() {
  return (
   <div className="mx-auto h-screen bg-[#111A28]">
    <div><Homepage/></div>
    <div><Projects/></div>
    <div><Skill/></div>
    <div><Service/></div>
    <div><Contact/></div>
    <div><Footer/></div>
    
   
   </div>
  );
}
