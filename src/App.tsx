import NavBar from "./module/common/navbar/nav";
import HomePage from "./module/home/page/HomePage";

function App() {
  return (
    <div className="flex flex-col w-full h-full">
      <div className="flex-initial justify-center flex">
        <NavBar />
      </div>
      <div>
        <HomePage />
      </div>
    </div>
  );
}

export default App;
