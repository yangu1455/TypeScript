export interface commentType {
  id: number,
  name: string,
  text: string,
  timestamp: string,
  pf_pic: string,
}

export interface RouterItem {
  path: string,
  element: JSX.Element
}