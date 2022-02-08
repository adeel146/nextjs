import { useState, useEffect } from "react";
import { getSession } from "next-auth/client";



function Dashboard() {
    const [loading, setloading] = useState(true);

    useEffect(() => {
      const session =
      
    }, []);
    

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
