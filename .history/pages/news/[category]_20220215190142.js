function FilteredByCategory({ category, news }) {
  return (
    <div>
      <h1>Filtered Post by {category}</h1>
        {news.map((n) => {
          return<div >
            <ul>
              <li>
                {n.id} | {n.type} | {n.description}
              </li>
            </ul>
          </div>
        })}
    </div>
  );
}

export default FilteredByCategory

export async function getServerSideProps(context) {
  const { params } = context;
  const { category } = params;
  const response = await fetch(`http://localhost:4000/news?type=${category}`);
  const data = await response.json();
  return {
    props: {
      news: data,
      category,
    },
  };
}
