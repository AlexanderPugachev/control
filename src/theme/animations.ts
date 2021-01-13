import { keyframes } from 'styled-components';

export const animations = {
  fadeInUp: keyframes`
    from {  
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }
    to {
      opacity: 1;
      transform: none;
    }
  `,
  fadeOutDown: keyframes`
    from {  
      opacity: 1;
    }
    to {
      opacity: 0;
      transform: translate3d(0, 100%, 0);
    }    
  `,
  flash: keyframes`
    from { opacity: 1 }
    25% { opacity: 0 }
    50% { opacity: 1 }
    75% { opacity: 0 }
    to { opacity: 1 }
  `,
};