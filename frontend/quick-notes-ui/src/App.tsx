import './App.scss';
import { Outlet } from 'react-router';
import SideNavBar from './Components/SideNavBar/SideNavBar';

function App() {
  return (
    <div className="App">
      <SideNavBar />
      <Outlet />
    </div>
  );
}

export default App;
