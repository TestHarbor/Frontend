import { useState, useEffect } from 'react';
import axios from 'axios';

const useIsLoggedIn = (): boolean => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const response = await axios.get('/api/check-login', { withCredentials: true });
        setIsLoggedIn(response.data.isLoggedIn);
      } catch (error) {
        console.error('로그인 상태 확인 요청 실패:', error);
        setIsLoggedIn(false);
      }
    }
    checkLoginStatus();
  }, []);

  return isLoggedIn;
}

export default useIsLoggedIn;
