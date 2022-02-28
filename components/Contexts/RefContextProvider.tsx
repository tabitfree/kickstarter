import { createContext, FC, useRef, useState, MutableRefObject } from 'react';

type RefContextType = { refs: any };

export const RefContext = createContext<RefContextType>({ refs: null });

const RefContextProvider: FC = ({ children }) => {
  const how = useRef(null);
  const cases = useRef(null);
  const price = useRef(null);
  const consultation = useRef(null);
  const [refs, setRefs] = useState({ how, cases, price, consultation });

  return <RefContext.Provider value={{ refs }}>{children}</RefContext.Provider>;
};

export default RefContextProvider;
