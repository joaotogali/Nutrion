// app/auth/page.tsx
'use client';

import { useState } from 'react';

const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);

  const toggleMode = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '20px' }}>
      <h2>{isLogin ? 'Login' : 'Cadastro'}</h2>
      <form>
        {!isLogin && (
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" id="name" name="name" required />
          </div>
        )}
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" required />
        </div>
        <div>
          <label htmlFor="password">Senha</label>
          <input type="password" id="password" name="password" required />
        </div>
        <button type="submit">{isLogin ? 'Login' : 'Cadastrar'}</button>
      </form>
      <p onClick={toggleMode} style={{ cursor: 'pointer', color: 'blue' }}>
        {isLogin ? 'Não tem uma conta? Cadastre-se' : 'Já tem uma conta? Faça login'}
      </p>
    </div>
  );
};

export default AuthPage;
