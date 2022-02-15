function FilteredByCategory({ category, news }) {
  return (
    <div>
      <h1>Filtered Post by {category}</h1>
        {news.map((n) => {
          return <ul key={n.id}>
              <li>
                {n.id} | {n.type} | {n.description}
              </li>
            </ul>
          
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
