import useSWR from "swr";

const fetcher = async () => {
  const response = await fetch("/api");
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
      <h2>ID-{data.id}</h2>
      <h2> Total Posts -{data.totalposts}</h2>
      <h2>Total-Likes {data.likes}</h2>
    </div>
  );
}
export default DashboardSWR;
