import { getSession, signin, signIn } from "next-auth/client";

function Dashboard() {
  const [loading, setloading] = useState(true);

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
