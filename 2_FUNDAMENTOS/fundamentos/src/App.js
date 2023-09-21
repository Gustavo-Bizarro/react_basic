//components
import FirstComponent from './components/FirstComponent';
import SecondComponent from './components/SecondComponent';
import ThirdComponent from './components/ThirdComponent';
import TemplateExpress from './components/TemplateExpress';
import MyComponent from './components/MyComponent';
import Events from './components/Events';
import Challenge from './components/Challenge';

//style css
import './App.css';



function App() {
  return (
    <div className="App">
<h1>Fundamentos React</h1>
    <FirstComponent/>
    <SecondComponent/>
    <ThirdComponent/>
    <TemplateExpress/>
    <MyComponent/>
    <Events/>
    <Challenge/>
    </div>
  );
}

export default App;
