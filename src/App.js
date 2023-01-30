import { Link } from "react-router-dom";
function App() {
  return (
    <div className="flex h-screen w-full justify-center items-center">
      <div className="flex flex-col md:w-2/5 w-full m-5 md:m-0 h-3/5 card-back p-9 rounded-md items-center shadow-inner shadow-lg ">
        <h1 className="text-white text-center md:text-4xl text-xl">
          Yazı Tura Uygulaması
        </h1>
        <div className="mt-20">
          <Link to="/multiplayer" className="buttons">İki Kişi</Link>
          <Link to="/computer" className="buttons ml-5">Bilgisayara Karşı</Link>
        </div>
      </div>
    </div>
  );
}

export default App;
