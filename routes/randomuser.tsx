import { Handlers, PageProps } from "$fresh/server.ts";

interface User {
  email: string;
  name: string;
  picture: {
    large: string;
  };
}
export const handler: Handlers<User | null> = {
  async GET(_, ctx) {
    const resp = await fetch(`https://randomuser.me/api`);
    if (resp.status === 404) {
      return ctx.render(null);
    }
    const json = await resp.json();
    const user = json?.results?.[0];
    // console.log({ user });
    return ctx.render(user);
  },
};

export default function Page({ data }: PageProps<User | null>) {
  if (!data) {
    return <h1>User not found</h1>;
  }

  return (
    <div>
      <img src={data.picture.large} width={64} height={64} />
      <h1>{data.name}</h1>
      <p>{data.email}</p>
    </div>
  );
}
