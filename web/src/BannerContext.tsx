import React, { Dispatch, useContext } from 'react';

import Banner, { State } from './components/Banner';

type ContextStateType = { level: State; formId: string; message: string };

interface ContextType {
  bannerState: ContextStateType;
  setBannerState: Dispatch<ContextStateType>;
}

const initialState = { level: State.IDLE, formId: '', message: '' };

const BannerContext = React.createContext<ContextType>({
  bannerState: initialState,
  setBannerState: () => undefined,
});

const reducer = (_: ContextStateType, newState: ContextStateType) => newState;

const BannerContextProvider: React.FC = ({ children }) => {
  const [bannerState, setBannerState] = React.useReducer(reducer, initialState);
  const { level, message, formId } = bannerState;

  return (
    <BannerContext.Provider value={{ bannerState, setBannerState }}>
      <Banner
        formId={formId}
        level={level}
        message={message}
        onClick={() => setBannerState(initialState)}
      />

      {children}
    </BannerContext.Provider>
  );
};

const useBannerContext = () => useContext(BannerContext);

export { BannerContextProvider, useBannerContext };
