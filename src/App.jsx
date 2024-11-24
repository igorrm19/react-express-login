import { useState } from 'react';
import './App.css';

function App() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const hendelLogin = async (e) => {
    e.preventDefault();
    console.log(email, ' ', password);

    const response = await axios.post(
      'http://localhost:3000/login',
      JSON.stringify({ email, password }),
      {
        Headers: { 'Content-Type': 'application/json' },
      }
    );
  };

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

          <button name="submit" type="submit" onClick={(e) => hendelLogin(e)}>
            Enviar
          </button>
        </form>
      </main>
    </>
  );
}

export default App;
