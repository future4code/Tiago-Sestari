import React from 'react'


 export class Etapa3 extends React.Component {

  render() {
    return (
      <div className="Etapa3">
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        
           <div>
               <p>Por que você não terminou o curso de graduação?</p>
               <input type="text"  />
            </div>

            <div>
                <p>Qual a sua escolaridade?</p>
                <select>
                    <option value="">Nenhum</option>
                    <option value="">Curso Técnico</option>
                    <option value="">Curso de Inglês</option>
                </select>
            </div>
        
      </div>
    );
  }
}

export default Etapa3;