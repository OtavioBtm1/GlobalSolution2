export const isAuthenticated = (email, senha) => {
  const users = JSON.parse(sessionStorage.getItem('users')) || [];

  const user = users.find((user) => user.email === email && user.senha === senha);

  if (user) {
    console.log('Usuário encontrado para autenticação:', user.email);
    console.log('Autenticado com sucesso!');
    return user; // Retorna o objeto do usuário encontrado
  }
  
  console.log('Credenciais inválidas. Email:', email, 'Senha:', senha);
  return null; // Se não encontrar o usuário, retorne null ou um valor indicando que a autenticação falhou
};
