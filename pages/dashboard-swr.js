import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("http://localhost:4000/dashboard");
  const data = await response.json();
  console.log(data);
  return data;
};
function DashboardSWR() {
  const { data, error } = useSWR("dashboard", fetcher);
  if (error) {
    return <h1>an error occured</h1>;
  }

  if (!data) {
    return <h1>Data is not available</h1>;
  }

  return (
    <div>
      <h1>Dashboard Data</h1>
      <h2>pakistan-{data.id}</h2>
      <h2>{data.totalposts}</h2>
      <h2>{data.likes}</h2>
    </div>
  );
}
export default DashboardSWR;
