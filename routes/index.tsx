import { useSignal } from "@preact/signals";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  const count = useSignal(3);
  return (
    <>
      <h1 class="text-4xl font-bold">Welcome to Fresh</h1>
      <Counter count={count} />
    </>
  );
}
