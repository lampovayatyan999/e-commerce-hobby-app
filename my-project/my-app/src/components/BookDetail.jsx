

export default function BookDetail({ item }) {
  return (
    <div>
      <h1>{item.title}</h1>
      <p>Автор: {item.author}</p>
      <p>Страниц: {item.pages}</p>
    </div>
  );
}
