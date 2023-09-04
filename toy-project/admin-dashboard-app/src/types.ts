// dummy.jsx links
// export interface link {
//   title: string;
//   links: [
//     name: string,
//     icon: JSX.Element,
//   ]
// }

export interface navbtnProps { 
  title: string,
  customFunc: () => void,
  icon: JSX.Element,
  color: string,
  dotColor?: string
}

export interface buttonProps {
  bgColor: string, 
  color: string, 
  size: string, 
  text: string, 
  borderRadius: string
}