import { getServerSession } from "next-auth";
import { NEXT_AUTH } from "../api/lib/auth";


export default async function () {

  const session = await getServerSession(NEXT_AUTH);
  return <div>userComponent {JSON.stringify(session)}</div>
}
