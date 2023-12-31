export interface TStrings {
  [name: string]: string;
}
export interface TComponentChildrenProp {
  children?: React.ReactNode;
}
export interface TSizeOBJ {
  width?: number;
  height?: number;
  unit?: string;
}
export interface TNameStyle {
  name?: string;
  styles?: string;
}
export interface TMenuButtonData {
  text?: TNameStyle;
  icon?: TNameStyle;
  onClick?: TAnyVoidFunction;
}
export interface TMenuButtonProps
  extends TComponentChildrenProp,
    TMenuButtonData {}
export type TAnyVoidFunction = (...args: any[]) => void;
