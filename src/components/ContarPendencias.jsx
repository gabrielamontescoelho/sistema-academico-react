import { IoIosAlert } from "react-icons/io";
import './ContarPendencias.css';

export default function ContarPendencias({ alunos }) {

    const totalPendencia = alunos.reduce((total, aluno) => {
        return aluno.pendencia ? total + 1 : total;
    }, 0);

    return (
        <div className="total-pendencia">

            <div className="cabecalho-card">
                <div className="icone-card">
                    <IoIosAlert />
                </div>

                <span className="badge-alerta">
                    Alerta
                </span>
            </div>

            <div className="numero-pendencia">
                {totalPendencia}
            </div>

            <p>Alunos com pendências</p>

        </div>
    );
}