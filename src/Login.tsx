
import './Login.css'

export default function Login() {

  return (
    <>
      <div className='container'>
        <div className='main'>
          <h2 className='title'> Acesse o sistema</h2>
          <input className='input' type="text" placeholder='E-mail' /><br />
          <input className='input' type="password" placeholder='Senha' />
          <p className='fff'>
            <input type="checkbox" className='check' />Lembre-se de mim
            <a className='links' href="about:blank" target='_blank'>Esqueceu a senha?</a>
          </p>

          <button className='btn'>Entrar</button>

          <p className='black'>Não tem uma conta? <a className='link' href="./cadastro.tsx" target='./cadastro.tsx'>Cadastrar</a></p>
        </div>
      </div>
    </>
  )
}