import { Todo } from "../types"

interface Props extends Todo {}

export default function TodoItem(props: Props) {
  return (
    <div>
      <p>{props.id}. {props.content}</p>
    </div>
  )
}
