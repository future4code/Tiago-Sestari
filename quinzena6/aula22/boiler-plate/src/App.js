import React from 'react'
import styled from 'styled-components'
import './styles.css'

const TarefaList = styled.ul`
  padding: 0;
  width: 80%;
`

const Tarefa = styled.div`
  text-align: left;
  text-decoration: ${ ({completa}) => (completa ? 'line-through' : 'none')};
  
  
`

const InputsContainer = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  
`

const TarefaBlock = styled.div`
display: flex;
justify-content: space-between;
align-items: center;
border: 0.2em solid rgb(136,34,136);
padding: 0 1em;
border-radius: 40px;
width: 100%;
margin: 0.5em 0;
word-wrap:break-word;
`

const Contador = styled.div`
font-size: 0.8em;
color: ${ ({letras}) => ( (letras > 59) ? 'red' : 'black')};
`

const Buttons = styled.a`
display: inline-block;
padding: 0.35em 1.2em;
border:0.1em solid #FFFFFF;
margin:0.3em 0.3em 0.3em 0.5em;
border-radius: 40px;
box-sizing: border-box;
text-decoration:none;
font-family:'Roboto',sans-serif;
font-weight:300;
color:#FFFFFF;
background-color: rgb(136,34,136);
text-align:center;
width: ${ ({daTarefa}) => (daTarefa ? '60%' : '100%')};
`

class App extends React.Component {
    state = {
      tarefas: [],
      inputValue: '',
      filtro: '',
      tamanho: '0'

    }

  componentDidUpdate() {

    const tarefas = JSON.stringify(this.state.tarefas)

    localStorage.setItem('tarefas', tarefas)

  };

  componentDidMount() {

    const tarefas = JSON.parse(localStorage.getItem('tarefas'))

    this.setState({tarefas: tarefas})

  };

  onChangeInput = (event) => {
    {(event.target.value.length < 60) ? this.setState({inputValue: event.target.value}) : this.setState({inputValue: this.state.inputValue})}
    //console.log(event.target.value.length)
    this.setState({tamanho: event.target.value.length})
    console.log(this.state.tamanho)
    //teste:
    //console.log(this.state.inputValue)

  }

  enviarComEnter = (event) => {
    //console.log(event.keyCode)
    if(event.keyCode === 13){
      this.criaTarefa()
    }

  }

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false
    }

    const bufferState = [...this.state.tarefas, novaTarefa]

    this.setState({tarefas: bufferState})

    this.setState({inputValue: ''})

  }

  deletarTarefa = (id) => {

    const bufferState = this.state.tarefas.filter(tarefa => {
      if(id === tarefa.id) {
        return false
      } else {
        return true}
  })

  this.setState({tarefas: bufferState})
  }

  deletarTodasTarefas = () => {
    this.setState({tarefas: []})
  }

  ordenarTarefas = (ordem) => {
     
      function compare(a, b) {
        // Para ignorar as diferenças de minúscula e maiúscula
        const tarefaA = a.texto.toUpperCase();
        const tarefaB = b.texto.toUpperCase();

        //console.log(tarefaA)
      
        let comparison = 0;
        if (tarefaA > tarefaB) {
          {ordem ? comparison = 1 : comparison = -1}
        } else if (tarefaA < tarefaB) {
          {ordem ? comparison = -1 : comparison = 1}
        }
        return comparison;
      }
      
      let bufferState = this.state.tarefas.sort(compare);
      //console.log(bufferState)
    this.setState({tarefas: bufferState})
  }

  editarTarefa = (id) => {

    this.state.tarefas.map((tarefa) => {
      if (id === tarefa.id) {this.setState({inputValue: tarefa.texto})}
    })

    this.deletarTarefa(id)
    
  }

  selectTarefa = (id) => {
    const bufferState = this.state.tarefas.map((tarefa) =>{
      if( id === tarefa.id) {
        const novaTarefaAlterada = {
          ...tarefa,
          completa: !tarefa.completa
        }
        return novaTarefaAlterada
      } else {
        return tarefa
      }
    })

    this.setState({tarefas: bufferState})
  }

  onChangeFilter = (event) => {
    this.setState({filtro: event.target.value})

  }

  render() {
    const listaFiltrada = this.state.tarefas.filter(tarefa => {
      switch (this.state.filtro) {
        case 'pendentes':
          return !tarefa.completa
        case 'completas':
          return tarefa.completa
        default:
          return true
      }
    })

    return (
      <div className="main">
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} onKeyUp={this.enviarComEnter} />
          <Contador letras={this.state.tamanho}>{this.state.tamanho}/60</Contador>
          <Buttons onClick={this.criaTarefa}>Adicionar</Buttons>
        </InputsContainer>
        <br/>

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
          
          <Buttons onClick={() => {this.ordenarTarefas(true)}} >A -> Z</Buttons>
          <Buttons  onClick={() => {this.ordenarTarefas(false)}} >Z -> A</Buttons>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map(tarefa => {
            return (
              <TarefaBlock>
                <Tarefa
                  completa={tarefa.completa}
                  onClick={() => this.selectTarefa(tarefa.id)}
                >
                  {tarefa.texto} 
                </Tarefa>
                <div>
                <Buttons daTarefa={true} onClick={() => this.deletarTarefa(tarefa.id)}>X</Buttons>
                <Buttons daTarefa={true} onClick={() => this.editarTarefa(tarefa.id)}>Editar</Buttons>
                </div>
              </TarefaBlock>
            )
          })}
        </TarefaList>

        <div className="DeleteAll"><Buttons onClick={this.deletarTodasTarefas}>Apagar tudo</Buttons> </div>
      </div>
      </div>
    )
  }
}

export default App
