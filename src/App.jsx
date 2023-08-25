import "./Form.css";

import axios from "axios";

const App = () => {
  const calcular = () => {
    const origem = document.getElementById("origem").value;
    const destino = document.getElementById("destino").value;
    const baseURL = "https://api.distancematrix.ai/maps/api/distancematrix/json?origins=" + origem + "&destinations=" + destino + "&key=lahWwYE5ApC3pGFGUMvBa09n7vEPx";

    axios.get(baseURL)
      .then((resposta) => {
        var distancia = (resposta.data.rows[0].elements[0].distance.value / 1000);
        var valorQuilometro = document.getElementById('valor-por-quilometro').value;
        var resultado = distancia * valorQuilometro;

        document.getElementById("distancia").value = distancia.toFixed(2);
        document.getElementById("resultado").value = resultado.toFixed(2);
      })
      .catch(() => ("Erro ao chamar a API."));
  }

  return (
    <>
      <form>

        <div>
            <label>Endereço de Origem</label>
            <input type="text" id="origem" size="50" autoFocus />
        </div>

        <div>
            <label>Endereço de Destino</label>
            <input type="text" id="destino" size="50" />
        </div>

        <div>
            <label>Valor por Quilometro - R$</label>
            <input type="text" id="valor-por-quilometro" defaultValue="2.00" />
        </div>

        <button type="button" id="calcular" onClick={() => calcular()} >Calcular</button>
        <br></br>

        <div>
            <label>Distancia - Km</label>
            <input type="text" id="distancia" size="30" />
        </div>

        <div>
            <label>Valor do Frete - R$</label>
            <input type="text" id="resultado" size="30" />
        </div>

      </form>
    </>
  )
}

export default App