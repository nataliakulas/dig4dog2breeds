import { useLayoutEffect } from 'react';

const useBodyLockScroll = (open: boolean) => {
  // @ts-ignore
  useLayoutEffect(() => {
    if (open) document.body.style.overflow = 'hidden';

    return () => (document.body.style.overflow = 'visible');
  }, [open]);
};

export default useBodyLockScroll;
