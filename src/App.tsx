import { Route, Routes } from 'react-router-dom';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Home from '@/pages/home/Home';
import Result from '@/pages/result/Result';

const queryClient = new QueryClient();

function App() {
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/result/:countryName" element={<Result />} />
        </Routes>
      </QueryClientProvider>
    </>
  );
}

export default App;
