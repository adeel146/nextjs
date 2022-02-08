import { useState, useEffect } from "react";
import { getSession,signin,signIn } from "next-auth/client";



function Dashboard() {
    const [loading, setloading] = useState(true);

    useEffect(() => {
      const access = async ()=>{
          const session = await getSession()
          if(!session){
              signIn()
          }else{
              setloading(false)
          }
          
      }
      
    }, []);
    

  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  );
}

export default Dashboard;
