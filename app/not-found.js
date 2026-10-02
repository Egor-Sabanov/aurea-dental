import Link from "next/link";

export default function NotFound() {
  return (
    <main className="notFound">
      <div>
        <div className="eyebrow">AUREA / 404</div>
        <h1>Страница не найдена.</h1>
        <p>Похоже, такой страницы больше нет или адрес был введён неверно.</p>
        <Link className="primary" href="/">Вернуться на главную <b>→</b></Link>
      </div>
    </main>
  );
}
