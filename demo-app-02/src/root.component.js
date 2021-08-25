import { useState } from "react";

export default function Root(props) {
  const [counter, setCounter] = useState(0);

  const handleOnSubmit = (e) => {
    e.preventDefault();

    setCounter(counter + 1);
  };

  return (
    <section>
      <h1>Welcome to APP 02!</h1>
      <form onSubmit={handleOnSubmit}>
        Counter: <span>{counter}</span>
        <p>
          <button>Increment</button>
        </p>
      </form>
    </section>
  );
}
