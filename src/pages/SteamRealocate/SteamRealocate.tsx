import { API_URL } from '../../http';

const SteamRealocate = () => {
  // This is a full-page navigation, not an axios request, so the usual
  // Authorization header interceptor never runs - AccessAuthGuard needs the
  // token passed as a query param instead for this one flow.
  const accessToken = localStorage.getItem('token');
  window.location.href = `${API_URL}/auth/steam?accessToken=${accessToken}`;
  return <div></div>;
};

export default SteamRealocate;
