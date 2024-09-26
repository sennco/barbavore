import Header from "./components/header/Header";
import Footerr from "./components/footer/Footerr";
//import Agenda from "./components/social/Agenda";
import AssinaturaClr from "./components/social/AssinaturaClr";
import AssinaturaJdc from "./components/social/AssinaturaJdc";
import WhatsappClr from "./components/social/WhatsappClr";
import WhatsappJdc from "./components/social/WhatsappJdc";

<link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet"></link>

function App() {
  return (
      <div className="flex flex-col align-middle h-screen bg-background bg-cover" >
      <Header />
      <AssinaturaClr/>
      <WhatsappClr/>
      <AssinaturaJdc/>
      <WhatsappJdc/>
      <Footerr/>
      </div>
  );
}

export default App;
