import { NextResponse } from "next/server";

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

export async function POST(request) {
  try {
    const body = await request.json();
    const name = String(body?.name || "").trim();
    const phone = String(body?.phone || "").trim();
    const website = String(body?.website || "").trim();

    // Honeypot: bots that fill the hidden field are silently rejected.
    if (website) {
      return NextResponse.json({ ok: true });
    }

    if (!name || !phone) {
      return NextResponse.json(
        { ok: false, message: "Заполните имя и телефон." },
        { status: 400 }
      );
    }

    if (name.length > 100 || phone.length > 50) {
      return NextResponse.json(
        { ok: false, message: "Проверьте введённые данные." },
        { status: 400 }
      );
    }

    const token = process.env.TELEGRAM_BOT_TOKEN;
    const chatId = process.env.TELEGRAM_CHAT_ID;

    if (!token || !chatId) {
      console.error("Telegram environment variables are not configured.");
      return NextResponse.json(
        { ok: false, message: "Сервис заявок временно недоступен." },
        { status: 500 }
      );
    }

    const text = [
      "🦷 <b>Новая заявка — AUREA DENTAL</b>",
      "",
      `<b>Имя:</b> ${escapeHtml(name)}`,
      `<b>Телефон:</b> ${escapeHtml(phone)}`,
      "",
      `<i>Источник: aurea-dental-xi.vercel.app</i>`,
    ].join("\n");

    const telegramResponse = await fetch(
      `https://api.telegram.org/bot${token}/sendMessage`,
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          chat_id: chatId,
          text,
          parse_mode: "HTML",
          disable_web_page_preview: true,
        }),
        cache: "no-store",
      }
    );

    if (!telegramResponse.ok) {
      const details = await telegramResponse.text();
      console.error("Telegram API error:", details);
      return NextResponse.json(
        { ok: false, message: "Не удалось отправить заявку. Попробуйте ещё раз." },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { ok: false, message: "Произошла ошибка. Попробуйте ещё раз." },
      { status: 500 }
    );
  }
}
