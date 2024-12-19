import React, { useState, useEffect } from 'react';

function CEP() {

  
  const [cep, setCep] = useState("")
  const [localidade,setLocalidade] = useState("")

  let handleChange = (e) => {
      setCep(e.target.value)
  }
  


  useEffect(()=>{

        let consulta = fetch("https://viacep.com.br/ws/"+cep+"/json/")
        consulta.then((resp, err)=>{          
          return resp.json()
        }).then((data)=>{
          console.log(data)
          setLocalidade(data.localidade)
        }).catch((error)=>{
          console.log(error)
          setLocalidade("")
        })

  }, [cep])

  return (
    <div className="CEP">

      <div>
        <input name="cep" onChange={handleChange} placeholder='Digite o CEP' ></input> 
      </div>

      <div>
        Cidade de entrega: {localidade}
      </div>

    </div>
  );
}

export default CEP;