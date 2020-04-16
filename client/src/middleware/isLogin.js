async function isLogin(to, from, next) {
  if (localStorage.token && localStorage.refreshToken) {
    try {
      const response = await fetch('http://localhost:1337/auth/refresh-token', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          refreshToken: localStorage.getItem('refreshToken')
        })
      });
      let result = await response.json();
      localStorage.token = result.token;
      localStorage.refreshToken = result.refreshToken;
      if (response.status === 200) {
        next();
        return;
      }
    } catch (error) {
      console.log(error);
      if (error) {
        localStorage.removeItem('token');
        localStorage.removeItem('refreshToken');
        window.location.replace('/login');
        return;
      }
    }
  } else {
    window.location.replace('/login');
    return;
  }
}
export default isLogin;
