import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <main>
      <h1>Hello {props.params.name}</h1>
      <h2>PageProps:</h2>
      <pre>{JSON.stringify(props, null, 2)}</pre>
    </main>
  );
}
