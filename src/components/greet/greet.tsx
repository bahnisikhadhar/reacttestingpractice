type GreetProps = {
    name ?: string // ? is given to make name optional and it is a typescript thing, otherwise greet.test.tsx will show an error
}

const Greet = (props : GreetProps) => {
  return (
    <div>Hello {props.name}</div>
  )
}

export default Greet
