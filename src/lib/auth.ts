import { jwtDecode } from 'jwt-decode';

interface JWTPayload {
  sub: string;
  name: string;
  role: string;
  iat: number;
}

// Original token with admin role - user requested this specific token
const JWT_TOKEN = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6Ik5hbSBEb2FuIiwicm9sZSI6ImFkbWluIiwiaWF0IjoxNTE2MjM5MDIyfQ.cc0cwORLwCuop8wAuQVJcuA21BWuvamFzeBV_qRYg4g';

export const setTokenToSessionStorage = (): void => {
  sessionStorage.setItem('jwt_token', JWT_TOKEN);
};

export const getTokenFromSessionStorage = (): string | null => {
  return sessionStorage.getItem('jwt_token');
};

export const getTokenFromQueryParams = (): string | null => {
  const urlParams = new URLSearchParams(window.location.search);
  return urlParams.get('token');
};

export const validateTokenFromQueryParams = (): boolean => {
  const token = getTokenFromQueryParams();
  if (!token) return false;
  
  return hasValidRole(token);
};

export const decodeToken = (token: string): JWTPayload | null => {
  try {
    return jwtDecode<JWTPayload>(token);
  } catch (error) {
    console.error('Error decoding JWT token:', error);
    return null;
  }
};

export const hasValidRole = (token: string): boolean => {
    console.log(token);
    
  const decoded = decodeToken(token);
  if (!decoded) return false;
  const validRoles = ['admin', 'finance'];
  return validRoles.includes(decoded.role.toLowerCase());
};

export const redirectToYoutube = (): void => {
  window.location.href = 'https://youtube.com';
};

export const initializeAuth = (): boolean => {
  setTokenToSessionStorage();
  const queryToken = getTokenFromQueryParams();
  if (queryToken && hasValidRole(queryToken)) {
    // sessionStorage.setItem('jwt_token', queryToken);
    return true;
  }
  
  const sessionToken = getTokenFromSessionStorage();
  if (!sessionToken) return false;
  
  return hasValidRole(sessionToken);
};