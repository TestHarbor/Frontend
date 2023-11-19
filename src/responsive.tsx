import React from 'react';
import {useMediaQuery} from 'react-responsive';

interface MobileProps {
    children?:React.ReactNode
}
interface PCProps {
    children?:React.ReactNode
}
export const Mobile:React.FC<MobileProps> = ({children}) => {
  const isMobile = useMediaQuery({
    query : "(max-width:800px)"
  });
  
  return <>{isMobile && children}</>
}

export const PC:React.FC<PCProps> = ({children}) => {
  const isPc = useMediaQuery({
    query : "(min-width:801px)"
  });
  
  return <>{isPc && children}</>
}