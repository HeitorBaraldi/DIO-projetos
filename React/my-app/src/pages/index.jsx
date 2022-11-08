import { useEffect, useState,useMemo, useCallback } from "react";

const Teste = () => {

  const [name, setName] = useState('Carlos');
  const [age,setAge] = useState(26);

  const handleChangeName = useCallback(() => {
    console.log('Alterou nome')
    setName(prev => prev === 'Carlos' ? 'Heitor' : 'Carlos') // se prev = Carlos {verdade > Heitor} se não retorna Carlos
  },[])
  
  const handleChangeAge = useCallback(() => {
    const newAge = 10 * age;
    console.log('age atual',age, newAge)
    setAge(prev => prev === 26 ? 32 : 26) // se prev = Carlos {verdade > Heitor} se não retorna Carlos
  },[age])


  return (
    <div>
      <p>
        Nome: {name} 
      </p>
      <br />
      <p>
        Idade: {age}
      </p>
      <br/>

      <button onClick={handleChangeName}>Alterar Nome</button>
      <br/>
      <br/>
      <button onClick={handleChangeAge}>Alterar Idade</button>
</div>
  )
}

export {Teste};