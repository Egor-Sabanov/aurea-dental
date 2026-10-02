"use client";

import { useState } from "react";

const doctors = [
  {name:"Александр Волков", role:"Главный врач · хирург-имплантолог", img:"/images/doctor-alex.jpg"},
  {name:"Елена Морозова", role:"Эстетическая стоматология", img:"/images/doctor-elena.jpg"},
  {name:"Максим Орлов", role:"Врач-стоматолог · терапевт", img:"/images/doctor-max.jpg"},
];

const services = [
  ["Имплантация","Восстановление зубов с цифровым планированием и понятным планом лечения."],
  ["Эстетическая стоматология","Виниры, реставрация и отбеливание для естественного результата."],
  ["Лечение зубов","Бережная терапия с современной диагностикой и заботой о комфорте."],
  ["Профессиональная гигиена","Комплексная чистка и персональные рекомендации для здоровья улыбки."],
];

const benefits = [
  ["Точная диагностика","Современное оборудование и цифровое планирование"],
  ["Опытные врачи","Специалисты с узкой экспертизой"],
  ["Комфорт","Спокойная атмосфера на каждом этапе"],
  ["Личный план","Решения под ваши задачи и бюджет"],
];

export default function Home(){
  const [formState, setFormState] = useState("idle");
  const [formMessage, setFormMessage] = useState("");
  return <main>
    <header className="nav">
      <a href="#" className="logo" aria-label="Aurea Dental">AUREA <span>DENTAL</span></a>
      <nav>
        <a href="#services">Услуги</a>
        <a href="#clinic">О клинике</a>
        <a href="#doctors">Врачи</a>
        <a href="#reviews">Отзывы</a>
        <a href="#contacts">Контакты</a>
      </nav>
      <a className="topBtn" href="#contacts">Записаться <b>→</b></a><a className="mobileMenu" href="#services" aria-label="Перейти к услугам"><span></span><span></span></a>
    </header>

    <section className="hero">
      <div className="heroImage"><img src="/images/hero-clean.jpg" alt="Современный кабинет AUREA DENTAL"/></div>
      <div className="heroShade" />
      <div className="heroOverlay">
        <div className="eyebrow">AUREA DENTAL · МОСКВА</div>
        <h1>Здоровая улыбка,<br/><span>которая меняет</span><br/>качество жизни.</h1>
        <p>Современная стоматология с вниманием к деталям, технологиям и вашему комфорту на каждом этапе лечения.</p>
        <div className="heroActions">
          <a className="primary" href="#contacts">Записаться на приём <b>→</b></a>
          <a className="video" href="#clinic"><i>↗</i><span>Посмотреть клинику<small>1 минута</small></span></a>
        </div>
      </div>
      <div className="heroMeta"><span>PREMIUM DENTAL CARE</span></div>
      <div className="guarantee"><span>◇</span><div><b>Гарантия на лечение</b><small>до 5 лет</small></div></div>
    </section>

    <section className="benefits" aria-label="Преимущества AUREA DENTAL">
      {benefits.map(([title,text])=><div key={title} className="benefit">
        <div><strong>{title}</strong><small>{text}</small></div>
      </div>)}
    </section>

    <section className="doctors section" id="doctors"><div className="sectionRule"><i></i><small>AUREA / TEAM</small></div>
      <div className="sectionTop">
        <div className="doctorIntro">
          <div className="eyebrow">НАША КОМАНДА</div>
          <h2>Профессионалы,<br/><span>которым доверяют.</span></h2>
          <p>Мы собрали специалистов разных направлений, чтобы вы могли пройти путь от диагностики до результата в одном месте.</p>
          <a className="outline" href="#contacts">Познакомиться с командой <b>→</b></a>
        </div>
        <div className="sectionSideNote"><p>Специалисты<br/>разных направлений</p></div>
      </div>
      <div className="doctorGrid">
        {doctors.map(d=><article key={d.name} className="doctorCard">
          <div className="doctorPhoto"><img src={d.img} alt={d.name}/><button aria-label={`Подробнее о ${d.name}`}>↗</button></div>
          <div className="doctorInfo"><div><h3>{d.name}</h3><p>{d.role}</p></div><span className="doctorArrow">→</span></div>
        </article>)}
      </div>
    </section>

    <section className="clinic" id="clinic"><div className="sectionRule"><i></i><small>AUREA / CLINIC</small></div>
      <div className="clinicCopy">
        <div className="eyebrow">О КЛИНИКЕ</div>
        <h2>Спокойное лечение.<br/><span>Предсказуемый результат.</span></h2>
        <p>От первого визита до финального результата мы делаем процесс понятным: объясняем варианты, показываем план лечения и остаёмся на связи.</p>
        <div className="stats"><b>10+<small>лет опыта</small></b><b>2 500+<small>пациентов</small></b><b>4.9/5<small>средняя оценка</small></b></div>
        <a className="textLink" href="#contacts">Узнать больше о клинике <span>→</span></a>
      </div>
      <div className="clinicVisual"><img src="/images/clinic-clean.jpg" alt="Интерьер клиники AUREA DENTAL"/><div className="imageCaption"><p>Пространство, в котором<br/>легко расслабиться.</p></div></div>
    </section>

    <section className="services section" id="services"><div className="sectionRule"><i></i><small>AUREA / SERVICES</small></div>
      <div className="servicesHeader">
        <div><div className="eyebrow">НАПРАВЛЕНИЯ</div><h2>Всё необходимое<br/>для вашей <span>улыбки.</span></h2></div>
        <p>Подбираем лечение после консультации и диагностики — без лишних процедур и непонятных решений.</p>
      </div>
      <div className="serviceGrid">{services.map(s=><article key={s[0]} className="serviceCard"><div className="serviceTop"><span>↗</span></div><h3>{s[0]}</h3><p>{s[1]}</p><a href="#contacts">Подробнее <b>→</b></a></article>)}</div>
    </section>

    <section className="reviews" id="reviews"><div className="sectionRule light"><i></i><small>AUREA / PATIENTS</small></div>
      <div className="reviewsHeader"><div><div className="eyebrow">ОТЗЫВЫ ПАЦИЕНТОВ</div><h2>Нас рекомендуют<br/><span>своим близким.</span></h2></div><div className="reviewScore"><b>4.9</b><span>средняя оценка</span><i>★★★★★</i></div></div>
      <div className="reviewGrid">
        <article><div className="stars">★★★★★</div><p>«Очень спокойная атмосфера. Врач подробно объяснил каждый этап лечения — впервые я действительно понимала, что происходит.»</p><b>Анна · 31</b><small>Пациент AUREA</small></article>
        <article><div className="stars">★★★★★</div><p>«Получила именно тот результат, который хотела. Всё аккуратно, естественно и без ощущения навязанного лечения.»</p><b>Мария · 27</b><small>Пациент AUREA</small></article>
        <article><div className="stars">★★★★★</div><p>«Понравилось отношение и то, насколько внимательно относятся к деталям. От записи до приёма всё было организовано.»</p><b>Дмитрий · 38</b><small>Пациент AUREA</small></article>
      </div>
    </section>

    <section className="contact" id="contacts"><div className="sectionRule"><i></i><small>AUREA / CONTACT</small></div>
      <div className="contactInner">
        <div className="eyebrow">ЗАПИСЬ НА ПРИЁМ</div>
        <h2>Начнём с разговора<br/><span>о вашей улыбке.</span></h2>
        <p>Оставьте контакты — администратор свяжется с вами, ответит на вопросы и подберёт удобное время.</p>
        <form
          onSubmit={async e=>{
            e.preventDefault();
            if(formState === "sending") return;

            const form = e.currentTarget;
            const data = new FormData(form);
            const name = String(data.get("name") || "").trim();
            const phone = String(data.get("phone") || "").trim();
            const website = String(data.get("website") || "").trim();

            setFormState("sending");
            setFormMessage("");

            try {
              const response = await fetch("/api/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ name, phone, website }),
              });
              const result = await response.json().catch(() => ({}));

              if(!response.ok || !result.ok){
                throw new Error(result.message || "Не удалось отправить заявку.");
              }

              form.reset();
              setFormState("success");
              setFormMessage("Спасибо. Администратор свяжется с вами в ближайшее время.");
            } catch(error) {
              setFormState("error");
              setFormMessage(error.message || "Произошла ошибка. Попробуйте ещё раз.");
            }
          }}
        >
          <input required name="name" autoComplete="name" placeholder="Ваше имя" aria-label="Ваше имя" disabled={formState === "sending"}/>
          <input required name="phone" type="tel" inputMode="tel" autoComplete="tel" placeholder="Телефон" aria-label="Телефон" disabled={formState === "sending"}/>
          <input name="website" tabIndex="-1" autoComplete="off" aria-hidden="true" className="honeypot"/>
          <button type="submit" disabled={formState === "sending"}>{formState === "sending" ? "Отправка…" : "Записаться"} <span>→</span></button>
        </form>
        {formMessage && <div className={formState === "error" ? "formError" : "formSuccess"} role="status" aria-live="polite">{formMessage}</div>}
        <small className="privacy">Нажимая кнопку, вы соглашаетесь с обработкой персональных данных.</small>
      </div>
    </section>

    <footer>
      <div><a className="logo">AUREA <span>DENTAL</span></a><p>Современная стоматология<br/>с человеческим отношением.</p></div>
      <div className="footerLinks"><a href="#services">Услуги</a><a href="#clinic">О клинике</a><a href="#doctors">Врачи</a><a href="#contacts">Контакты</a></div>
      <div className="footerMeta"><span>Москва · ежедневно 09:00–21:00</span><small>© 2026 AUREA DENTAL</small></div>
    </footer>
  </main>
}
