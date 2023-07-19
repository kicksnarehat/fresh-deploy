import { PageProps } from "$fresh/server.ts";

export default function Greet(props: PageProps) {
  return (
    <>
      <h1>
        Hello {props.params.name}
      </h1>
      <pre>{JSON.stringify({props}, null, 2)}</pre>
    </>
  );
}
