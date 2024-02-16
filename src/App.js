import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/Main';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Favourite from './components/Favourite';
import FooterPlayer from './components/FooterPlayer';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/Your-Library" element={<Favourite />} />
        <Route path="/" element={<FooterPlayer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
