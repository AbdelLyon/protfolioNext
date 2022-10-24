import { createContext, PropsWithChildren, useState } from "react";
import { datas } from "../data/datas";
import { State, UpdateType } from "../interfaces/interfaces";

export const initialState = (data: State[]) => {
  return {
    title: data[0].title,
    color: data[0].color,
    icon: data[0].icon,
    category: data[0].category,
    content: data[0].content,
    isVisible: data[0].isVisible
  }
}

export function createCtx<T>(defaultValue: T) {
  const defaultUpdate: UpdateType<typeof defaultValue> = () => defaultValue;
  const ctx = createContext({
    state: defaultValue,
    setState: defaultUpdate,
  });

  function Provider(props: PropsWithChildren<{}>) {
    const [state, setState] = useState(defaultValue);
    return <ctx.Provider value={{ state, setState }} {...props} />
  }
  return [ctx, Provider] as const;
}


export const [ctx, provider] = createCtx<State>(initialState(datas.front));


export const StateContext = ctx;
export const StateProvider = provider;








