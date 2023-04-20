export function Counter({count, onIncrement, onDecrement}) {

  return (
    <>
    <h1>Count: {count}</h1>
    <button onClick={onIncrement}>Increment</button>
    <button onClick={onDecrement}>Decrement</button>
    </>
  )
}
