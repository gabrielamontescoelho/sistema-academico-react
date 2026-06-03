

export default function ListaPendencia({alunos}){
    const resultado = alunos.map((aluno, index)=>{
        if(aluno.pendencia === true){
        return <tr key={index.matricula}>
            <td>{aluno.matricula}</td>
            <td>{aluno.nome}</td>
            <td>{aluno.media}</td>
        </tr>
        }
    return null
    })

    return(
        <>
        <div className="titulo-table">
            <h2>Lista de Alunos com Pendências</h2>
        </div>
        
        <table className="tabela-pendencia">
            <thead>
                <tr>
                    <th>Matrícula</th>
                    <th>Nome</th>
                    <th>Média</th>
                </tr>
            </thead>
            <tbody>
                {resultado}
            </tbody>
        </table>
        </>
    )

}