import 'antd/dist/antd.css'; 
import './App.scss';
import TopNav from './modules/TopNav/TopNav';
import Footer from './modules/Footer/Footer';
import Main from './modules/Main/Main';

function App() {
  return (
    <div className="App">
      <TopNav />
      <Main />
      <Footer />
    </div>
  );
}

export default App;
