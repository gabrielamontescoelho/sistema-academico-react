import { FaUsers } from "react-icons/fa";

export default function Alunos({alunos}){

    return(
        <>
        <div className="titulo-table">
            <h2>Lista de Alunos</h2>
        </div>
            <table>
                <thead>
                    <tr>
                        <th>Matrícula</th>
                        <th>Nome</th>
                        <th>Média</th>
                        <th>Pendência</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        alunos.map(aluno => (
                            <tr key={aluno.matricula}>
                                <td>{aluno.matricula}</td>
                                <td>{aluno.nome}</td>
                                <td>{aluno.media}</td>
                                <span className={aluno.pendencia ? 'status-sim' : 'status-nao'}>
                                    <td>{aluno.pendencia ? 'Sim' : 'Não'}</td>
                                </span>
                            </tr>
                        ))
                    }
                </tbody>
            </table>
        </>
    )

}