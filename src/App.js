import "./App.css";
import QuestionSection from "./components/QuestionSection";
import Header from "./components/Header";
import SectionTitle from "./components/SectionTitle";

function App() {
  return (
    <div className="lg:container lg:mx-auto lg:px-8 font-body">
      <div className="flex flex-col text-center text-white py-12">
        {/* top side */}
        <Header headerData={"CYBERPUNK THEMED QUIZZ"} />
        <SectionTitle sectionTitleData={"CAMERA 11: BACK ENTRANCE"}/>
      </div>
      {/* main menu */}
      <div className="grid grid-cols-2">
        {/* Quick Hacks menu */}
        <QuestionSection />
      </div>
    </div>
  );
}

export default App;
