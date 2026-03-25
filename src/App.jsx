import { useState, useRef, useEffect } from "react";

const BG = "#FFFFF0";
const CARD_BG = "#F4F3E2";
const BORDER = "#E0DFC8";
const MUTED = "#999988";
const ACCENT = "#f55733";
const TEXT = "#333333";
const FONT = "'Nunito Sans', 'Inter', sans-serif";

const TABS = [
  { id: "five", label: "Через 5 років" },
  { id: "tenwenty", label: "Через 10–20 років" },
  { id: "what", label: "What?" },
  { id: "how", label: "How?" },
  { id: "why", label: "Why?" },
  { id: "values", label: "3 Цінності" },
  { id: "audience", label: "Аудиторії" },
  { id: "competitors", label: "Конкуренти" },
  { id: "tov", label: "ToV" },
];

function Label({ children }) {
  return (
    <div style={{ display: "inline-flex", alignItems: "center", gap: 6, fontSize: 11, fontWeight: 600, letterSpacing: "0.18em", textTransform: "uppercase", color: MUTED, marginBottom: 24, fontFamily: "Inter,sans-serif" }}>
      <span style={{ color: ACCENT }}>&#123;</span>{children}<span style={{ color: ACCENT }}>&#125;</span>
    </div>
  );
}

function Divider() {
  return <div style={{ height: "1px", background: BORDER, margin: "52px 0" }} />;
}

function Card({ children, style = {} }) {
  return (
    <div style={{ background: CARD_BG, borderRadius: 20, padding: "28px 32px", ...style }}>
      {children}
    </div>
  );
}

function GoldenCircle({ active }) {
  const rings = ["Why", "How", "What"];
  const sizes = [120, 220, 320];

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", margin: "0 0 48px", height: 340 }}>
      <div style={{ position: "relative", width: 320, height: 320 }}>
        {[2, 1, 0].map(i => {
          const label = rings[i];
          const size = sizes[i];
          const offset = (320 - size) / 2;
          const isActive = label === active;
          return (
            <div key={label} style={{
              position: "absolute", top: offset, left: offset,
              width: size, height: size, borderRadius: "50%",
              background: isActive ? ACCENT : CARD_BG,
              border: `2px solid ${BORDER}`,
              display: "flex", alignItems: "center", justifyContent: "center",
            }}>
              {i === 0 && (
                <span style={{ fontSize: 15, fontWeight: 700, color: isActive ? "#fff" : TEXT, letterSpacing: "0.05em", fontFamily: "Inter,sans-serif" }}>{label}</span>
              )}
            </div>
          );
        })}
        {["How","What"].map((label, i) => {
          const isActive = label === active;
          const size = sizes[i + 1];
          const offset = (320 - size) / 2;
          return (
            <div key={label + "-lbl"} style={{ position: "absolute", top: offset, left: offset, width: size, height: size, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", pointerEvents: "none" }}>
              <span style={{ position: "absolute", top: 16, fontSize: 13, fontWeight: isActive ? 700 : 500, color: isActive ? ACCENT : MUTED, fontFamily: "Inter,sans-serif" }}>{label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}

function Tab5Years() {
  const insights = ["Вийти на прибутковість і точку беззбитковості","Перестати бути «просто платіжкою» — стати платіжним партнером для бізнесу","Ядро продукту — Payment Orchestrator, а не еквайринг. Еквайринг — похідний продукт від оркестратора","Зайняти лідерську позицію в 2–3 конкретних нішах в Україні (e-commerce, маркетплейси, регулярні платежі)","Сегментувати продукти: клієнт приходить із задачею і отримує готове рішення, а не кастомні доробки","Фокус на 3–4 напрямки замість «бути про все»","Сформувати екосистему, що покриває всю payment-зону: онлайн, офлайн, крипто, open banking, перекази","Увійти в топ-5–10 payment-оркестраторів на міжнародному ринку (Європа, Латинська Америка, Азія)","Вийти за межі процесингу в суміжні продукти (аналітика, інструменти для бізнесу)","Побудувати потужний технічний бренд, який притягує сильних спеціалістів","Клієнти приходять самі, знаючи хто такі Tranzzo — не треба пояснювати переваги","Конкуренти (Монобанк, Новапей, LiqPay) сприймають Tranzzo як реальну загрозу"];
  const keyInsights = [{ num: "01", title: "Зміна парадигми: від еквайрингу до оркестрації", text: "Команда бачить майбутнє Tranzzo не як ще одного еквайєра, а як платформу оркестрації платежів. Це змінює позиціонування, продуктову лінійку і конкурентне поле." },{ num: "02", title: "Критична проблема — розфокус", text: "Найбільший ризик зараз — спроба бути «і там, і сям». Команда усвідомлює потребу звузити фокус до 3–4 ніш і рухатися проактивно, а не реактивно." },{ num: "03", title: "Два вектори масштабування", text: "Паралельно з кастомним enterprise-напрямком має з'явитися коробкове рішення для SMB — з автоонбордингом і мінімальним time-to-live." },{ num: "04", title: "Від «платіжки» до платіжного партнера", text: "Ключова амбіція — щоб при будь-якому питанні про масштабування платежів перше ім'я було Tranzzo. Не порівнювали з іншими, а сприймали як окрему категорію." }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>Через 5 років</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px", maxWidth: 600 }}>Що буде з вашим<br /><span style={{ color: ACCENT }}>бізнесом</span> через 5 років?</h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 480, margin: 0 }}>Результати командного Brand Sprint — стратегічне бачення, амбіції та ключові зрушення.</p>
      <Divider />
      <Label>Інсайти команди</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 4, marginBottom: 0 }}>
        {insights.map((ins, i) => (
          <Card key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start", padding: "20px 28px" }}>
            <span style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.1em", minWidth: 24, paddingTop: 2 }}>{String(i + 1).padStart(2, "0")}</span>
            <p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{ins}</p>
          </Card>
        ))}
      </div>
      <Divider />
      <Label>Ключові цитати</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        <Card><p style={{ color: TEXT, fontSize: 18, lineHeight: 1.65, fontWeight: 500, margin: "0 0 14px", fontStyle: "italic" }}>«Ядро продукту — це не Tranzzo Acquiring, а Tranzzo Payment Orchestrator. Це зміна парадигми позиціонування.»</p><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em" }}>— Ріта, CEO</span></Card>
        <Card><p style={{ color: TEXT, fontSize: 18, lineHeight: 1.65, fontWeight: 500, margin: "0 0 14px", fontStyle: "italic" }}>«Ми збільшуємо дохід наших партнерів.»</p><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.18em" }}>— Таня, Український ринок</span></Card>
      </div>
      <Divider />
      <Label>Ключові інсайти</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {keyInsights.map(ins => (
          <Card key={ins.num} style={{ display: "flex", gap: 28, alignItems: "flex-start" }}>
            <div style={{ fontSize: 13, color: ACCENT, fontWeight: 700, letterSpacing: "0.12em", minWidth: 28, paddingTop: 3 }}>{ins.num}</div>
            <div><h3 style={{ color: TEXT, fontSize: 16, fontWeight: 700, margin: "0 0 8px", lineHeight: 1.35 }}>{ins.title}</h3><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{ins.text}</p></div>
          </Card>
        ))}
      </div>
    </div>
  );
}

function Tab1020Years() {
  const capabilities = ["Поглинати менші компанії та інтегрувати їх у свою екосистему","Визначати стратегічні напрямки для індустрії, а не слідувати за ними","Обирати, з ким партнеритися, а не боротися за увагу","Генерувати інноваційні продукти, які встановлюють нові стандарти"];
  const milestones = [{ icon: "15%", label: "Частка українського ринку" },{ icon: "Топ-2", label: "Позиція на українському ринку" },{ icon: "2–3", label: "Нові міжнародні ринки" }];
  const blocks = [{ title: "Позиція на ринку", text: "Tranzzo входить у топ-2 лідерів в Україні і перетворився на технологічний хаб між банками, фінтехом і бізнесом. Замінити Tranzzo означає перебудувати весь операційний фундамент." },{ title: "Продуктова зрілість", text: "Сформована екосистема зрілих продуктів далеко за межами класичного процесингу. Процеси стандартизовані — компанія масштабується без пропорційного збільшення команди." },{ title: "Міжнародна присутність", text: "Підтверджені success-кейси виходу на 2–3 нові ринки: Європа закріплена, перші позиції в Африці та Латинській Америці. Позиція на ринку оркестрації — стандартоутворювальна." }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>Через 10–20 років</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 20px", maxWidth: 640 }}>Від платіжного провайдера —<br />до <span style={{ color: ACCENT }}>глобальної платформи</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: 0 }}>Два горизонти, одна амбіція.</p>
      <Divider />
      <Label>Через 10 років</Label>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Зріла корпорація. Критична інфраструктура.</h2>
      <div style={{ display: "flex", gap: 12, marginBottom: 24, flexWrap: "wrap" }}>
        {milestones.map((m, i) => (<Card key={i} style={{ flex: "1 1 160px", textAlign: "center", padding: "24px 20px" }}><div style={{ fontSize: 26, fontWeight: 800, color: ACCENT, marginBottom: 6 }}>{m.icon}</div><div style={{ fontSize: 12, color: MUTED, lineHeight: 1.5 }}>{m.label}</div></Card>))}
      </div>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {blocks.map((b, i) => (<Card key={i}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>{b.title}</div><p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>{b.text}</p></Card>))}
      </div>
      <Divider />
      <Label>Через 15–20 років</Label>
      <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 800, margin: "0 0 8px", letterSpacing: "-0.02em" }}>Глобальна платіжно-фінансова платформа.</h2>
      <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.7, marginBottom: 24 }}>Модель ближче до Revolut — велика корпорація з присутністю в кількох регіонах світу.</p>
      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 24 }}>
        {capabilities.map((cap, i) => (<Card key={i} style={{ display: "flex", gap: 18, alignItems: "flex-start", padding: "18px 24px" }}><span style={{ color: ACCENT, fontSize: 16, marginTop: 1, flexShrink: 0 }}>→</span><p style={{ color: TEXT, fontSize: 15, lineHeight: 1.65, margin: 0 }}>{cap}</p></Card>))}
      </div>
      <Card style={{ background: TEXT, borderRadius: 20, marginBottom: 16 }}><p style={{ color: "#FFFFF0", fontSize: 18, lineHeight: 1.6, fontWeight: 500, margin: "0 0 16px", fontStyle: "italic" }}>«Ми обираємо, кого купити.»</p><span style={{ fontSize: 11, color: "rgba(255,255,240,0.45)", textTransform: "uppercase", letterSpacing: "0.18em" }}>— Данило</span></Card>
      <Card><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 10 }}>Бренд-позиція</div><p style={{ color: TEXT, fontSize: 15, lineHeight: 1.75, margin: 0 }}>Tranzzo сприймається не як українська платіжка, а як <strong>глобальний фінтех-бренд з українським корінням</strong> — десь між Stripe та Revolut за масштабом амбіцій.</p></Card>
    </div>
  );
}

function TabWhat() {
  const verticals = [{ num: "01", title: "Еквайринг (Україна)", text: "Tranzzo виступає платіжним провайдером для різних вертикалей бізнесу. Зв'язує мерчанта з банками, дає повне рішення: від налаштування платіжних процесів до фінансового обліку. Клієнт отримує не просто прийом платежів — а партнера, який бере на себе всю складну платіжну рутину." },{ num: "02", title: "White Label", text: "Технологічне рішення, яке дозволяє партнерам запустити власний платіжний продукт під своїм брендом на базі інфраструктури Tranzzo. Для компаній, яким дорого і довго будувати платіжну інфраструктуру з нуля." },{ num: "03", title: "Payment Orchestrator (міжнародний ринок)", text: "Суто технологічний продукт для компаній, які вже мають контракти з банками та PSP і потребують єдиної платформи: маршрутизація, балансування, фейловер, аналітика." }];
  const voices = [{ quote: "Ми допомагаємо бізнесу зростати — через сервіси Tranzzo бізнес збільшує портфель, виходить на нові ринки, масштабує операції.", author: "Данило, Юлія" },{ quote: "Ми допомагаємо керувати ревеню та грошовими потоками: маршрутизація між провайдерами, оптимізація конверсії, аналітика.", author: "Таня" },{ quote: "Ми закриваємо всі потреби мерчанта, не тільки процесинг — ПРРО, інструменти для ФОП, аналітика.", author: "Юрій" },{ quote: "Ми звільняємо клієнта від складної платіжної рутини. Ідеальний результат — коли клієнт згадує про Tranzzo тільки щоб надіслати подарунок на свято.", author: "Ріта, CEO" }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>What?</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Що робить <span style={{ color: ACCENT }}>Tranzzo?</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Технологічна платіжна платформа, яка допомагає бізнесу зростати, керуючи його грошовими потоками з максимальною ефективністю.</p>
      <GoldenCircle active="What" />
      <Divider />
      <Label>Три продуктові вертикалі</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {verticals.map(v => (<Card key={v.num} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}><span style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.1em", minWidth: 24, paddingTop: 3 }}>{v.num}</span><div><div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{v.title}</div><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{v.text}</p></div></Card>))}
      </div>
      <Divider />
      <Label>Голоси команди</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {voices.map((v, i) => (<Card key={i}><p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px" }}>«{v.quote}»</p><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.15em" }}>— {v.author}</span></Card>))}
      </div>
      <Divider />
      <Card style={{ background: TEXT }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Висновок</div><p style={{ color: "#FFFFF0", fontSize: 17, lineHeight: 1.75, margin: 0 }}>Tranzzo — це не просто платіжний провайдер. Це технологічний партнер, який бере на себе всю складність платежів і дає бізнесу єдине вікно входу: еквайринг, оркестрація, white label.</p></Card>
    </div>
  );
}

function TabHow() {
  const sauce = [{ num: "01", title: "Люди і їхня експертиза", text: "Головна конкурентна перевага — не технологія, а люди. Спеціалісти Tranzzo розуміють, як працює бізнес клієнта: фінансові процеси, воронки, операційну модель. Поріг входу надзвичайно високий — саме ця «дорога» експертиза створює якість, яку конкуренти не можуть відтворити масово." },{ num: "02", title: "Гнучкість і адаптивність системи", text: "Tranzzo здатен змінити логіку роботи системи під конкретного клієнта — те, чого не може жодна коробка. «Йти за швидкістю розвитку партнера — не відставати, а тримати темп.»" },{ num: "03", title: "Ми знаємо, як провести платіж там, де інші не можуть", text: "Smart Routing: там, де один провайдер не може обробити транзакцію — Tranzzo автоматично знаходить шлях через інший. Там, де конкуренти місяцями ігнорують запит, Tranzzo закатує рукава і робить." },{ num: "04", title: "Швидкість і якість підтримки", text: "«Де місяцями не звертають увагу, ми чуємо, робимо, закатуємо рукава.» Це створює довіру і перетворює Tranzzo на партнера, від якого не хочуть відмовлятися." },{ num: "05", title: "Кастомізація під будь-який бізнес", text: "Tranzzo — не коробка. Кастомна платіжна логіка, нестандартні моделі розрахунків. Коли рішення побудоване під тебе, переключитися означає перебудувати все з нуля." },{ num: "06", title: "Команда, яка вірить у те, що робить", text: "«Команда просто йде і єбашить кожен день, не дивлячись ні на що — на війну, на обстріли, на обставини.» У команді дуже багато енергії — це і є секретний соус. — Ріта, CEO" }];
  const diff = [{ label: "vs Банки (Mono, Приват)", text: "Банки — бюрократична машина без індивідуального підходу. Tranzzo: глибоке занурення в бізнес клієнта. Банк дає стандарт — Tranzzo дає партнерство." },{ label: "vs Коробки (LiqPay, WFPay)", text: "Коробка не адаптується під складний кейс. Tranzzo перебудовує логіку під клієнта і закриває запити, які коробкові рішення навіть не беруть у роботу." },{ label: "vs Міжнародні оркестратори", text: "PaymentIQ, Corefy, Praxis — суто технологічні прошарки. Tranzzo поєднує технологію оркестрації з глибокою бізнес-експертизою і людським підходом." }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>How?</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Як саме Tranzzo<br /><span style={{ color: ACCENT }}>це робить?</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Secret Sauce — команда з глибокою експертизою, яка чує бізнес клієнта і адаптує систему під будь-який запит зі швидкістю, недосяжною для конкурентів.</p>
      <GoldenCircle active="How" />
      <Divider />
      <Label>6 складових Secret Sauce</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {sauce.map(s => (<Card key={s.num} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}><span style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.1em", minWidth: 24, paddingTop: 3 }}>{s.num}</span><div><div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{s.title}</div><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{s.text}</p></div></Card>))}
      </div>
      <Divider />
      <Label>Диференціація від конкурентів</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {diff.map((d, i) => (<Card key={i} style={{ display: "flex", gap: 20, alignItems: "flex-start" }}><span style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.05em", minWidth: 180, paddingTop: 2, flexShrink: 0 }}>{d.label}</span><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{d.text}</p></Card>))}
      </div>
      <Divider />
      <Card style={{ background: TEXT }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Висновок</div><p style={{ color: "#FFFFF0", fontSize: 17, lineHeight: 1.75, margin: 0 }}>Secret Sauce Tranzzo — це поєднання глибокої людської експертизи, гнучкої системи і культури, яка не визнає «неможливо». Наступний крок: запакувати накопичену експертизу в продуктизовані рішення, зберігаючи enterprise-напрямок як «бутикову» лінійку.</p></Card>
    </div>
  );
}

function TabWhy() {
  const layers = [{ num: "01", title: "Функціональна місія — ЩО ми робимо для світу", text: "Звільняємо бізнес від складності платежів. Робимо платіжний функціонал простим, зрозумілим і непомітним. Даємо бізнесу можливість зростати, не думаючи про те, як працюють його платежі." },{ num: "02", title: "Віра — У ЩО ми віримо", text: "Майбутнє економіки нерозривно пов'язане з фінтехом. Кожна потреба, кожна ідея, кожне рішення людини з часом буде потребувати проведення платежу онлайн. Той, хто будує цю інфраструктуру якісно — будує фундамент майбутнього." },{ num: "03", title: "Ідентичність — ХТО ми такі і чому саме ми", text: "Ми — сильна команда, яка вірить у свій продукт, горить фінтехом і здатна змінювати правила гри. Ми не граємо за правилами ринку, де перемагають зв'язки та інерція." }];
  const voices = [{ quote: "Кожен у цій команді вірить, що продукт Tranzzo унікальний і може бути кращим за конкурентів. Ми існуємо, щоб показати партнерам, що можна краще.", author: "Тетяна Товарницька" },{ quote: "Ми існуємо, бо віримо, що сильна команда може змінювати правила гри і будувати фінансову інфраструктуру, яка реально працює для бізнесу.", author: "Таня" },{ quote: "Мені подобається фінтех. Я вірю, що цей сегмент буде завжди динамічно розвиватися. Ми існуємо, щоб допомагати бізнесу рости разом із ним.", author: "Данило" },{ quote: "Наша команда просто йде і єбашить кожен день, не дивлячись ні на що — на війну, на обстріли, на обставини. Ми існуємо, щоб платіжний функціонал став простим для кожного.", author: "Юлія" },{ quote: "Tranzzo існує, щоб завжди відкривати нові можливості для зростання бізнесів — майбутнє економіки тісно пов'язане з фінтехом.", author: "Юрій" },{ quote: "Ми існуємо, щоб звільнити клієнта від складної платіжної рутини. Платежі мають працювати непомітно.", author: "Ріта, CEO" }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>Why?</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Чому існує<br /><span style={{ color: ACCENT }}>Tranzzo?</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Місія, сенс і причина існування бренду — синтезоване бачення команди.</p>
      <GoldenCircle active="Why" />
      <Divider />
      <Label>Три шари Why</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {layers.map(l => (<Card key={l.num} style={{ display: "flex", gap: 24, alignItems: "flex-start" }}><span style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.1em", minWidth: 24, paddingTop: 3 }}>{l.num}</span><div><div style={{ fontSize: 15, fontWeight: 700, color: TEXT, marginBottom: 8 }}>{l.title}</div><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{l.text}</p></div></Card>))}
      </div>
      <Divider />
      <Label>Голоси команди</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
        {voices.map((v, i) => (<Card key={i}><p style={{ color: TEXT, fontSize: 15, lineHeight: 1.7, fontStyle: "italic", margin: "0 0 12px" }}>«{v.quote}»</p><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.15em" }}>— {v.author}</span></Card>))}
      </div>
      <Divider />
      <Card style={{ marginBottom: 12 }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Синтезоване Why</div><p style={{ color: TEXT, fontSize: 16, lineHeight: 1.8, margin: 0, fontWeight: 500 }}>Ми існуємо, щоб звільнити бізнес від складності платежів і дати йому інструменти для зростання — щоб платежі працювали непомітно, а бізнес міг сфокусуватися на тому, що дійсно важливо.</p></Card>
      <Card style={{ background: TEXT }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Висновок</div><p style={{ color: "#FFFFF0", fontSize: 17, lineHeight: 1.75, margin: 0 }}>Tranzzo існує, бо ці конкретні люди не готові миритися з тим, як працює ринок. Не готові миритися з посередньою якістю, зі складністю платіжних процесів, з тим, що зв'язки перемагають якість. Це реальна рушійна сила, яка робить Tranzzo небезпечним конкурентом для тих, хто давно розслабився.</p></Card>
    </div>
  );
}

function TabValues() {
  const values = [{ num: "01", icon: "◈", title: "Експертиза людей", short: "Наша сила — не в технології, а в людях, які за нею стоять.", text: "Це конкретне переконання: головний актив Tranzzo — люди з глибоким досвідом, які розуміють бізнес клієнта зсередини і здатні вирішувати задачі, за які інші навіть не беруться. Цю силу неможливо скопіювати.", voices: [{ quote: "Команда — це люди, які шукають рішення, а не причини.", author: "Таня" },{ quote: "Компетенція — це головне, що відрізняє нас від ринку.", author: "Ріта, CEO" }] },{ num: "02", icon: "◎", title: "Результат, а не процес", short: "Ми не шукаємо причин — ми шукаємо рішення.", text: "Відповідальність за результат відділяє Tranzzo від «процесних» компаній. Команда працює в умовах війни, обстрілів, нестабільності — і не зупиняється. Це не декларація для сайту, а опис того, як ці люди фактично живуть.", voices: [{ quote: "Ми відповідаємо за результат, а не процес.", author: "Таня" },{ quote: "У команді дуже багато енергії. На інших ринках вже всі напівмертві.", author: "Ріта, CEO" }] },{ num: "03", icon: "◇", title: "Рух уперед", short: "Будуємо те, що буде потрібно завтра — не повторюємо вчорашнє.", text: "Tranzzo мислить себе як живий організм. Технологічно — готовність до інновацій. Культурно — відкритість до зворотного зв'язку. Стратегічно — здатність розвернутися на 180°, якщо ринок цього вимагає.", voices: [{ quote: "Ми здатні розвернутися на 180° за секунду.", author: "Юлія" },{ quote: "Прогресивність і відкритість — це не опція, це спосіб виживання.", author: "Данило" }] }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>3 Цінності</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Що тримає <span style={{ color: ACCENT }}>Tranzzo</span> разом?</h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Три цінності, що проступили під час Brand Sprint — не зі стратегічного документу, а з живої розмови команди.</p>
      <Divider />
      {values.map((v, i) => (
        <div key={v.num}>
          <div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 20 }}>
            <span style={{ fontSize: 22, color: ACCENT, lineHeight: 1, paddingTop: 4 }}>{v.icon}</span>
            <div>
              <div style={{ fontSize: 11, color: MUTED, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 6 }}>{v.num}</div>
              <h2 style={{ color: TEXT, fontSize: 28, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 8px" }}>{v.title}</h2>
              <p style={{ color: ACCENT, fontSize: 16, fontWeight: 600, margin: "0 0 16px", fontStyle: "italic" }}>«{v.short}»</p>
              <p style={{ color: MUTED, fontSize: 15, lineHeight: 1.75, maxWidth: 620, margin: "0 0 20px" }}>{v.text}</p>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 0 }}>
            {v.voices.map((q, j) => (<Card key={j} style={{ padding: "18px 24px" }}><p style={{ color: TEXT, fontSize: 14, fontStyle: "italic", margin: "0 0 8px", lineHeight: 1.65 }}>«{q.quote}»</p><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.15em" }}>— {q.author}</span></Card>))}
          </div>
          {i < values.length - 1 && <Divider />}
        </div>
      ))}
      <Divider />
      <Card style={{ background: TEXT }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Як цінності пов'язані між собою</div><p style={{ color: "#FFFFF0", fontSize: 15, lineHeight: 1.8, margin: 0 }}><strong style={{ color: ACCENT }}>Експертиза</strong> дає право голосу. <strong style={{ color: ACCENT }}>Відповідальність за результат</strong> перетворює цю експертизу на дію. <strong style={{ color: ACCENT }}>Прогресивність</strong> не дає їй закостеніти — компанія шукає те, що буде працювати завтра.</p></Card>
    </div>
  );
}

function TabAudience() {
  const audiences = [{ num: "01", icon: "⬡", label: "Enterprise & Tech", title: "Бізнес, який переріс свого провайдера", who: "Фінтех, геймінг, маркетплейси, high-risk, міжнародні проєкти. Компанії з великим обсягом платежів і потребою в кастомній архітектурі.", decision: "Payment Manager, Head of Payments, CFO, CTO, CPO", pains: ["Падає конверсія і відмови платежів","Залежність від одного провайдера","Стандартні рішення не закривають специфіку","Потрібна гнучкість, яку банки не дають"], value: "Глибоке занурення, кастомна архітектура, Smart Routing, White Label. Tranzzo стає частиною ядра бізнесу — ядра, яке не змінюють.", why: "Довгий цикл запуску, але високий LTV і «липкість». Перейти до іншого провайдера = перебудувати все з нуля.", channels: "Прямі продажі · Конференції · Кейс-стаді · LinkedIn" },{ num: "02", icon: "⬢", label: "SMB & Entrepreneurs", title: "Підприємець, який хоче просто працювати", who: "Власники малого та середнього бізнесу, e-commerce, стартапи. Для них платежі — один із ста пунктів у списку задач.", decision: "CEO / власник — часто одна і та сама людина", pains: ["Не хочуть думати про платежі","Потрібне рішення, яке працює одразу","Не розуміють, чим Tranzzo може бути корисним","Ніколи не мали справи з платіжною інфраструктурою"], value: "Коробкове рішення з автоонбордингом, мінімальний time-to-live (ідеал — 1 день), зрозумілий продукт без кастомних доробок.", why: "Менша маржа на клієнта, але більший обсяг і швидший цикл. Шлях до прибутковості. «Enterprise — luxury, SMB — mass market.» — Ріта", channels: "Соцмережі · Контент-маркетинг · PLG · Сайт" },{ num: "03", icon: "⬟", label: "Partners & Ecosystem", title: "Партнери, які формують екосистему", who: "Еквайрери та банки, лідогенеративні платформи, Visa/Mastercard. Артикулювала Юлія — окремий пріоритет.", decision: "Partnership Manager, BD, C-level", pains: ["Tranzzo невидимий як технологічна компанія з амбіцією","Комунікація не відрізняється від комунікації з клієнтами","Бракує позиціонування як рівноцінного партнера"], value: "Три типи: еквайрери (фундамент бізнесу), лідогенеративні платформи (органічний потік), продуктові партнери Visa/MC.", why: "Без банків Tranzzo фізично не може надавати послуги. Без партнерів — не масштабується органічно.", channels: "Корпоративний LinkedIn · Конференції · Технічний контент" }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>Аудиторії</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Для кого існує <span style={{ color: ACCENT }}>Tranzzo?</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Три аудиторії — три принципово різні потреби, цикли і канали комунікації.</p>
      <Divider />
      {audiences.map((a, i) => (
        <div key={a.num}>
          <div style={{ display: "flex", gap: 10, alignItems: "center", marginBottom: 20 }}>
            <span style={{ fontSize: 20, color: ACCENT }}>{a.icon}</span>
            <span style={{ fontSize: 11, color: MUTED, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase" }}>{a.num} — {a.label}</span>
          </div>
          <h2 style={{ color: TEXT, fontSize: 26, fontWeight: 800, letterSpacing: "-0.02em", margin: "0 0 24px" }}>{a.title}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <Card style={{ padding: "20px 24px" }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Хто вони</div><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 10px" }}>{a.who}</p><p style={{ color: MUTED, fontSize: 12, margin: 0 }}><strong style={{ color: TEXT }}>Хто вирішує:</strong> {a.decision}</p></Card>
            <Card style={{ padding: "20px 24px" }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Їхні болі</div><div style={{ display: "flex", flexDirection: "column", gap: 8 }}>{a.pains.map((p, j) => (<div key={j} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}><span style={{ color: ACCENT, fontSize: 14, marginTop: 1, flexShrink: 0 }}>–</span><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{p}</p></div>))}</div></Card>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap" }}>
              <Card style={{ flex: "1 1 240px", padding: "20px 24px" }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Що дає Tranzzo</div><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: 0 }}>{a.value}</p></Card>
              <Card style={{ flex: "1 1 200px", padding: "20px 24px" }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 8 }}>Чому важливо</div><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.7, margin: "0 0 12px" }}>{a.why}</p><div style={{ fontSize: 11, color: MUTED, borderTop: `1px solid ${BORDER}`, paddingTop: 10, letterSpacing: "0.05em" }}>{a.channels}</div></Card>
            </div>
          </div>
          {i < audiences.length - 1 && <Divider />}
        </div>
      ))}
    </div>
  );
}

function TabCompetitors() {
  const levels = [{ label: "Структурні переваги", sub: "Неможливо скопіювати швидко", icon: "▲", items: ["Банківська ліцензія і низька собівартість операції","Прибутковість і ресурс для реінвестування","Екосистема продуктів, що закриває будь-які потреби"] },{ label: "Ринкові переваги", sub: "Створені роками присутності", icon: "●", items: ["Велика аудиторія і сформовані бізнес-відносини","Хардове позиціонування як топа на ринку","Репутаційна інерція"] },{ label: "Операційні переваги", sub: "Можна побороти або повторити", icon: "◆", items: ["Чітка ніша та розуміння свого клієнта","Швидкий go-to-market","Фокус на одному сегменті без розпилення"] }];
  const responses = [{ author: "Данило", against: "проти великої аудиторії", text: "Не копіювати конкурентів, а бути іншими. Мати своє позиціонування, яке пояснює, чому саме Tranzzo має бути корисним. Відкусити шматок за рахунок унікальної ціннісної пропозиції." },{ author: "Тетяна", against: "проти хардового позиціонування", text: "Збільшити портфель партнерів у обраному напрямку і заробити репутацію через реальні результати. Зробити так, щоб клієнти самі говорили про Tranzzo." },{ author: "Таня", against: "проти чіткої ніші і go-to-market", text: "Вибрати 2–3 ключових сегменти (фінтех, геймінг), заглибитися в них і навчитися відмовлятися від нерелевантних клієнтів. Запустити автоонбординг, скоротити time-to-live до 1 дня." },{ author: "Юлія", against: "проти низької собівартості", text: "В ідеалі — отримати статус банку-еквайрера (горизонт: 10+ років). Тактично зараз — фокус на невеликих еквайрерах-новачках, які готові давати кращі умови." },{ author: "Юрій", against: "проти екосистеми і фокусу конкурентів", text: "Потрібна чітка стратегія. Все для реалізації є — люди, експертиза, продукт. Не вистачає стратегічного фокусу і дисципліни не відволікатися на все підряд." },{ author: "Ріта, CEO", against: "проти прибутковості конкурентів", text: "Визначитися, хто ми такі, в якій ніші працюємо, стати в цій ніші лідерами. Фокус — єдина альтернатива грошам. Вибрати один фронт і перемогти на ньому." }];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>Конкуренти</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Де конкуренти <span style={{ color: ACCENT }}>сильніші</span> — і що з цим робити</h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Команда чесно визначила суперсили конкурентів і сформулювала конкретні відповіді.</p>
      <Divider />
      <Label>Зведена карта суперсил</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 12 }}>
        {levels.map((l, i) => (<Card key={i} style={{ padding: "22px 28px" }}><div style={{ display: "flex", gap: 12, alignItems: "flex-start" }}><span style={{ color: ACCENT, fontSize: 18, paddingTop: 2, flexShrink: 0 }}>{l.icon}</span><div style={{ flex: 1 }}><div style={{ display: "flex", gap: 12, alignItems: "baseline", flexWrap: "wrap", marginBottom: 12 }}><span style={{ fontSize: 15, fontWeight: 700, color: TEXT }}>{l.label}</span><span style={{ fontSize: 11, color: MUTED, textTransform: "uppercase", letterSpacing: "0.12em" }}>{l.sub}</span></div><div style={{ display: "flex", flexDirection: "column", gap: 6 }}>{l.items.map((item, j) => (<div key={j} style={{ display: "flex", gap: 8, alignItems: "flex-start" }}><span style={{ color: BORDER, fontSize: 12, marginTop: 3 }}>–</span><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.6, margin: 0 }}>{item}</p></div>))}</div></div></div></Card>))}
      </div>
      <div style={{ background: "#FFF5F2", borderRadius: 20, padding: "20px 24px", border: `1px solid #FDDDD5`, marginBottom: 0 }}><p style={{ color: TEXT, fontSize: 14, lineHeight: 1.75, margin: 0 }}><strong>Ключовий висновок:</strong> конкурувати в лоб на перших двох рівнях Tranzzo зараз не може. Але третій рівень — операційні переваги — це зона, де компанія може виграти вже сьогодні.</p></div>
      <Divider />
      <Label>Відповіді команди</Label>
      <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
        {responses.map((r, i) => (<Card key={i} style={{ padding: "22px 28px" }}><div style={{ display: "flex", gap: 12, alignItems: "flex-start", marginBottom: 10, flexWrap: "wrap" }}><span style={{ fontSize: 13, fontWeight: 700, color: TEXT }}>{r.author}</span><span style={{ fontSize: 11, color: ACCENT, textTransform: "uppercase", letterSpacing: "0.12em", paddingTop: 1 }}>{r.against}</span></div><p style={{ color: MUTED, fontSize: 14, lineHeight: 1.75, margin: 0 }}>{r.text}</p></Card>))}
      </div>
      <Divider />
      <Card style={{ background: TEXT }}><div style={{ fontSize: 11, color: ACCENT, fontWeight: 700, letterSpacing: "0.15em", textTransform: "uppercase", marginBottom: 12 }}>Висновок</div><p style={{ color: "#FFFFF0", fontSize: 15, lineHeight: 1.8, margin: 0 }}><strong style={{ color: ACCENT }}>Фокус — єдина альтернатива грошам.</strong> Не боротися по всіх фронтах, а вибрати 2–3 ніші, де Tranzzo вже сильний, і стати там незамінним. Перемога в одній ніші відкриває двері до наступної.</p></Card>
    </div>
  );
}

function TabToV() {
  const tovTags = ["експертний","впевнений","дружній","бунтарський","партнерський","надійний","технологічний","прямий","з повагою","без пафосу","орієнтований на результат","відкритий до викликів","елітарний за суттю","дорослий","непомітна досконалість"];
  const antiTags = ["бюрократичний","формальний","шаблонний","легковажний","панібратський","пафосний","Royal Premium VIP","наслідувальний","застарілий","повільний","зверхній","нав'язливий","порожньо-інноваційний","безликий","корпоративно-мертвий"];
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>ToV</Label>
      <h1 style={{ color: TEXT, fontSize: 48, fontWeight: 800, lineHeight: 1.1, letterSpacing: "-0.03em", margin: "0 0 16px", maxWidth: 600 }}>Як звучить <span style={{ color: ACCENT }}>Tranzzo?</span></h1>
      <p style={{ color: MUTED, fontSize: 16, lineHeight: 1.7, maxWidth: 520, margin: "0 0 48px" }}>Tone of Voice — це характер бренду. Те, як ми говоримо, і те, чим ми свідомо не є.</p>
      <Divider />
      <div style={{ display: "flex", gap: 20, flexWrap: "wrap", marginBottom: 24 }}>
        <div style={{ flex: "0 0 220px", display: "flex", flexDirection: "column", gap: 12 }}>
          {["Бренд позиціонує себе ближче до експертного сегменту, але без зайвої дистанції","Команда прагне до балансу між серйозністю і людяністю","Філософія: клієнт — це партнер, якому довіряють"].map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
              <span style={{ color: ACCENT, fontSize: 16, flexShrink: 0, marginTop: 2 }}>•</span>
              <p style={{ color: TEXT, fontSize: 14, lineHeight: 1.65, margin: 0 }}>{t}</p>
            </div>
          ))}
          <div style={{ marginTop: 8, background: TEXT, borderRadius: 16, padding: "20px" }}>
            <p style={{ color: "#FFFFF0", fontSize: 13, lineHeight: 1.6, margin: "0 0 4px" }}>• Бренд — порушник правил, який пливе проти течії</p>
            <p style={{ color: ACCENT, fontSize: 12, fontStyle: "italic", margin: "0 0 12px" }}>«Ми не граємо за старими правилами ринку»</p>
            <p style={{ color: "#FFFFF0", fontSize: 13, lineHeight: 1.6, margin: 0 }}>• Попри класичну технологічну основу, бренд тяжіє до інновацій та самобутності</p>
          </div>
        </div>
        <div style={{ flex: "1 1 300px", background: ACCENT, borderRadius: 20, padding: "32px" }}>
          <h2 style={{ color: "#fff", fontSize: 24, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Голос «Tranzzo»</h2>
          <p style={{ color: "#fff", fontSize: 15, lineHeight: 1.75, margin: "0 0 16px" }}>— це впевнений, експертний голос, який не потребує гучних слів, бо за ним стоять реальні результати. Ми говоримо як партнер, який глибоко розуміє твій бізнес — без пафосу та порожніх обіцянок, але з відчуттям внутрішньої сили та готовності до будь-якого виклику.</p>
          <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 15, lineHeight: 1.75, margin: "0 0 28px" }}>Ми не граємо за старими правилами ринку. Нас обирають не тому, що ми найгучніші, а тому, що ми закатуємо рукава і робимо там, де інші кажуть «це неможливо».</p>
          <p style={{ color: "#fff", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 14px" }}>Tone of Voice:</p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {tovTags.map((tag, i) => (<span key={i} style={{ background: "rgba(255,255,255,0.18)", color: "#fff", fontSize: 12, padding: "5px 12px", borderRadius: 100, fontWeight: 500 }}>{tag}</span>))}
          </div>
        </div>
      </div>
      <div style={{ background: TEXT, borderRadius: 20, padding: "32px" }}>
        <h2 style={{ color: "#FFFFF0", fontSize: 24, fontWeight: 800, margin: "0 0 20px", letterSpacing: "-0.02em" }}>Антиголос «Tranzzo»</h2>
        <p style={{ color: "rgba(255,255,240,0.7)", fontSize: 15, lineHeight: 1.75, margin: "0 0 16px" }}>— це все, чим ми свідомо не є. Якщо щось у комунікації Tranzzo звучить як один із цих патернів — значить, щось пішло не так.</p>
        <p style={{ color: "rgba(255,255,240,0.7)", fontSize: 15, lineHeight: 1.75, margin: "0 0 28px" }}>Ми не сухі й формальні, як банк. Ми не легковажні, як стартап, якому все «файно». Ми не пафосні і не копія когось більшого — ні Stripe, ні Mono. І ми точно не «діди ринку», які 20 років роблять одне й те саме.</p>
        <p style={{ color: "#FFFFF0", fontSize: 13, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.12em", margin: "0 0 14px" }}>Антипатерни:</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {antiTags.map((tag, i) => (<span key={i} style={{ background: "rgba(255,255,240,0.08)", color: "rgba(255,255,240,0.5)", fontSize: 12, padding: "5px 12px", borderRadius: 100, fontWeight: 500, border: "1px solid rgba(255,255,240,0.12)", textDecoration: "line-through" }}>{tag}</span>))}
        </div>
      </div>
    </div>
  );
}

function Placeholder({ label }) {
  return (
    <div style={{ fontFamily: "Inter,sans-serif" }}>
      <Label>{label}</Label>
      <p style={{ color: MUTED, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.18em" }}>Coming soon</p>
    </div>
  );
}

const CONTENT = {
  five: <Tab5Years />,
  tenwenty: <Tab1020Years />,
  what: <TabWhat />,
  how: <TabHow />,
  why: <TabWhy />,
  values: <TabValues />,
  audience: <TabAudience />,
  competitors: <TabCompetitors />,
  tov: <TabToV />,
};

export default function App() {
  const [activeTab, setActiveTab] = useState("five");
  const [pdfLoading, setPdfLoading] = useState(false);
  const topRef = useRef(null);
  const tab = TABS.find(t => t.id === activeTab);

  useEffect(() => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  const handlePDF = async () => {
    setPdfLoading(true);
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = async () => {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: "portrait", unit: "mm", format: "a4" });
      const pw = doc.internal.pageSize.getWidth();
      const ph = doc.internal.pageSize.getHeight();
      const margin = 20;
      const maxW = pw - margin * 2;
      let y = margin;

      const addPage = () => { doc.addPage(); y = margin; };
      const checkY = (needed = 10) => { if (y + needed > ph - margin) addPage(); };

      const drawAccentLine = () => {
        doc.setDrawColor(245, 87, 51);
        doc.setLineWidth(0.5);
        doc.line(margin, y, pw - margin, y);
        y += 5;
      };

      const sections = [
        { id: "five", label: "Через 5 років" },
        { id: "tenwenty", label: "Через 10–20 років" },
        { id: "what", label: "What?" },
        { id: "how", label: "How?" },
        { id: "why", label: "Why?" },
        { id: "values", label: "3 Цінності" },
        { id: "audience", label: "Аудиторії" },
        { id: "competitors", label: "Конкуренти" },
        { id: "tov", label: "Tone of Voice" },
      ];

      const contentMap = {
        "five": [
          { type: "h1", text: "Що буде з вашим бізнесом через 5 років?" },
          { type: "body", text: "Результати командного Brand Sprint — стратегічне бачення, амбіції та ключові зрушення, які визначать напрямок Tranzzo." },
          { type: "label", text: "ІНСАЙТИ КОМАНДИ" },
          { type: "list", items: ["Вийти на прибутковість і точку беззбитковості","Перестати бути «просто платіжкою» — стати платіжним партнером для бізнесу","Ядро продукту — Payment Orchestrator, а не еквайринг","Зайняти лідерську позицію в 2–3 конкретних нішах в Україні","Фокус на 3–4 напрямки замість «бути про все»","Сформувати екосистему: онлайн, офлайн, крипто, open banking","Увійти в топ-5–10 payment-оркестраторів на міжнародному ринку","Побудувати потужний технічний бренд","Конкуренти сприймають Tranzzo як реальну загрозу"] },
          { type: "label", text: "КЛЮЧОВІ ЦИТАТИ" },
          { type: "quote", text: "«Ядро продукту — це не Tranzzo Acquiring, а Tranzzo Payment Orchestrator. Це зміна парадигми позиціонування.»", author: "— Ріта, CEO" },
          { type: "quote", text: "«Ми збільшуємо дохід наших партнерів.»", author: "— Таня, Український ринок" },
          { type: "label", text: "КЛЮЧОВІ ІНСАЙТИ" },
          { type: "numbered", items: ["Зміна парадигми: від еквайрингу до оркестрації — Tranzzo перестає змагатися з банками і класичними PSP.","Критична проблема — розфокус. Потрібно звузити фокус до 3–4 ніш.","Два вектори масштабування: enterprise + коробкове рішення для SMB.","Від «платіжки» до платіжного партнера — стати першим іменем у питаннях платежів."] },
        ],
        "tenwenty": [
          { type: "h1", text: "Від платіжного провайдера до глобальної платформи" },
          { type: "label", text: "ЧЕРЕЗ 10 РОКІВ" },
          { type: "body", text: "Зріла корпорація з ~15% українського ринку, позиція Топ-2, вихід на 2–3 міжнародних ринки. Tranzzo — критична інфраструктура для клієнтів, яку не замінюють." },
          { type: "label", text: "ЧЕРЕЗ 15–20 РОКІВ" },
          { type: "body", text: "Глобальна платіжно-фінансова платформа. Модель ближче до Revolut: поглинання компаній, визначення стандартів індустрії, вибір партнерів." },
          { type: "quote", text: "«Ми обираємо, кого купити.»", author: "— Данило" },
          { type: "body", text: "Бренд-позиція: глобальний фінтех-бренд з українським корінням — між Stripe та Revolut за масштабом амбіцій." },
        ],
        "what": [
          { type: "h1", text: "Що робить Tranzzo?" },
          { type: "body", text: "Технологічна платіжна платформа, яка допомагає бізнесу зростати, керуючи його грошовими потоками з максимальною ефективністю." },
          { type: "label", text: "ТРИ ПРОДУКТОВІ ВЕРТИКАЛІ" },
          { type: "numbered", items: ["Еквайринг (Україна) — повне рішення для мерчанта: від платіжних процесів до фінансового обліку.","White Label — технологічне рішення для партнерів, які хочуть запустити власний платіжний продукт.","Payment Orchestrator (міжнародний) — єдина платформа для управління всіма провайдерами."] },
          { type: "label", text: "ГОЛОСИ КОМАНДИ" },
          { type: "list", items: ["«Ми допомагаємо бізнесу зростати» — Данило, Юлія","«Ми допомагаємо керувати ревеню та грошовими потоками» — Таня","«Ми закриваємо всі потреби мерчанта, не тільки процесинг» — Юрій","«Ми звільняємо клієнта від складної платіжної рутини» — Ріта, CEO"] },
        ],
        "how": [
          { type: "h1", text: "Як саме Tranzzo це робить?" },
          { type: "body", text: "Secret Sauce — команда з глибокою експертизою, яка чує бізнес клієнта і адаптує систему під будь-який запит зі швидкістю, недосяжною для конкурентів." },
          { type: "label", text: "6 СКЛАДОВИХ SECRET SAUCE" },
          { type: "numbered", items: ["Люди і їхня експертиза — головний актив, який неможливо скопіювати.","Гнучкість і адаптивність системи — Tranzzo йде за швидкістю розвитку партнера.","Ми знаємо, як провести платіж там, де інші не можуть — Smart Routing.","Швидкість і якість підтримки — частина продукту, а не просто сервіс.","Кастомізація під будь-який бізнес — не коробка, а індивідуальна архітектура.","Команда, яка вірить у те, що робить — незупинна навіть у час війни."] },
          { type: "label", text: "ДИФЕРЕНЦІАЦІЯ" },
          { type: "list", items: ["vs Банки: партнерство замість стандарту","vs Коробки (LiqPay): адаптація замість шаблону","vs Міжнародні оркестратори: людський підхід + бізнес-експертиза"] },
        ],
        "why": [
          { type: "h1", text: "Чому існує Tranzzo?" },
          { type: "label", text: "ТРИ ШАРИ WHY" },
          { type: "numbered", items: ["Функціональна місія: звільняємо бізнес від складності платежів.","Віра: майбутнє економіки нерозривно пов'язане з фінтехом.","Ідентичність: сильна команда, яка змінює правила гри."] },
          { type: "label", text: "СИНТЕЗОВАНЕ WHY" },
          { type: "body", text: "Ми існуємо, щоб звільнити бізнес від складності платежів і дати йому інструменти для зростання — щоб платежі працювали непомітно, а бізнес міг сфокусуватися на тому, що дійсно важливо." },
          { type: "quote", text: "«Tranzzo існує, бо ці конкретні люди не готові миритися з тим, як працює ринок.»", author: "— Синтез команди" },
        ],
        "values": [
          { type: "h1", text: "3 Цінності Tranzzo" },
          { type: "label", text: "01 — ЕКСПЕРТИЗА ЛЮДЕЙ" },
          { type: "body", text: "Наша сила — не в технології, а в людях, які за нею стоять. Ми глибоко розуміємо бізнес наших партнерів і здатні вирішувати задачі, за які інші не беруться." },
          { type: "label", text: "02 — РЕЗУЛЬТАТ, А НЕ ПРОЦЕС" },
          { type: "body", text: "Ми не шукаємо причин — ми шукаємо рішення. Відповідаємо за результат і не зупиняємося перед викликами, якими б складними вони не були." },
          { type: "label", text: "03 — РУХ УПЕРЕД" },
          { type: "body", text: "Ми відкриті до змін, мислимо прогресивно і будуємо те, що буде потрібно завтра, а не повторюємо те, що працювало вчора." },
          { type: "quote", text: "«У команді дуже багато енергії. На інших ринках вже всі напівмертві.»", author: "— Ріта, CEO" },
        ],
        "audience": [
          { type: "h1", text: "Для кого існує Tranzzo?" },
          { type: "label", text: "01 — ENTERPRISE & TECH" },
          { type: "body", text: "Бізнес, який переріс свого провайдера: фінтех, геймінг, маркетплейси, high-risk, міжнародні проєкти. Рішення: кастомна архітектура, Smart Routing, White Label. Tranzzo стає частиною ядра бізнесу." },
          { type: "label", text: "02 — SMB & ENTREPRENEURS" },
          { type: "body", text: "Підприємець, який хоче просто працювати. Рішення: коробкове з автоонбордингом, time-to-live — 1 день. Шлях до прибутковості Tranzzo." },
          { type: "label", text: "03 — PARTNERS & ECOSYSTEM" },
          { type: "body", text: "Еквайрери та банки, лідогенеративні платформи, Visa/Mastercard. Без них Tranzzo не може надавати послуги і масштабуватися органічно." },
        ],
        "competitors": [
          { type: "h1", text: "Конкуренти: суперсили і відповіді" },
          { type: "label", text: "КАРТА СУПЕРСИЛ КОНКУРЕНТІВ" },
          { type: "list", items: ["Структурні (неможливо скопіювати): банківська ліцензія, прибутковість, екосистема продуктів","Ринкові (створені роками): велика аудиторія, репутація, інерція","Операційні (можна побороти): чітка ніша, швидкий go-to-market, фокус"] },
          { type: "label", text: "ВІДПОВІДІ КОМАНДИ" },
          { type: "numbered", items: ["Данило: не копіювати, а бути іншими — унікальна ціннісна пропозиція.","Таня: вибрати 2–3 сегменти, автоонбординг, time-to-live до 1 дня.","Юлія: фокус на еквайрерах-новачках, тактика нарощування обсягів.","Юрій: потрібна чітка стратегія — люди і продукт вже є.","Ріта: фокус — єдина альтернатива грошам. Перемогти в одній ніші."] },
        ],
        "tov": [
          { type: "h1", text: "Tone of Voice Tranzzo" },
          { type: "body", text: "Голос «Tranzzo» — це впевнений, експертний голос, який не потребує гучних слів, бо за ним стоять реальні результати. Ми говоримо як партнер, який глибоко розуміє твій бізнес — без пафосу та порожніх обіцянок." },
          { type: "label", text: "TONE OF VOICE" },
          { type: "tags", items: ["експертний","впевнений","дружній","бунтарський","партнерський","надійний","технологічний","прямий","без пафосу","орієнтований на результат","дорослий","непомітна досконалість"] },
          { type: "label", text: "АНТИГОЛОС" },
          { type: "body", text: "Ми не сухі й формальні. Ми не легковажні. Ми не пафосні. Ми не копія Stripe чи Mono. Не «діди ринку», які 20 років роблять одне й те саме." },
          { type: "tags_anti", items: ["бюрократичний","формальний","шаблонний","легковажний","пафосний","Royal Premium VIP","наслідувальний","застарілий","корпоративно-мертвий"] },
        ],
      };

      doc.setFont("helvetica");

      sections.forEach((sec, si) => {
        if (si > 0) addPage();

        // Section header bar
        doc.setFillColor(245, 87, 51);
        doc.roundedRect(margin, y, maxW, 10, 2, 2, "F");
        doc.setFontSize(9);
        doc.setTextColor(255, 255, 255);
        doc.setFont("helvetica", "bold");
        doc.text(`{ ${sec.label.toUpperCase()} }`, margin + 4, y + 7);
        y += 16;

        const blocks = contentMap[sec.id] || [];
        blocks.forEach(block => {
          checkY(12);
          if (block.type === "h1") {
            doc.setFontSize(18);
            doc.setTextColor(51, 51, 51);
            doc.setFont("helvetica", "bold");
            const lines = doc.splitTextToSize(block.text, maxW);
            lines.forEach(line => { checkY(10); doc.text(line, margin, y); y += 9; });
            y += 4;
          } else if (block.type === "label") {
            checkY(10);
            doc.setFontSize(8);
            doc.setTextColor(245, 87, 51);
            doc.setFont("helvetica", "bold");
            doc.text(block.text, margin, y);
            y += 6;
            doc.setDrawColor(224, 223, 200);
            doc.setLineWidth(0.3);
            doc.line(margin, y, pw - margin, y);
            y += 5;
          } else if (block.type === "body") {
            doc.setFontSize(10);
            doc.setTextColor(90, 90, 80);
            doc.setFont("helvetica", "normal");
            const lines = doc.splitTextToSize(block.text, maxW);
            lines.forEach(line => { checkY(6); doc.text(line, margin, y); y += 5.5; });
            y += 4;
          } else if (block.type === "quote") {
            checkY(16);
            doc.setFillColor(244, 243, 226);
            const lines = doc.splitTextToSize(block.text, maxW - 12);
            const bh = lines.length * 5.5 + 14;
            doc.roundedRect(margin, y, maxW, bh, 3, 3, "F");
            doc.setDrawColor(245, 87, 51);
            doc.setLineWidth(1.5);
            doc.line(margin, y, margin, y + bh);
            doc.setFontSize(10);
            doc.setTextColor(51, 51, 51);
            doc.setFont("helvetica", "bolditalic");
            lines.forEach(line => { doc.text(line, margin + 6, y + 7); y += 5.5; });
            y += 7;
            doc.setFontSize(8);
            doc.setTextColor(153, 153, 136);
            doc.setFont("helvetica", "normal");
            doc.text(block.author, margin + 6, y);
            y += 10;
          } else if (block.type === "list") {
            block.items.forEach(item => {
              checkY(7);
              doc.setFontSize(9);
              doc.setTextColor(51, 51, 51);
              doc.setFont("helvetica", "normal");
              doc.setFillColor(245, 87, 51);
              doc.circle(margin + 1.5, y - 1.5, 1, "F");
              const lines = doc.splitTextToSize(item, maxW - 8);
              lines.forEach((line, li) => { doc.text(line, margin + 5, y + li * 5); });
              y += lines.length * 5 + 2;
            });
            y += 2;
          } else if (block.type === "numbered") {
            block.items.forEach((item, ni) => {
              checkY(7);
              doc.setFontSize(8);
              doc.setTextColor(245, 87, 51);
              doc.setFont("helvetica", "bold");
              doc.text(String(ni + 1).padStart(2, "0"), margin, y);
              doc.setFontSize(9);
              doc.setTextColor(51, 51, 51);
              doc.setFont("helvetica", "normal");
              const lines = doc.splitTextToSize(item, maxW - 10);
              lines.forEach((line, li) => { doc.text(line, margin + 8, y + li * 5); });
              y += lines.length * 5 + 3;
            });
            y += 2;
          } else if (block.type === "tags" || block.type === "tags_anti") {
            const isAnti = block.type === "tags_anti";
            let tx = margin;
            block.items.forEach(tag => {
              const tw = doc.getStringUnitWidth(tag) * 9 / doc.internal.scaleFactor + 8;
              if (tx + tw > pw - margin) { tx = margin; y += 9; }
              checkY(9);
              if (isAnti) {
                doc.setDrawColor(153, 153, 136);
                doc.setFillColor(244, 243, 226);
              } else {
                doc.setFillColor(245, 87, 51);
              }
              doc.roundedRect(tx, y - 5, tw, 7, 2, 2, isAnti ? "FD" : "F");
              doc.setFontSize(7.5);
              doc.setTextColor(isAnti ? 153 : 255, isAnti ? 153 : 255, isAnti ? 136 : 240);
              doc.setFont("helvetica", "normal");
              doc.text(tag, tx + 4, y);
              tx += tw + 4;
            });
            y += 12;
          }
        });
      });

      // Footer on last page
      doc.setFontSize(8);
      doc.setTextColor(153, 153, 136);
      doc.setFont("helvetica", "normal");
      doc.text("© The Seeds × Tranzzo — Brand Sprint 2025 · theseeds.is", pw / 2, ph - 10, { align: "center" });

      doc.save("Tranzzo-Brand-Sprint-2025.pdf");
      setPdfLoading(false);
    };
    document.head.appendChild(script);
  };

  return (
    <div ref={topRef} style={{ background: BG, minHeight: "100vh", fontFamily: FONT, color: TEXT, display: "flex", flexDirection: "column" }}>
      <style>{`@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:wght@400;500;600;700;800&display=swap');`}</style>
      <header style={{ height: 64, display: "flex", alignItems: "center", justifyContent: "space-between", padding: "0 40px", borderBottom: `1px solid ${BORDER}`, background: BG, position: "sticky", top: 0, zIndex: 50 }}>
        <img src="/seeds-logo.png" alt="The Seeds" style={{ height: 28 }} onError={e => { e.currentTarget.style.display="none"; e.currentTarget.nextSibling.style.display="flex"; }} />
        <div style={{ display:"none", height:28, padding:"0 12px", background: CARD_BG, borderRadius:8, alignItems:"center", fontSize:11, color:MUTED, border:`1px dashed ${BORDER}` }}>seeds-logo.png</div>
        <span style={{ fontSize: 11, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.2em", color: MUTED, fontFamily: FONT }}>
          <span style={{ color: ACCENT }}>&#123;</span> Brand Sprint <span style={{ color: ACCENT }}>&#125;</span>
        </span>
        <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
          <img src="/tranzzo-logo.png" alt="Tranzzo" style={{ height: 28 }} onError={e => { e.currentTarget.style.display="none"; e.currentTarget.nextSibling.style.display="flex"; }} />
          <div style={{ display:"none", height:28, padding:"0 12px", background: CARD_BG, borderRadius:8, alignItems:"center", fontSize:11, color:MUTED, border:`1px dashed ${BORDER}` }}>tranzzo-logo.png</div>
          <button onClick={handlePDF} disabled={pdfLoading} style={{ background: pdfLoading ? MUTED : ACCENT, color: "#fff", border: "none", borderRadius: 10, padding: "8px 16px", fontSize: 12, fontWeight: 700, cursor: pdfLoading ? "wait" : "pointer", fontFamily: FONT, letterSpacing: "0.05em", transition: "opacity 0.2s", display: "flex", alignItems: "center", gap: 6, whiteSpace: "nowrap" }}>
            {pdfLoading ? "Генерую..." : "↓ PDF"}
          </button>
        </div>
      </header>
      <nav style={{ position: "sticky", top: 64, zIndex: 40, background: BG, borderBottom: `1px solid ${BORDER}`, overflowX: "auto", scrollbarWidth: "none" }}>
        <div style={{ display: "flex", padding: "0 32px", minWidth: "max-content" }}>
          {TABS.map(t => {
            const active = t.id === activeTab;
            return (<button key={t.id} onClick={() => setActiveTab(t.id)} style={{ background: "none", border: "none", cursor: "pointer", padding: "18px 18px 16px", fontSize: 13, fontWeight: active ? 700 : 400, color: active ? TEXT : MUTED, fontFamily: FONT, whiteSpace: "nowrap", borderBottom: active ? `2px solid ${ACCENT}` : "2px solid transparent", marginBottom: -1, transition: "color 0.2s" }}>{t.label}</button>);
          })}
        </div>
      </nav>
      <main style={{ flex: 1 }}>
        <div style={{ maxWidth: 880, margin: "0 auto", padding: "64px 40px" }}>
          {CONTENT[activeTab] ?? <Placeholder label={tab.label} />}
        </div>
      </main>
      <footer style={{ borderTop: `1px solid ${BORDER}`, padding: "32px 0", textAlign: "center" }}>
        <p style={{ color: MUTED, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.15em", margin: 0, fontFamily: FONT }}>
          © The Seeds × <a href="https://theseeds.is" target="_blank" rel="noreferrer" style={{ color: MUTED }}>theseeds.is</a> — Brand Sprint 2025
        </p>
      </footer>
    </div>
  );
}