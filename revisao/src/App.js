import Imagem from './img/airfyer.jpg'
import './App.css';
import ProfileImage from './components/ProfileImage';

function App() {
  return (
    <div className="App">
      <h1> teste </h1>
      <ProfileImage
      titulo="Çauan x Danilo"
      imagem={Imagem}
      alt="legal"
      descricao="Legal"
      preco="R$2,27"
      caracteristicas="LEgal"

      />

      
      
    </div>
  );
}

export default App;
