import { Route, Routes } from 'react-router-dom';
import './App.css';
import AddFormat from './pages/AddFormat/AddFormat/AddFormat';
import BannerAd from './pages/AddFormat/AddFormat/BannerAd/BannerAd';
import Native from './pages/AddFormat/AddFormat/Native/Native';
import PopUnder from './pages/AddFormat/AddFormat/PopUnder/PopUnder';
import Skim from './pages/AddFormat/AddFormat/Skim/Skim';
import Carousal from './pages/Carousal/Carousal';
import Footer from './pages/Footer/Footer';
import Available from './pages/Home/Available/Available';
import Home from './pages/Home/Home/Home';
import Header from './pages/Shared/Header/Header';
import Title from './pages/Title/Title';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Home></Home>
      <Available></Available>
      <AddFormat></AddFormat>
      <Routes>
        <Route path='/advertisers/popunder' element={<PopUnder></PopUnder>}></Route>
        <Route path='/advertisers/banner' element={<BannerAd></BannerAd>}></Route>
        <Route path='/advertisers/native' element={<Native></Native>}></Route>
        <Route path='/advertisers/skim' element={<Skim></Skim>}></Route>
      </Routes>
      <Title></Title>
      <Carousal></Carousal>
      <Footer></Footer>
      
    </div>
  );
}

export default App;
