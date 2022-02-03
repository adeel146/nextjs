import Link from "next/link";

function index({ news }) {
  return (
    <div>
      <h1>Filter by Category type</h1>
      {news.map((news) => {
        return (
          <>
            <ul>
              <li>
                {news.id} |{news.description} |{" "}
                <Link href={`news/${news.type}`}>
                  <a> {news.type}</a>
                </Link>
              </li>
            </ul>
            <div />
          </>
        );
      })}
    </div>
  );
}
export default index;

export async function getServerSideProps() {
  const response = await fetch("http://localhost:4000/news");
  const data = await response.json();
  return {
    props: {
      news: data,
    },
  };
}
