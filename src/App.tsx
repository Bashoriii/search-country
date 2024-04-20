import { Route, Routes } from 'react-router-dom';
import Home from '@/pages/home/Home';
import Result from '@/pages/result/Result';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/result/:countryName" element={<Result />} />
      </Routes>
    </>
  );
}

export default App;
