export const isAuthenticated = () => {
  const did = localStorage.getItem('did');
  let vc;
  
  try {
      vc = JSON.parse(localStorage.getItem('vc'));
  } catch (error) {
      console.error("Error parsing 'vc' from localStorage:", error);
      return false; // Return false if there's an error parsing
  }

  // Ensure vc exists and its status is 'verified'
  return did && vc?.status === 'verified';
};
