import {
  MetamaskActions,
  useMetamaskContext,
} from 'context/metamask/MetamaskContext';
import { useCallback } from 'react';
import { Snap } from 'types';

export const useSetInstalled = () => {
  const [, dispatch] = useMetamaskContext();
  return useCallback(
    (installedSnap: Snap | undefined) =>
      dispatch({
        type: MetamaskActions.SetInstalled,
        payload: installedSnap,
      }),
    [],
  );
};

export const useSetError = () => {
  const [, dispatch] = useMetamaskContext();
  return useCallback(
    (e: any) => dispatch({ type: MetamaskActions.SetError, payload: e }),
    [],
  );
};
