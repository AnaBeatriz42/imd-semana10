import React from 'react';
import ReactDOM from 'react-dom';

function InformacaoPessoal(props) {
  return (<div>
    <h1>Nome:{props.name} </h1>
    <h2>cpf:{props.cpf} </h2>
    <h2>Endereco: {props.endereco}</h2>
    <h2>Email: {props.email} </h2>  </div>)
}

function Operation(props) {
  return (<div>
    <h1>A soma entre {props.n1} e {props.n2} é {parseFloat(props.n1) + parseFloat(props.n2)} </h1>
    <h1>A subtração entre {props.n1} e {props.n2} é {parseFloat(props.n1) - parseFloat(props.n2)}</h1>
    <h1>A Multiplicação entre {props.n1} e {props.n2}  é {parseFloat(props.n1) * parseFloat(props.n2)} </h1>
    <h1>A Divisão entre {props.n1} e {props.n2}  é {parseFloat(props.n1) / parseFloat(props.n2)} </h1>
  </div>)
}

function App() {
  return (
    <div>
      <InformacaoPessoal name="Anna" cpf="362.847.110-93" endereco="Rua maria das dores N° 45" email="ana.2023@gmail.com" />
      <InformacaoPessoal name="Victor" cpf="891.501.210-06" endereco="Avenida das goibeiras N° 13" email="victorqqt.ss@gmail.com" />
      <Operation n1="100" n2="50" />
    </div>
  );
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);