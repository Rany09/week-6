
import './App.css';
import UserProfile from './components/UserProfile';
import Navbar from './components/Navbar';
import logoImg from './logo.jpg';
import Blogpost from './components/BlogPost'
function App() {
  return (
    <div className="App">
      <Navbar userName={"Randeep"} logo={logoImg} />
      <Blogpost author="Randeep" title="Randeep" date="25 Sep" children="Son" image="https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg"/>
      <UserProfile />
    </div>
  );
}

export default App;
