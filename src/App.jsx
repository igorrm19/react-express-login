import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState(''); //correto
  const [password, setPassword] = useState(''); //correto
  const [mens, setMens] = useState('');


  const hendelLogin = async (e) => {
    e.preventDefault();
    console.log(email, password);

    try{
      const resposta = await fetch('http://localhost:3000/login', 
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({email, password}),
        }
      );
    
      const data = await resposta.json();
      if(resposta.ok){
          console.log('certo')
          setMens(`Login bem sucedido ${data.name}`);
      }else{
        console.log('errado')
        setMens(data.mens)
      }

    }catch(error){
      console.error('Erro na conexão', error);
      setMens('Erro ao tentar fazer Login')
    }
  }

  return (
    <>
      <main>
        <form>
          <h3>Email</h3>
          <input
            name="email"
            placeholder="Email..."
            type="text"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          ></input>

          <h3>senha</h3>
          <input
            name="password"
            placeholder="Email..."
            type="text"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          ></input>
           
         <button name="submit" type="submit" onClick={(e) => hendelLogin(e) }>Enviar</button>
        </form>
        
        <p>{mens}</p>

      </main>
    </>
  );
}

export default App;
