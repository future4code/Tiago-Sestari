import React from 'react'


 export class Etapa2 extends React.Component {

  render() {
    return (
      <div className="Etapa2">
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        
           <div>
               <p>Qual o curso?</p>
               <input type="text"  />
            </div>

            <div>
                <p>Qual a unidade de ensino?</p>
                <input type="text"  />
            </div>
           
        
      </div>
    );
  }
}

export default Etapa2;