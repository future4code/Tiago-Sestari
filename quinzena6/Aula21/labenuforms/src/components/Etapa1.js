import React from 'react'


 export class Etapa1 extends React.Component {

  render() {
    return (
      <div className="Etapa1">
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        
           <div>
               <p>Qual o seu nome?</p>
               <input type="text"  />
            </div>

            <div>
                <p>Qual a sua idade?</p>
                <input type="text"  />
            </div>
           
            <div>
                <p>Qual o seu email?</p>
                <input type="text"  />
            </div>

            <div>
                <p>Qual a sua escolaridade?</p>
                <select>
                    <option value="">Ensino Médio Incompleto</option>
                    <option value="">Ensino Médio Completo</option>
                    <option value="">Ensino Superior Incompleto</option>
                    <option value="">Ensino Superior Completo</option>
                </select>
            </div>
        
      </div>
    );
  }
}

export default Etapa1;
