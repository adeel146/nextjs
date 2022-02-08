import { getSession, signin, signIn } from "next-auth/client";

function Dashboard({ data,session }) {
  if (!data) {
    
    signIn()
  }
  return (
    <div>
      <h1>Dashboard {data}</h1>
    </div>
  );
}

export default Dashboard;
export async function getServerSideProps(Context) {
  const session = await getSession(Context);
  return {
    props: {
      session,
      data: session ? "session available" : "",
    },
  };
}
