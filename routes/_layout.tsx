import { PageProps } from "$fresh/server.ts";
import Header from "../components/Header.tsx";

export default function Layout({ Component, state }: PageProps) {
  // do something with state here
  return (
    <>
      <Header />
      <main>
        <Component />
      </main>
    </>
  );
}
