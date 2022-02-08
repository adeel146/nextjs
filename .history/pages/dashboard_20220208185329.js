import { getSession, signin, signIn } from "next-auth/client";

function Dashboard() {

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
export async function getServerSideProps() {
    const session = await getSession()
    return{}
}
