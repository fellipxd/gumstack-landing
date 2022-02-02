
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Company } from './components/company/company';
import { Footer } from './components/footer/footer';
import { Hero } from './components/hero/hero';
import { Integrate } from './components/integrate/Integrate';
import { InTouch } from './components/inTouch/inTouch';
import { Meet } from './components/meet/meet';
import { Schedule } from './components/schedule/schedule';
import { Support } from './components/support/Support';


function App() {
  return (
    <div className="App">
      
      <Hero/>
      <InTouch/>
      <Schedule/>
      <Integrate/>
      <Support/>
      <Company/>
      <Meet/>
      <Footer/>
    </div>
  );
}

export default App;
