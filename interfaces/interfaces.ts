import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { Dispatch, MouseEvent, PropsWithChildren, SetStateAction } from "react";
// import { To } from "react-router-dom";

export interface State {
  title: string;
  category: string
  color: string,
  icon: IconDefinition,
  content: string;
  isVisible?: boolean,
}

export type Props = PropsWithChildren<{
  id: string;
  title: string;
  href: any;
  className: string;
  visible: boolean;
  color: string;
  icon: any;
  state: State;
  type: string;
  datas: State[];
  changeAnimation: boolean;
  initState: State;
  onChangeCategory: (e: MouseEvent<HTMLAnchorElement>) => void;
  onHandleClick: (data: State) => () => void;
  onOpen: () => void
}>

export interface Datas {
  front: State[]
  back: State[]
}

export type UpdateType<T> = Dispatch<SetStateAction<T>>;


