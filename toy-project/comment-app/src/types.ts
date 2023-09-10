export interface commentType {
  id: number,
  name: string,
  text: string,
  timestamp: Date,
  pf_pic: string,
}

export interface RouterItem {
  path: string,
  element: JSX.Element
}