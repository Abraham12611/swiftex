export const isAuthenticated = () => {
    const did = localStorage.getItem('did');
    const vc = JSON.parse(localStorage.getItem('vc'));
    return did && vc?.status === 'verified';
  };