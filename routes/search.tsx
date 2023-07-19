import { Handlers, PageProps } from "https://deno.land/x/fresh@1.3.0/server.ts";

const NAMES = [
  "Alice",
  "Andrew",
  "Alex",
  "Bob",
  "Bonnie",
  "Barney",
  "Barnie",
  "Bernie",
  "Chester",
  "Clementine",
  "Cathy",
  "Kathy",
  "Katie",
  "Xena",
];

interface Data {
  results: string[];
  query: string;
}

export const handler: Handlers<Data> = {
  GET(req, ctx) {
    const url = new URL(req.url);
    const query = url.searchParams.get("q") || "";
    const results = NAMES.filter((n) => n.includes(query));
    return ctx.render({ results, query });
  },
};

export default function Page({ data }: PageProps<Data>) {
  const { results, query } = data;
  return (
    <>
      <h2>Hi</h2>
      <form>
        <input type="search" name="q" value={query} />
        <button type="submit">Search</button>
      </form>
      <ul>
        {results.map((n) => <li key={n}>{n}</li>)}
      </ul>
    </>
  );
}
