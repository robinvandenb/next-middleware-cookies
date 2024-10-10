import { cookies } from "next/headers";
import { SessionData, sessionOptions } from "../config/authentication";
import { getIronSession } from "iron-session";

export default async function Home() {
  const session = await getIronSession<SessionData>(cookies(), sessionOptions);

  console.log({ session }); // { session: {} } on first request, { session: { user: 'John Doe' } } on subsequent requests

  return <p>{session.user}</p>;
}
