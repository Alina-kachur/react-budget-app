import { JSXElementConstructor, PropsWithChildren, ReactNode } from "react";
import { IContextProvider } from "types/types";

interface IAppContext {
  components: Array<JSXElementConstructor<PropsWithChildren<IContextProvider>>>;
  children: ReactNode;
}

export const AppContext = ({ components, children }: IAppContext) => {
  return (
    <>
      {components.reduceRight((children, Provider) => {
        return <Provider>{children}</Provider>;
      }, children)}
    </>
  );
};
