import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Home, Destination, Crew, Technology, Error } from './pages';
import Navbar from './Components/Navbar';
import Sidebar from './Components/Sidebar';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Sidebar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/destination" element={<Destination />} />
        <Route exact path="/crew" element={<Crew />} />
        <Route exact path="/technology" element={<Technology />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
    </Router>
  );
};
export default App;
