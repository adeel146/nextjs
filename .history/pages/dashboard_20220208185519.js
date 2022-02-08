import { getSession, signin, signIn } from "next-auth/client";

function Dashboard({ data }) {
  return (
    <div>
      <h1>Dashboard {data}</h1>
    </div>
  );
}

export default Dashboard;
export async function getServerSideProps(Contxt) {
  const session = await getSession();
  return {
    props: {
        session
      data: session ? "session available" : "session is not available",
    },
  };
}
