import './App.css'
import Alunos from './components/Alunos'
import ListaPendencia from './components/ListaPendencia'
import ContarPendencias from './components/ContarPendencias'
import { alunos } from './data/alunos'
import { FaGraduationCap } from "react-icons/fa";

function App() {
  return (
    <main className="container">
      <header className="cabecalho">
        <div className="icone-sistema">
          <FaGraduationCap />
        </div>

        <div className="texto-cabecalho">
          <h1>Sistema Acadêmico</h1>
          <p>Gestão inteligente de alunos e desempenho</p>
        </div>
      </header>

      <ContarPendencias alunos={alunos}/>

      <Alunos alunos={alunos}/>
      <ListaPendencia alunos={alunos}/>
    </main>
  )
}

export default App