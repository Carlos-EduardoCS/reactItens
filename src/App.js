
import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';
import List from './components/List';

function App() {

  const nome = "Clara"

  return (
    <div className='App'>

      <Frase/>
      <Frase/>

      <SayMyName nome={nome} />

      <Pessoa 
      nome="Clara" 
      idade="20 anos" 
      profissao="Modelo"
      foto= "https://via.placeholder.com/150" 
      />

      <List/>

    </div>
  );
}


export default App;
