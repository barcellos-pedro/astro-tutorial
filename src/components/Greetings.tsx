import { useState } from "preact/hooks";

type GreetingProps = {
  messages: string[];
};

export default function Greeting({ messages }: GreetingProps) {
  const [greeting, setGreeting] = useState(randomMessage());

  function randomMessage() {
    return messages[Math.floor(Math.random() * messages.length)];
  }

  function newGreet() {
    setGreeting(randomMessage());
  }

  return (
    <div>
      <h3>{greeting}! Thank you for visiting!</h3>
      <button onClick={newGreet}>New Greeting</button>
    </div>
  );
}
