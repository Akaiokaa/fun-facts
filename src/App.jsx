import './App.css'
import FunFactCard from './FunFactCard';
import Header from './PageHeader';

function App() {
  return (
    <div>
      <Header name="Brendan and Allen fun facts! 🎉" />
      <FunFactCard fact="Brendan likes baking."/>
      <FunFactCard fact="Allen likes cars."/>
      <FunFactCard fact="Brendan likes working out."/>
      <FunFactCard fact="Allen likes reading."/>
      <FunFactCard fact="Brendan likes the color navy blue."/>
    </div>
  );
}

export default App
