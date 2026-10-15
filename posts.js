const allPosts = [
	// ================= УКРАЇНСЬКІ СТАТТІ =================
	{
		title: "Множинне зведення до нуля: Філософія геноциду в умовах пізньокапіталістичної війни",
		link: "https://olehhello.substack.com/p/755",
		img: "https://substackcdn.com/image/fetch/$s_!2TA0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F65574de3-89ef-4974-a4ad-ca3c1b230db7_784x1168.jpeg",
		desc: "Вступ.",
		lang: "ua"
	},
	{
		title: "Східний деспотизм замість Республіки: як комедійний експромт Офісу Президента прикривають медійним шахрайством",
		link: "https://olehhello.substack.com/p/773",
		img: "https://substackcdn.com/image/fetch/$s_!2q2t!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F841e9b1c-a499-4523-b299-aeb398508473_1672x941.png",
		desc: "Сучасний український публічний простір дедалі більше нагадує герметичну систему, де під виглядом патріотичного консенсусу вибудувано вищу форму репресивності.",
		lang: "ua"
	},
	{
		title: "Казка про Царя-Квартального та каскадну халепу",
		link: "https://olehhello.substack.com/p/e03",
		img: "https://substackcdn.com/image/fetch/$s_!N3Qx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0f6c9400-aa66-4f27-b863-414895f2ba44_1672x941.png",
		desc: "У деякому царстві, у Квартальній державі, жило-було Сонце-Ясне, Цар-Надія Непохитна.",
		lang: "ua"
	},
	{
		title: "Професія: Гвинтик. Чому «втрата світу» — це єдиний спосіб залишитися людиною",
		link: "https://olehhello.substack.com/p/b1b",
		img: "https://substackcdn.com/image/fetch/$s_!2LPl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa0ed1a95-439f-415d-8a16-4e3d9a2c0ba1_1672x941.png",
		desc: "Нещодавнє інтерв’ю вітчизняного психіатра, де шизофренія зводилася до банальної «втрати об’єктивного світу» та нездатності сплачувати за комірне в залізобетонному вулику, змушує задуматися.",
		lang: "ua"
	},
	{
		title: "Анатомія втечі від відповідальності: Чому масштаб системних злочинів нинішньої влади перевершив режим Януковича",
		link: "https://olehhello.substack.com/p/9f3",
		img: "https://substackcdn.com/image/fetch/$s_!7G1y!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8f4e0128-f0fb-4382-9637-8a61dbbba393_1672x941.png",
		desc: "Порівняння політичних режимів в Україні зазвичай зводять до сухих правових формулювань чи дипломатичних дефініцій.",
		lang: "ua"
	},
	{
		title: "Дві України після війни: Справедливий аудит проти чергової афери «Української правди»",
		link: "https://olehhello.substack.com/p/953",
		img: "https://substackcdn.com/image/fetch/$s_!varl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd2e16909-2ccd-435f-bfa0-df0842625b5b_1672x941.png",
		desc: "Після завершення війни Україна неминуче опиниться на історичному роздоріжжі.",
		lang: "ua"
	},
	{
		title: "Екзистенціали Невігластва: «Потужність», «Незламність» і «Чорна Скринька»",
		link: "https://olehhello.substack.com/p/881",
		img: "https://substackcdn.com/image/fetch/$s_!BN_0!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F32454355-f792-4be1-8001-20e45e08765e_1672x941.png",
		desc: "«Проблеми нам створюють не самі речі, а те, як ми на них дивимося.»",
		lang: "ua"
	},
	{
		title: "Кінець Республіки під соусом «Перемоги»: як у нас вкрали Суверена",
		link: "https://olehhello.substack.com/p/80e",
		img: "https://substackcdn.com/image/fetch/$s_!DkEP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F944eb6a4-d4e8-4fb7-af45-1f9bceb5be7f_1672x941.png",
		desc: "У 2014-му й особливо у лютому 2022-го Україна вистояла не завдяки чиновникам, армійській бюрократії чи централізованому державному апарату.",
		lang: "ua"
	},
	{
		title: "Вигадана історія про медіа-Царя",
		link: "https://olehhello.substack.com/p/4c1",
		img: "https://substackcdn.com/image/fetch/$s_!V_Pf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69aa613a-3195-47e1-926e-f196cc20dd14_1672x941.png",
		desc: "У деякому царстві, у медіа-державі, жив-був цар Зеля Перший, Володар Зеленого Хромакею та Повелитель Трьохсот Спікерів.",
		lang: "ua"
	},
	{
		title: "Політичний фаталізм замість процедури: Чому відмова від виборів консервує кризу в Україні",
		link: "https://olehhello.substack.com/p/e53",
		img: "https://substackcdn.com/image/fetch/$s_!8ut2!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F03ca0bfa-5c32-43a2-880f-edbbf26b6790_1672x941.png",
		desc: "Останнім часом у публічному дискурсі дедалі частіше лунає теза про те, що проведення виборів під час війни — це «видалення головного болю гільйотиною», шлях до розколу та гра на користь ворога.",
		lang: "ua"
	},
	{
		title: "УКАЗ І ПРИВІТАННЯ ВІД ДРЕВНІХ КНЯЗІВ ТА ЦАРІВ КИЇВСЬКИХ З ДНЕМ НЕЗАЛЕЖНОСТІ ВІД ЗДОРОВОГО ГЛУЗДУ",
		link: "https://olehhello.substack.com/p/0f9",
		img: "https://substackcdn.com/image/fetch/$s_!Z1qG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F58cfa58f-66ce-4011-aa7f-36196bb59cca_1672x941.png",
		desc: "«ОУ СИ, ЛЮДІЄ ЗЕМЛІ КИЇВСЬКОЇ, СМЕРДИ, ЗАКУПИ ТА ХОЛОПИ ПОТУЖНІ!",
		lang: "ua"
	},
	{
		title: "Країна Репутації vs Країна ПР-рейтингів: Чому антикорупційний сектор згорнувся до медійного шуму та звинувачення суспільства",
		link: "https://olehhello.substack.com/p/vs-f68",
		img: "https://substackcdn.com/image/fetch/$s_!gGgQ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9c90a840-789b-42c0-af95-09d52d632aa7_1672x941.png",
		desc: "Сучасний український політичний ландшафт опинився в пастці підміни понять.",
		lang: "ua"
	},
	{
		title: "Шокова каральність: як Захід перетворив реформування України на варварську медицину XIX століття",
		link: "https://olehhello.substack.com/p/xix",
		img: "https://substackcdn.com/image/fetch/$s_!rJ99!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F68cf942a-00ba-4173-96a5-0638a3bff7e6_1672x941.png",
		desc: "У сучасній гуманістичній психотерапії існує базове поняття: будь-який симптом чи хвороба мають свою адаптивну цінність. Залежність, захисний механізм чи поведінковий розлад виникають не через «вроджену злочинність» пацієнта, а як спосіб соціуму чи психіки вижити в умовах важкої травми. Зріла терапія працює дбайливо: вона не б’є пацієнта палицею по голові, а шукає призначення симптому, пропонуючи екологічну заміну — виграш у вигляді здорового розвитку, репутації та безпеки.",
		lang: "ua"
	},
	{
		title: "Колоніальний сцієнтизм: як провідне ліберальне ЗМІ конструює «знання» для Третього світу",
		link: "https://olehhello.substack.com/p/84f",
		img: "https://substackcdn.com/image/fetch/$s_!cnbZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F42a377eb-01ed-43f4-bb61-2935e8e93e3d_1672x941.png",
		desc: "У теорії пізнання існує поняття епістеми — фундаментальної системи правил, яка визначає, що саме в конкретному суспільстві вважається «знанням», а що — маренням чи неуцтвом.",
		lang: "ua"
	},
	{
		title: "Зеленський як максимальний лиходій за Гічкоком: техніка медійного саспенсу на попелищі",
		link: "https://olehhello.substack.com/p/358",
		img: "https://substackcdn.com/image/fetch/$s_!9-d1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fecb93bd6-3358-49ea-bc36-fcec4c6a5830_1672x941.png",
		desc: "У класичній кінотеорії Альфреда Гічкока є фундаментальний закон, який визначає якість будь-якого драматичного твору: «Чим вдаліший лиходій, тим вдаліший фільм» (The more successful the villain, the more successful the picture).",
		lang: "ua"
	},
	{
		title: "Анатомія шизосуверенітету: від органічного Космосу до машинного винищення",
		link: "https://olehhello.substack.com/p/98c",
		img: "https://substackcdn.com/image/fetch/$s_!cU42!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4dcb4ee6-9aba-4832-8023-23be7c216c8a_1672x941.png",
		desc: "Уся історія нашої «незалежності» — це історія перебування в треці західного капіталістичного шизосуверенітету виснаження.",
		lang: "ua"
	},
	{
		title: "Тефлонова медіамашина MAGA замість стратегії: як американський медіакапіталізм перетворює трагедії на паливо",
		link: "https://olehhello.substack.com/p/maga",
		img: "https://substackcdn.com/image/fetch/$s_!uRKj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fffc4a963-f3ed-4f91-9f1f-4d9d11f22530_1672x941.png",
		desc: "Вступ: Смерть яструба як медійний продукт",
		lang: "ua"
	},
	{
		title: "Реформа армії в асиметричній війні: Як перетворити «радянську систему» на людиноцентричну машину",
		link: "https://olehhello.substack.com/p/d0f",
		img: "https://substackcdn.com/image/fetch/$s_!4_Mq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F467c2c5b-0b6e-4cb6-8154-1478ddfe4ff1_1536x1024.png",
		desc: "Минуло понад чотири роки з початку повномасштабного вторгнення.",
		lang: "ua"
	},
	{
		title: "Вирок «стратегії добросусідства»: Екстрактивний периферіал і геополітичний зашморг. Чому Захід створив Failed State в Україні та розв’язав найкривавішу війну 21 століття",
		link: "https://olehhello.substack.com/p/failed-state-21",
		img: "https://substackcdn.com/image/fetch/$s_!Vgry!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F877a1406-1055-42b2-8a87-774ae61a8a4c_1536x1024.png",
		desc: "Сьогоднішній катастрофічний стан Східної Європи — це не випадковість і не «дитячі хвороби молодої демократії».",
		lang: "ua"
	},
	{
		title: "Failed State під патріотичним фасадом: Чому 30 років «державотворення» були великою імітацією",
		link: "https://olehhello.substack.com/p/failed-state-30",
		img: "https://substackcdn.com/image/fetch/$s_!JmKd!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa2d73f5c-8d49-4e3d-b346-55e3c594dcef_1536x1024.png",
		desc: "Головна трагедія сучасної України полягає не лише у зовнішній агресії.",
		lang: "ua"
	},
	{
		title: "Крах «Генсека Побєди»: Як протест зламав монополію на Бажання і викрив олігархічний спрут",
		link: "https://olehhello.substack.com/p/807",
		img: "https://substackcdn.com/image/fetch/$s_!o95V!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F69305b3e-07af-4e3a-b541-092b66feed54_1536x1024.png",
		desc: "Парадокс політичного застою завжди полягає в тому, що система намагається видати власну агонію за єдино можливу фортецю порятунку.",
		lang: "ua"
	},
	{
		title: "ЗАТ «Пафосний Олігархічний Патріотизм»: Анатомія архаїчного кумівства та симуляції нації",
		link: "https://olehhello.substack.com/p/b8e",
		img: "https://substackcdn.com/image/fetch/$s_!m4ZO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b803532-3a2b-4092-975a-5f5de41e5f07_1536x1024.png",
		desc: "Якщо Офіс Президента Зеленського будує медійну «Династію-на-кістках» через цифрові інтерфейси та лінійну військову архаїку, то політичний контур Петра Порошенка є фундаментом і матрицею того самого пострадянського кумівсько-олігархічного устрою.",
		lang: "ua"
	},
	{
		title: "Династія-на-кістках: як симулякр «Перемоги» будує Маленьку Росію",
		link: "https://olehhello.substack.com/p/816",
		img: "https://substackcdn.com/image/fetch/$s_!KtDM!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F578c8295-4b8b-47c3-9cce-30e5340719e2_1536x1024.png",
		desc: "Привиди застійного Радянського Союзу завжди повертаються не у вигляді старих танків чи піонерських галстуків, а у вигляді тотальної, заспокійливої, монопольної брехні.",
		lang: "ua"
	},
	{
		title: "Дві армії всередині однієї війни: чому кібернетизація є єдиною альтернативою катастрофі",
		link: "https://olehhello.substack.com/p/bf4",
		img: "https://substackcdn.com/image/fetch/$s_!BxIP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5c163b1-4159-4ad5-9e46-b7d0725e71b2_1536x1024.png",
		desc: "Будь-яка війна — це змагання управлінських моделей.",
		lang: "ua"
	},
	{
		title: "Подолання кричущих протиріч, кризи державності і 0-цінності життя",
		link: "https://olehhello.substack.com/p/0",
		img: "https://substackcdn.com/image/fetch/$s_!45j4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d53c5ff-0c0c-4009-bc88-9c79cd431715_1536x1024.png",
		desc: "Сучасна Україна стрімко наближається до своєї історичної критичної точки.",
		lang: "ua"
	},
	{
		title: "Мутація «Української правди»: фасадний лібералізм на службі державного терору",
		link: "https://olehhello.substack.com/p/db2",
		img: "https://substackcdn.com/image/fetch/$s_!mwoA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff2c11a5a-7c50-40ff-934a-a42bd1937797_1536x1024.png",
		desc: "Георгій Гонгадзе заснував «Українську правду» як зброю проти олігархічного всевладдя, цензури та феодального свавілля еліт.",
		lang: "ua"
	},
	{
		title: "Велика деконструкція отаманщини: як Україні вийти з політичного підсвідомого на рівень інституційного Я",
		link: "https://olehhello.substack.com/p/4af",
		img: "https://substackcdn.com/image/fetch/$s_!qKOI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F74a2790e-dc16-44c2-ad60-2b83b6bc5e34_1536x1024.png",
		desc: "Сучасна геополітична архітектура тріщить по швах.",
		lang: "ua"
	},
	{
		title: "Політика «без політики»: як олігархічний кооператив спалює складність заради Конституції безправ’я",
		link: "https://olehhello.substack.com/p/8fc",
		img: "https://substackcdn.com/image/fetch/$s_!yZCl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46b6efa2-4efa-42d3-a5ff-72f39358360e_1536x1024.png",
		desc: "Чутки про кулуарні переговори, таємні заміри рейтингів та підготовку до виборів, які дедалі частіше прориваються крізь завісу цензури, — це не просто політичні плітки.",
		lang: "ua"
	},
	{
		title: "Анатомія саботажу: Чому Україна воює «м’ясом», а не кіл-зонами",
		link: "https://olehhello.substack.com/p/d8c",
		img: "https://substackcdn.com/image/fetch/$s_!Dyru!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe8581666-51f6-48d4-b0df-fdd697b4d292_1024x1536.png",
		desc: "Головний парадокс і головний злочин сучасної української оборонної моделі полягає в тому, що технологічне рішення для асиметричного стримування ворога відоме вже багато років.",
		lang: "ua"
	},
	{
		title: "Системне насильство у «Скелі» як нова модель України",
		link: "https://olehhello.substack.com/p/97d",
		img: "https://substackcdn.com/image/fetch/$s_!bzlR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F0c843c0b-2dca-417d-91b2-108d7f7f9249_1536x1024.png",
		desc: "Сьогодні українське суспільство опинилося перед бінарним, фундаментальним вибором системи координат, який визначить не просто фінал цієї війни, а саму природу нашої держави на десятиліття вперед.",
		lang: "ua"
	},
	{
		title: "Квартальний стиль дипломатії Зеленського: як емоційний тиск випалив двопартійну підтримку США",
		link: "https://olehhello.substack.com/p/1dc",
		img: "https://substackcdn.com/image/fetch/$s_!Hiyy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F14e1b4c1-45be-4d5a-b349-34300bf2df20_1024x1536.png",
		desc: "У кулуарах Вашингтона та на сторінках західної преси дедалі частіше звучать тривожні дзвіночки: жорстка, ультимативна риторика офіційного Києва починає працювати проти самої України.",
		lang: "ua"
	},
	{
		title: "Капіталізм як Машина Негативності: Від Проклятої Частки до Воєнного Маркетплейсу",
		link: "https://olehhello.substack.com/p/d0b",
		img: "https://substackcdn.com/image/fetch/$s_!f2eF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc71332c8-f99c-4085-a8d9-a2adc422dcf8_1536x1024.png",
		desc: "Сучасний мейнстрим звик розглядати лібералізм та капіталізм (що історично є двома сторонами однієї медалі) через вітрину позитивності: накопичення багатства, розширення прав та індивідуальна свобода.",
		lang: "ua"
	},
	{
		title: "Інфіковані популізмом: Як експертна симуляція «сили» консервує українську відсталість",
		link: "https://olehhello.substack.com/p/b7e",
		img: "https://substackcdn.com/image/fetch/$s_!3acu!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fef8be1c4-1791-460b-aca4-5d9a8b379b5c_1536x1024.png",
		desc: "Сьогодні в українському експертному середовищі дедалі чіткіше простежується загрозливий тренд.",
		lang: "ua"
	},
	{
		title: "Династія Гіперреальності: Лютий цинізм та анахронізм еліти в епоху HD",
		link: "https://olehhello.substack.com/p/hd",
		img: "https://substackcdn.com/image/fetch/$s_!tVNl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fef86d692-2e8d-4f6c-a51c-c5fb14a71d47_1536x1024.png",
		desc: "Сьогодні ми є свідками унікального і водночас огидного політичного спектаклю.",
		lang: "ua"
	},
	{
		title: "Симулякр Справедливості: Постмодерне Верховенство Права та Арешт Українського Буття",
		link: "https://olehhello.substack.com/p/37e",
		img: "https://substackcdn.com/image/fetch/$s_!U4WZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F905fa5a8-da80-41b1-b16c-71a1dc7781cb_1536x1024.png",
		desc: "Сучасна західна правова думка пишається своєю гуманістичною еволюцією.",
		lang: "ua"
	},
	{
		title: "Подія у в’язниці права: Волинська трагедія як архаїчний афект та епістемологічне насильство модерну",
		link: "https://olehhello.substack.com/p/d7e",
		img: "https://substackcdn.com/image/fetch/$s_!hAgC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4297db52-bce0-4972-beff-8b0b25505d28_1536x1024.png",
		desc: "Сучасний політико-дипломатичний дискурс довкола Волинських подій 1943 року демонструє класичну хрестоматійну травму модерного розуму.",
		lang: "ua"
	},
	{
		title: "Епістолярний вождизм: чому «відкритий лист» Зеленського до Путіна — це тріумф піару над реальністю",
		link: "https://olehhello.substack.com/p/07b",
		img: "https://substackcdn.com/image/fetch/$s_!30DC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F956eb4ad-f78a-40e3-9f37-03ed84afe1a1_1408x768.png",
		desc: "Нещодавня поява у публічному просторі «відкритого листа» Володимира Зеленського до Владіміра Путіна викликала прогнозовану хвилю захвату серед вітчизняних ура-патріотичних блогерів.",
		lang: "ua"
	},
	{
		title: "Ілюзія «виснаження»: Чому нинішні санкції безперспективні, а Росія може бомбити роками",
		link: "https://olehhello.substack.com/p/9eb",
		img: "https://substackcdn.com/image/fetch/$s_!EqMy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff5ae3715-76ad-4869-83b0-52b3875e7277_1408x768.png",
		desc: "Останній комбінований повітряний удар Російської Федерації по Києву, Дніпру та інших містах України коштував Кремлю приблизно 700 млн доларів. Для пересічного спостерігача ця цифра здається астрономічною втратою. Проте глибокий аналіз структури російських воєнних витрат та темпів падіння її економіки доводить зворотне:",
		lang: "ua"
	},
	{
		title: "Синдром «корисних ідіотів»: як кулуарне дилетантство під час війни стає зброєю в руках ворога",
		link: "https://olehhello.substack.com/p/dd0",
		img: "https://substackcdn.com/image/fetch/$s_!2b_I!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8174ac0d-9c29-4b77-adfa-50ce85225068_1408x768.png",
		desc: "Коли Леніну приписували вираз про «корисних ідіотів», під цим терміном розуміли наївних західних інтелектуалів, які через власну засліпленість чи глупоту підігрували тоталітарному радянському режиму.",
		lang: "ua"
	},
	{
		title: "Забуття сьогодення і майбутнього на користь медійного некрокульту",
		link: "https://olehhello.substack.com/p/469",
		img: "https://substackcdn.com/image/fetch/$s_!__cO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd678fb80-a359-479c-a21d-30bb9f924fc9_1408x768.png",
		desc: "Сучасна Україна опинилася в унікальній та водночас моторошній точці своєї історії — у точці, де матеріальне тіло держави стрімко тане, а її символічний скелет штучно бетонується.",
		lang: "ua"
	},
	{
		title: "Трагедія реактивного нарцисизму: як ручна вертикаль влади підіграла західній стратегії «виснаження України»",
		link: "https://olehhello.substack.com/p/69c",
		img: "https://substackcdn.com/image/fetch/$s_!ONjB!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8c593f37-12eb-4bca-8788-2030bea62920_1536x1024.png",
		desc: "Коли у 2022 році українське суспільство продемонстрував феномен тотальної самоорганізації, Захід змушений був переглянути свій початковий план «афганізації» України.",
		lang: "ua"
	},
	{
		title: "Симулякр стримування: слабкий цинізм Заходу як ухилення від виклику",
		link: "https://olehhello.substack.com/p/a35",
		img: "https://substackcdn.com/image/fetch/$s_!vucY!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba745b90-c17b-428e-9986-85d9b291c3aa_1536x1024.png",
		desc: "Сучасна західна Realpolitik — це більше не про цінності, не про геополітичну відвагу і навіть не про класичний імперіалізм.",
		lang: "ua"
	},
	{
		title: "Другий фронт: Корупція як механізм національної деградації та вбивства",
		link: "https://olehhello.substack.com/p/699",
		img: "https://substackcdn.com/image/fetch/$s_!5jdG!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F952560ab-189c-4461-822e-db93436e4e15_1536x1024.png",
		desc: "Термін «корупція вбиває» — це не метафора.",
		lang: "ua"
	},
	{
		title: "«Дух Анкориджа» та дипломатія приниження: як геополітика перетворюється на спецоперацію",
		link: "https://olehhello.substack.com/p/503",
		img: "https://substackcdn.com/image/fetch/$s_!QT8I!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3adcd443-267d-4c9c-90f1-0a80fa51e02e_1408x768.png",
		desc: "У світовій політиці існують правила гри, які вибудовувалися століттями.",
		lang: "ua"
	},
	{
		title: "Проєкт «Керований колапс»: Як стратегія США перетворила технологічну державу на сировинний плацдарм",
		link: "https://olehhello.substack.com/p/fd0",
		img: "https://substackcdn.com/image/fetch/$s_!6RAk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff00f28da-b22d-44c2-925c-3e89c87586ad_1536x1024.png",
		desc: "Частина 1.",
		lang: "ua"
	},
	{
		title: "Еволюція Капіталізму: Від Блатної Мови до Антропологічної Катастрофи",
		link: "https://olehhello.substack.com/p/15d",
		img: "https://substackcdn.com/image/fetch/$s_!Gjr_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6892bed4-dd38-4e34-84b5-a7ae8559fbc3_1408x768.png",
		desc: "Якщо розглядати капіталізм як прогресуючу хворобу духу, то його історія — це шлях від «хвороби тіла» до «хвороби реальності».",
		lang: "ua"
	},
	{
		title: "Війна як Доля vs Війна як Бізнес-модель: Аналіз трьох стратегій спротиву",
		link: "https://olehhello.substack.com/p/vs-8a5",
		img: "https://substackcdn.com/image/fetch/$s_!PNwR!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F556f782b-4b06-4df3-8042-b62cb9d612eb_1408x768.png",
		desc: "Сьогоднішня система управління спротивом в Україні опинилася в пастці між двома історичними моделями ефективної війни, обравши замість них третій — гібридний шлях, який вигідний апарату, але руйнівний для нації.",
		lang: "ua"
	},
	{
		title: "Україна двох лідерів: Розквіт інституцій vs пастка «голого життя» і вічної війни",
		link: "https://olehhello.substack.com/p/vs",
		img: "https://substackcdn.com/image/fetch/$s_!dtl3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa6bc488f-8324-44c3-9ed4-fac67a89875f_1408x768.png",
		desc: "Thanks for reading!",
		lang: "ua"
	},
	{
		title: "Україна як колонія Заходу. Вирок 4 свободам — це свобода від життя",
		link: "https://olehhello.substack.com/p/4",
		img: "https://substackcdn.com/image/fetch/$s_!TiTm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F37d476f0-f101-4fa5-9b50-07d58ac20d27_1408x768.png",
		desc: "Нагородження політичного керівництва України «Відзнакою чотирьох свобод» на тлі системного демонтажу конституційних прав свідчить про глибоку кризу адекватності західних інституцій і політики.",
		lang: "ua"
	},
	{
		title: "Цифровий тоталітаризм у серці Європи: Заклик прокинутися для Horizon Capital та EVO",
		link: "https://olehhello.substack.com/p/horizon-capital-evo",
		img: "https://substackcdn.com/image/fetch/$s_!Z5gw!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8b9b01bf-f69d-4da5-9af4-3d121c9ffba4_1380x752.png",
		desc: "Поки Україна виборює своє життя на передовій демократії, інша боротьба розгортається всередині її цифрових кордонів.",
		lang: "ua"
	},
	{
		title: "Від Хартії вольностей до «конвертної» республіки: Анатомія фіскального паноптикону",
		link: "https://olehhello.substack.com/p/a64",
		img: "https://substackcdn.com/image/fetch/$s_!7S8W!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F63fc395a-b63c-47d9-ada8-61c85098a709_1408x768.png",
		desc: "Історія західної демократії — це історія боротьби за право не віддавати свою працю без права голосу.",
		lang: "ua"
	},
	{
		title: "Велика Брехня: Шлях від Гідності до «Держави-Секти»",
		link: "https://olehhello.substack.com/p/11b",
		img: "https://substackcdn.com/image/fetch/$s_!Pka7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F99e17b71-7911-429b-9dad-a39b08e0334a_1408x768.png",
		desc: "Те, що починалося у 2014 році як щирий порив мільйонів до свободи, верховенства права та європейського добробуту, за десять років трансформувалося у свою повну протилежність.",
		lang: "ua"
	},
	{
		title: "Деградація сервісу під ширмою «цінностей»: Як Shafa.ua та EVO нищать довіру до ринку",
		link: "https://olehhello.substack.com/p/shafaua-evo",
		img: "https://substackcdn.com/image/fetch/$s_!8myf!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F49aa53f7-8282-4574-be6c-47296f4eeceb_1408x768.png",
		desc: "Поки топменеджмент EVO (@EVO.company) та інвестори з Horizon Capital (@horizoncapitalua) звітують про неймовірні успіхи, впроваджують інклюзивність, хизуються використанням фемінітивів у соцмережах та відвідують профільні тусовки про «світле цифрове майбутнє», реальний стан справ у їхніх активах, зокрема на",
		lang: "ua"
	},
	{
		title: "Дипломатія в епоху права сили: Тріумф абсурду та ліквідаційна комісія",
		link: "https://olehhello.substack.com/p/b1f",
		img: "https://substackcdn.com/image/fetch/$s_!T-mJ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F524c3102-bffc-4160-8217-04e5dbd01b0b_1408x768.png",
		desc: "Світ зразка березня 2026 року остаточно скинув маску «міжнародного порядку, заснованого на правилах».",
		lang: "ua"
	},
	{
		title: "Щасливий момент життя трьох потужних лідерів",
		link: "https://olehhello.substack.com/p/c2d",
		img: "https://substackcdn.com/image/fetch/$s_!Uhr4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fed06de34-9114-4b2a-b5c8-d4d42dd8d414_1408x768.png",
		desc: "Зустрілися якось Трамп, Путін та Зеленський на березі океану, знайшли золоту рибку і замість бажань вирішили просто похизуватися — у кого державне управління найбільш абсурдне.",
		lang: "ua"
	},
	{
		title: "Кінець «війни кріпаків»: Чому в бій мають піти пани",
		link: "https://olehhello.substack.com/p/ab8",
		img: "https://substackcdn.com/image/fetch/$s_!CUWA!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa5b41f12-2c76-4439-bdff-fe38c97b8184_1376x768.png",
		desc: "Кінець «війни кріпаків»: Чому в бій мають піти пани",
		lang: "ua"
	},
	{
		title: "Дональд Трамп — Гітлер XXI століття: Історія повторюється як?",
		link: "https://olehhello.substack.com/p/xxi",
		img: "https://substackcdn.com/image/fetch/$s_!fr_Y!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25b331ba-7c6a-4d25-9560-ae01af855b6e_1376x768.png",
		desc: "Дональд Трамп — Гітлер XXI століття: Історія повторюється як?",
		lang: "ua"
	},
	{
		title: "Злочин соціології проти людяності: Діагноз ігнорування",
		link: "https://olehhello.substack.com/p/d55",
		img: "https://substackcdn.com/image/fetch/$s_!0izb!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2d071255-7a3e-4e99-8cea-37064c8bc469_1376x768.png",
		desc: "Злочин соціології проти людяності: Діагноз ігнорування",
		lang: "ua"
	},
	{
		title: "Епітафія космополітичному праву: Від Хабермаса до глобального «звірства»",
		link: "https://olehhello.substack.com/p/c3f",
		img: "https://substackcdn.com/image/fetch/$s_!5vWa!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fec9b4958-1d6c-4303-92bc-f7f749d7f8c9_1376x768.png",
		desc: "Епітафія космополітичному праву: Від Хабермаса до глобального «звірства»",
		lang: "ua"
	},
	{
		title: "Чотири етапи символічного насильства проти українського наріду",
		link: "https://olehhello.substack.com/p/b24",
		img: "https://substackcdn.com/image/fetch/$s_!k8Xp!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa05e9819-1e65-4e03-bbd1-15d0b49b0de5_1408x768.png",
		desc: "🧩 Чотири етапи символічного насильства проти українського наріду",
		lang: "ua"
	},
	{
		title: "Цифровий левіафан: Як МВФ будує «концтабір» на руїнах мікроекономіки",
		link: "https://olehhello.substack.com/p/066",
		img: "https://substackcdn.com/image/fetch/$s_!vLZq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F96686326-e8a3-41ef-aa8a-6a759c53c40c_1408x768.png",
		desc: "Політика міжнародних фінансових інституцій, яку ми спостерігаємо у 2026 році, остаточно скинула маску «економічного стимулювання».",
		lang: "ua"
	},

	// ================= ENGLISH ARTICLES =================
	{
		title: "Multiple Reduction to Zero: The Philosophy of Genocide in Late-Capitalist Warfare",
		link: "https://olehhello.substack.com/p/multiple-reduction-to-zero-the-philosophy",
		img: "https://substackcdn.com/image/fetch/$s_!P8Sv!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F781a1f06-e501-4a98-ba95-1e844a7435ea_784x1168.jpeg",
		desc: "Introduction.",
		lang: "en"
	},
	{
		title: "Eastern Despotism Instead of a Republic: How the Office of the President\u2019s Comedic Impromptu is Masked by Media Charlatanism",
		link: "https://olehhello.substack.com/p/eastern-despotism-instead-of-a-republic",
		img: "https://substackcdn.com/image/fetch/$s_!IPDo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd8ba320d-80df-443d-8c2a-b5925da3881e_1672x941.png",
		desc: "The contemporary Ukrainian public sphere increasingly resembles a hermetically sealed system where the highest form of repressiveness is enforced under the guise of a patriotic consensus.",
		lang: "en"
	},
	{
		title: "The Tale of the Prime-Time Tsar and the Cascade Catastrophe",
		link: "https://olehhello.substack.com/p/the-tale-of-the-prime-time-tsar-and",
		img: "https://substackcdn.com/image/fetch/$s_!AxDu!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F87b8d8b1-164a-4603-be01-43a9ed5c3415_1672x941.png",
		desc: "Once upon a time, in the Kingdom of Prime-Time, lived His Radiant Majesty, the Tsar of Eternal Hope.",
		lang: "en"
	},
	{
		title: "Profession: Cog. Why \u201cLoss of the World\u201d Is the Only Way to Remain Human",
		link: "https://olehhello.substack.com/p/profession-cog-why-loss-of-the-world",
		img: "https://substackcdn.com/image/fetch/$s_!48Io!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ff29e81fb-0ca5-4d0d-b0fd-04bdb71c352c_1672x941.png",
		desc: "A recent interview with a local psychiatrist\u2014where schizophrenia was reduced to a banal \u201closs of the objective world\u201d and the inability to pay rent for a concrete-hive apartment\u2014forces one to pause and reflect.",
		lang: "en"
	},
	{
		title: "Anatomy of Escaping Accountability: Why the Systemic Crimes of the Current Regime Outpace Yanukovych\u2019s Era",
		link: "https://olehhello.substack.com/p/anatomy-of-escaping-accountability",
		img: "https://substackcdn.com/image/fetch/$s_!S5ZH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fba55b4cb-0ee8-4906-8222-485307735291_1672x941.png",
		desc: "Comparing political regimes in Ukraine is usually reduced to dry legal formulas or diplomatic definitions.",
		lang: "en"
	},
	{
		title: "Ukraine at the Crossroads: Institutional Accountability vs. The \u201cTechnocratic\u201d Amnesia",
		link: "https://olehhello.substack.com/p/ukraine-at-the-crossroads-institutional",
		img: "https://substackcdn.com/image/fetch/$s_!17_D!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F985faf4e-6760-4702-bef3-e42d69643d58_1672x941.png",
		desc: "As the war ends, Ukraine will inevitably find itself at a historic juncture.",
		lang: "en"
	},
	{
		title: "The Existentialia of Ignorance: \u201cPotuzhnist\u201d, \u201cNezlamnist\u201d, and the Black Box",
		link: "https://olehhello.substack.com/p/the-existentialia-of-ignorance-potuzhnist",
		img: "https://substackcdn.com/image/fetch/$s_!MH2v!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F51ce2bfa-c830-48ac-9a7d-c725ff9bf931_1672x941.png",
		desc: "\u201cMen are disturbed not by things, but by the view which they take of things.\u201d",
		lang: "en"
	},
	{
		title: "The End of the Republic Under the Guise of \u201cVictory\u201d: How We Were Robbed of the Sovereign",
		link: "https://olehhello.substack.com/p/the-end-of-the-republic-under-the",
		img: "https://substackcdn.com/image/fetch/$s_!mPbl!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9e60da4b-d5c2-4a30-a417-08aadba17c6a_1672x941.png",
		desc: "In 2014, and most acutely in February 2022, Ukraine survived not because of bureaucrats, army officialdom, or a centralized state apparatus.",
		lang: "en"
	},
	{
		title: "A Fictional Tale of the Media-Tsar",
		link: "https://olehhello.substack.com/p/a-fictional-tale-of-the-media-tsar",
		img: "https://substackcdn.com/image/fetch/$s_!-py-!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa9982237-aa68-4eb1-8dd9-955f22d3ad7e_1672x941.png",
		desc: "In a certain kingdom, in a media-state, there lived Tsar Zelya the First, Sovereign of the Green Chroma Key and Master of Three Hundred Spokespersons.",
		lang: "en"
	},
	{
		title: "Political Fatalism over Procedure: Why Delaying Elections Freezes Ukraine\u2019s Crisis",
		link: "https://olehhello.substack.com/p/political-fatalism-over-procedure",
		img: "https://substackcdn.com/image/fetch/$s_!5N42!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F04c74af4-69b7-4526-ab84-27fd190dd834_1672x941.png",
		desc: "In recent public discourse, arguments against holding elections during wartime have become increasingly vocal.",
		lang: "en"
	},
	{
		title: "EDICT AND GREETINGS FROM THE ANCIENT KINGS AND TSARS OF KYIV ON THE DAY OF INDEPENDENCE FROM COMMON SENSE",
		link: "https://olehhello.substack.com/p/edict-and-greetings-from-the-ancient",
		img: "https://substackcdn.com/image/fetch/$s_!ENrs!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2105d941-30bd-4be0-ba88-14bc88059216_1672x941.png",
		desc: "\u201cOH YEA, PEOPLE OF THE LAND OF KYIV, SERFS, BOND-MEN, AND MIGHTY SUBJECTS!",
		lang: "en"
	},
	{
		title: "The Substitution of the Nation of Reputation with PR and Corruption: How the Anti-Corruption Sector Collapsed into Media Noise",
		link: "https://olehhello.substack.com/p/the-substitution-of-the-nation-of",
		img: "https://substackcdn.com/image/fetch/$s_!OIE7!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F825a3cc6-3d39-4501-841a-b74f90bf6be9_1672x941.png",
		desc: "The modern Ukrainian political landscape is trapped in a false substitute.",
		lang: "en"
	},
	{
		title: "Shock Punitivism: How the West Turned Ukrainian Institutional Reform into 19th-Century Barbaric Psychiatry",
		link: "https://olehhello.substack.com/p/shock-punitivism-how-the-west-turned",
		img: "https://substackcdn.com/image/fetch/$s_!wJn_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F12d547f3-5eaa-41b4-a5bd-91367ade362b_1672x941.png",
		desc: "In modern humanistic psychotherapy, there is a foundational axiom: every symptom or behavioral malfunction possesses adaptive value. An addiction, defense mechanism, or behavioral disorder does not stem from an individual\u2019s \u201cinherent criminality,\u201d but emerges as a coping strategy for the psyche or social body to survive severe structural trauma. Mature therapy approaches the patient with dignity: rather than beating them over the head, it seeks to understand the functional origin of the symptom and offers an ecological substitute\u2014a pathway toward growth, safety, and reputational capital.",
		lang: "en"
	},
	{
		title: "Colonial Scientism: How \u201cLiberal\u201d Media Manufactures Knowledge for the Global Periphery",
		link: "https://olehhello.substack.com/p/colonial-scientism-how-liberal-media",
		img: "https://substackcdn.com/image/fetch/$s_!6Pxz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdf8d6cd2-2022-4a8f-ac10-faea9eb0305f_1672x941.png",
		desc: "In epistemology, the concept of the episteme defines the foundational system of rules determining what a given society accepts as \u201cknowledge\u201d and what it dismisses as superstition or ignorance.",
		lang: "en"
	},
	{
		title: "Zelensky as the Ultimate Hitchcockian Villain: The Art of Media Suspense on the Ashes",
		link: "https://olehhello.substack.com/p/zelensky-as-the-ultimate-hitchcockian",
		img: "https://substackcdn.com/image/fetch/$s_!FEf8!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F64a41e6c-45b0-45fd-beef-d99c73c4a8cf_1672x941.png",
		desc: "In the classic film theory of Alfred Hitchcock, there is a fundamental law that dictates the quality of any dramatic work: \u201cThe more successful the villain, the more successful the picture.\u201d",
		lang: "en"
	},
	{
		title: "The Anatomy of Schizo-Sovereignty: From an Organic Cosmos to Machine Extermination",
		link: "https://olehhello.substack.com/p/the-anatomy-of-schizo-sovereignty",
		img: "https://substackcdn.com/image/fetch/$s_!jfxk!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Ffb272692-01d9-43f6-b956-feccaf1a0774_1672x941.png",
		desc: "The birth defect of Ukraine\u2019s \u201cschizo-sovereignty\u201d was engineered exclusively by the West.",
		lang: "en"
	},
	{
		title: "MAGA\u2019s Teflon Media Machine Instead of Strategy: How American Media Capitalism Turns Tragedies into Fuel",
		link: "https://olehhello.substack.com/p/magas-teflon-media-machine-instead",
		img: "https://substackcdn.com/image/fetch/$s_!oWXI!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3c81e3ad-ac44-438c-bd70-82d8b6b971f6_1672x941.png",
		desc: "Introduction: The Death of a Hawk as a Media Product",
		lang: "en"
	},
	{
		title: "Military Reform in Asymmetric Warfare: Turning a \u201cSoviet System\u201d Into a Human-Centric Machine",
		link: "https://olehhello.substack.com/p/military-reform-in-asymmetric-warfare",
		img: "https://substackcdn.com/image/fetch/$s_!EiQn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F9a0f4f09-45ff-49a2-9188-a86e16b09dbb_1536x1024.png",
		desc: "More than four years have passed since the beginning of the full-scale invasion.",
		lang: "en"
	},
	{
		title: "Verdict on the \u201cNeighbourhood Policy\u201d: Extractive Periphery and Geopolitical Noose \u2014 Why the West Created a Failed State in Ukraine and Unleashed the Bloodiest War of the 21st Century",
		link: "https://olehhello.substack.com/p/verdict-on-the-neighbourhood-policy",
		img: "https://substackcdn.com/image/fetch/$s_!6S4_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe20ab4df-0d3a-4935-83d3-6654abd08305_1536x1024.png",
		desc: "The current catastrophic state of Eastern Europe is neither an accident nor the \u201cteething troubles of a young democracy.\u201d It is the result of a 30-year geopolitical imbalance created by the West, which, under solemn slogans of \u201chumanism\u201d and \u201cdemocracy,\u201d actually destroyed Ukraine\u2019s agency and single-handedly cultivated an authoritarian monster in the East.",
		lang: "en"
	},
	{
		title: "Failed State Under a Patriotic Fa\u00e7ade: Why 30 Years of \u201cState-Building\u201d Were a Grand Imitation",
		link: "https://olehhello.substack.com/p/failed-state-under-a-patriotic-facade",
		img: "https://substackcdn.com/image/fetch/$s_!ralW!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F40574246-7ec7-412a-8a00-54c279144b09_1536x1024.png",
		desc: "The primary tragedy of modern Ukraine lies not only in external aggression.",
		lang: "en"
	},
	{
		title: "The Collapse of the \u201cGeneral Secretary of Victory\u201d: How the Protest Broke the Monopoly on Desire and Exposed the Oligarchic Octopus",
		link: "https://olehhello.substack.com/p/the-collapse-of-the-general-secretary",
		img: "https://substackcdn.com/image/fetch/$s_!yyFX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F45e9c0e9-0a70-4545-a066-cd69b2f517f2_1536x1024.png",
		desc: "The paradox of political stagnation always lies in the system\u2019s attempt to pass off its own agony as the only possible fortress of salvation.",
		lang: "en"
	},
	{
		title: "CJSC \u201cPompous Oligarchic Patriotism\u201d: The Anatomy of Archaic Nepotism and the Simulation of a Nation",
		link: "https://olehhello.substack.com/p/cjsc-pompous-oligarchic-patriotism",
		img: "https://substackcdn.com/image/fetch/$s_!u3HL!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Faafde759-8caf-4684-a5d4-179ce187efd1_1536x1024.png",
		desc: "If Zelenskyy\u2019s President\u2019s Office builds a media \u201cDynasty-on-Bones\u201d through digital interfaces and linear military archaism, Petro Poroshenko\u2019s political contour serves as the foundation and matrix of that very same post-Soviet, oligarchic-nepotistic order",
		lang: "en"
	},
	{
		title: "Dynasty on Bones: How the Simulacrum of \u201cVictory\u201d Builds a Little Russia",
		link: "https://olehhello.substack.com/p/dynasty-on-bones-how-the-simulacrum",
		img: "https://substackcdn.com/image/fetch/$s_!7TqH!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F237a2817-efaa-467a-8b95-5437641fa3a1_1536x1024.png",
		desc: "The ghosts of the stagnant Soviet Union always return not in the form of old tanks or Pioneer ties, but as a total, soothing, monopolistic lie.",
		lang: "en"
	},
	{
		title: "Two Armies Within One War: Why Cybernetization is the Only Alternative to Catastrophe",
		link: "https://olehhello.substack.com/p/two-armies-within-one-war-why-cybernetization",
		img: "https://substackcdn.com/image/fetch/$s_!XPJS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd5158d99-66a2-48ba-af9e-7ae24dd973ca_1536x1024.png",
		desc: "Every war is a contest of management models.",
		lang: "en"
	},
	{
		title: "Overcoming Glaring Contradictions, the Crisis of Statehood, and the Zero-Value of Life",
		link: "https://olehhello.substack.com/p/overcoming-glaring-contradictions",
		img: "https://substackcdn.com/image/fetch/$s_!Pmj3!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F18e82fc3-ab59-44ca-acb1-471b13a6e76d_1536x1024.png",
		desc: "Modern Ukraine is rapidly approaching its historic breaking point.",
		lang: "en"
	},
	{
		title: "The Mutation of \u201cUkrainska Pravda\u201d: Facade Liberalism in the Service of State Terror",
		link: "https://olehhello.substack.com/p/the-mutation-of-ukrainska-pravda",
		img: "https://substackcdn.com/image/fetch/$s_!UNFy!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6b08680b-add1-4f16-9ee5-06aafe009480_1536x1024.png",
		desc: "Georgiy Gongadze founded \u201cUkrainska Pravda\u201d as a weapon against oligarchic omnipotence, censorship, and the feudal lawlessness of elites.",
		lang: "en"
	},
	{
		title: "The Great Deconstruction of Otamanshchyna: How Ukraine Can Shift from the Political Unconscious to the Institutional Ego",
		link: "https://olehhello.substack.com/p/the-great-deconstruction-of-otamanshchyna",
		img: "https://substackcdn.com/image/fetch/$s_!zg-k!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fa917111e-c712-45e1-a694-d13029c7936f_1536x1024.png",
		desc: "The contemporary geopolitical architecture is cracking at the seams.",
		lang: "en"
	},
	{
		title: "Politics \u201cWithout Politics\u201d: How the Oligarchic Cooperative Burns Our Subjectivity for the Constitution of Disenfranchisement",
		link: "https://olehhello.substack.com/p/politics-without-politics-how-the",
		img: "https://substackcdn.com/image/fetch/$s_!_Ztx!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F04e20a40-7a57-475e-a7e6-136435a18bb5_1536x1024.png",
		desc: "Rumors of backroom negotiations, clandestine approval polling, and covert election preparations that increasingly break through the veil of censorship are not mere political gossip.",
		lang: "en"
	},
	{
		title: "The Anatomy of Sabotage: Why Ukraine Fights with \u201cMeat\u201d Instead of Kill Zones",
		link: "https://olehhello.substack.com/p/the-anatomy-of-sabotage-why-ukraine",
		img: "https://substackcdn.com/image/fetch/$s_!fsdq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F3b17d629-4696-46c8-aa83-0bb8497525ca_1536x1024.png",
		desc: "The ultimate paradox\u2014and the ultimate crime\u2014of the current Ukrainian defense model lies in the fact that the technological solution for asymmetric containment of the enemy has been known for years.",
		lang: "en"
	},
	{
		title: "Systemic Violence in \u201cSkelya\u201d as Ukraine\u2019s New Model",
		link: "https://olehhello.substack.com/p/systemic-violence-in-skelya-as-ukraines",
		img: "https://substackcdn.com/image/fetch/$s_!HfxO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8f152477-5f18-413a-af1e-6255308b8fa8_1536x1024.png",
		desc: "Today, Ukrainian society faces a binary, fundamental choice of coordinates that will determine not just the outcome of this war, but the very nature of our state for decades to come.",
		lang: "en"
	},
	{
		title: "The \u201cKvartal\u201d Style of Zelenskyy\u2019s Diplomacy: How Emotional Pressure Burned Through U.S. Bipartisan Support",
		link: "https://olehhello.substack.com/p/the-kvartal-style-of-zelenskyys-diplomacy",
		img: "https://substackcdn.com/image/fetch/$s_!LIaS!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F76b55619-3b7e-42c3-bcaf-50cc33a02728_1024x1536.png",
		desc: "Behind closed doors in Washington and across the pages of the Western press, alarming warning bells are ringing with increasing frequency: the harsh, ultimatum-driven rhetoric of official Kyiv is beginning to work against Ukraine itself.",
		lang: "en"
	},
	{
		title: "Capitalism as a Machine of Negativity: From the Accursed Share to the Wartime Marketplace",
		link: "https://olehhello.substack.com/p/capitalism-as-a-machine-of-negativity",
		img: "https://substackcdn.com/image/fetch/$s_!Ooo1!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F31a8e2d3-52f0-4db8-878a-33866fcf72a6_1024x1536.png",
		desc: "The modern mainstream is used to viewing liberalism and capitalism (which are historically two sides of the same coin) through the showcase of positivity: the accumulation of wealth, the expansion of rights, and individual freedom.",
		lang: "en"
	},
	{
		title: "Infected with Populism: How the Expert Simulation of \u201cStrength\u201d Conserves Ukrainian Backwardness",
		link: "https://olehhello.substack.com/p/infected-with-populism-how-the-expert",
		img: "https://substackcdn.com/image/fetch/$s_!bZPn!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F677afe87-5c76-4d61-86e8-cbd0089cf214_1536x1024.png",
		desc: "Today, a dangerous trend is becoming increasingly clear within the Ukrainian expert community.",
		lang: "en"
	},
	{
		title: "The Dynasty of Hyperreality: The Anachronism and Utter Cynicism of the Elite in the HD Era",
		link: "https://olehhello.substack.com/p/the-dynasty-of-hyperreality-the-anachronism",
		img: "https://substackcdn.com/image/fetch/$s_!lMoO!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F2fb37641-fcf1-4488-9240-95869edf1e16_1536x1024.png",
		desc: "Today, we are witnessing a unique and altogether repulsive political spectacle.",
		lang: "en"
	},
	{
		title: "The Simulacrum of Justice: Postmodern Rule of Law and the Arrest of Ukrainian Being",
		link: "https://olehhello.substack.com/p/the-simulacrum-of-justice-postmodern",
		img: "https://substackcdn.com/image/fetch/$s_!7R5I!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F74e9df6d-8af2-4921-ba09-e4371df01f23_1536x1024.png",
		desc: "Modern Western legal thought prides itself on its humanistic evolution.",
		lang: "en"
	},
	{
		title: "The Event in the Prison of Law: The Volhynia Tragedy as Archaic Affect and the Epistemic Violence of Modernity",
		link: "https://olehhello.substack.com/p/the-event-in-the-prison-of-law-the",
		img: "https://substackcdn.com/image/fetch/$s_!EQTg!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fe3de4dda-46a4-4287-8772-e847fb867103_1536x1024.png",
		desc: "Contemporary political and diplomatic discourse surrounding the 1943 Volhynia events demonstrates a textbook trauma of the modern mind.",
		lang: "en"
	},
	{
		title: "Epistolary Leaderism: Why Zelenskyy\u2019s \u201cOpen Letter\u201d to Putin is a Triumph of PR Over Reality",
		link: "https://olehhello.substack.com/p/epistolary-leaderism-why-zelenskyys",
		img: "https://substackcdn.com/image/fetch/$s_!pq05!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fd83ed3ed-10ca-4ed0-842c-5470e3298e6a_1408x768.png",
		desc: "The recent appearance of Volodymyr Zelenskyy\u2019s \u201copen letter\u201d to Vladimir Putin in the public square triggered a predictable wave of admiration among domestic hurrah-patriotic bloggers.",
		lang: "en"
	},
	{
		title: "The Illusion of \u201cExhaustion\u201d: Why Current Sanctions are Futile and Russia Can Wage War for Decades",
		link: "https://olehhello.substack.com/p/the-illusion-of-exhaustion-why-current",
		img: "https://substackcdn.com/image/fetch/$s_!ekXX!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4aaad8f6-52de-4799-8b02-827c0bef8e86_1408x768.png",
		desc: "The recent combined aerial strike by the Russian Federation against Kyiv, Dnipro, and other Ukrainian cities cost the Kremlin an estimated $700 million. To an outside observer, this figure might seem like an astronomical, unsustainable loss. However, a deep analysis of Russia\u2019s military expenditures and economic trajectory reveals the opposite:",
		lang: "en"
	},
	{
		title: "The \u201cUseful Idiots\u201d Syndrome: How Backroom Amateurism in Times of War Becomes a Weapon for the Enemy",
		link: "https://olehhello.substack.com/p/the-useful-idiots-syndrome-how-backroom",
		img: "https://substackcdn.com/image/fetch/$s_!ns82!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fc1f451ee-900e-4aa5-8fbe-e3d434771b63_1408x768.png",
		desc: "When the expression \u201cuseful idiots\u201d was attributed to Lenin, it referred to naive Western intellectuals who, blinded by their own illusions or sheer ignorance, played into the hands of the totalitarian Soviet regime.",
		lang: "en"
	},
	{
		title: "The Oblivion of the Present and Future in Favor of a Media-Driven Necrocult",
		link: "https://olehhello.substack.com/p/the-oblivion-of-the-present-and-future",
		img: "https://substackcdn.com/image/fetch/$s_!JHoh!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F46453b55-fc40-4b2d-905d-dbf12e1af27e_1024x1536.png",
		desc: "Modern Ukraine finds itself at a unique and simultaneously eerie juncture in its history\u2014a point where the material body of the state is rapidly vanishing while its symbolic skeleton is being artificially reinforced.",
		lang: "en"
	},
	{
		title: "The Tragedy of Reactive Narcissism: How a Hand-Steered Vertical of Power Played Into the West\u2019s Strategy of \u201cExpending Ukraine\u201d",
		link: "https://olehhello.substack.com/p/the-tragedy-of-reactive-narcissism",
		img: "https://substackcdn.com/image/fetch/$s_!NkrU!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F24834eeb-77c0-4b74-b138-8033cc7e615a_1536x1024.png",
		desc: "When Ukrainian society demonstrated a phenomenon of total self-organization in 2022, the West was forced to revise its initial plan for the \u201cAfghanization\u201d of Ukraine.",
		lang: "en"
	},
	{
		title: "The Simulacrum of Containment: The Weak Cynicism of the West as an Evasion of the Challenge",
		link: "https://olehhello.substack.com/p/the-simulacrum-of-containment-the",
		img: "https://substackcdn.com/image/fetch/$s_!CSVo!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8207de58-dd99-45ca-b341-051958cb86d0_1536x1024.png",
		desc: "Modern Western Realpolitik is no longer about values, geopolitical courage, or even classical imperialism.",
		lang: "en"
	},
	{
		title: "The Second Front: Corruption as a Mechanism of National Degradation and Murder",
		link: "https://olehhello.substack.com/p/the-second-front-corruption-as-a",
		img: "https://substackcdn.com/image/fetch/$s_!CYwz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fde799235-25e1-4370-9406-59f3b0c3b088_1536x1024.png",
		desc: "The phrase \u201ccorruption kills\u201d is not a metaphor.",
		lang: "en"
	},
	{
		title: "The \u201cSpirit of Anchorage\u201d and the Diplomacy of Humiliation: How Geopolitics Becomes a Special Operation",
		link: "https://olehhello.substack.com/p/the-spirit-of-anchorage-and-the-diplomacy",
		img: "https://substackcdn.com/image/fetch/$s_!3JB4!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fddc2d095-a7ce-41db-8a37-52c80bc3fb9f_1408x768.png",
		desc: "In world politics, there are rules of the game built over centuries.",
		lang: "en"
	},
	{
		title: "Project \u201cManaged Collapse\u201d: How U.S. Strategy Transformed a Tech State into a Raw Material Outpost",
		link: "https://olehhello.substack.com/p/project-managed-collapse-how-us-strategy",
		img: "https://substackcdn.com/image/fetch/$s_!r6ly!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fcd44bfe0-d323-4abe-9b72-dd486ffc3b2a_1536x1024.png",
		desc: "Part 1.",
		lang: "en"
	},
	{
		title: "The Evolution of Capitalism: From Concrete Banditry to Anthropological Catastrophe",
		link: "https://olehhello.substack.com/p/the-evolution-of-capitalism-from",
		img: "https://substackcdn.com/image/fetch/$s_!uaN_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F81dc5d6c-1547-4fba-b119-833b8b278500_784x1168.jpeg",
		desc: "This text serves as a clinical summary of a system that began as a tool for exchange but has evolved into an autonomous pathology, devouring its own substrate.Thanks for reading!",
		lang: "en"
	},
	{
		title: "War as Destiny vs. War as a Business Model: An Analysis of Three Resistance Strategies",
		link: "https://olehhello.substack.com/p/war-as-destiny-vs-war-as-a-business",
		img: "https://substackcdn.com/image/fetch/$s_!TN58!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F70a535a4-bf51-4618-a3c5-6d370af5e929_1408x768.png",
		desc: "Today, Ukraine\u2019s resistance management system is trapped between two historically effective models of warfare, having chosen instead a third\u2014hybrid\u2014path that benefits the state apparatus but is devastating to the nation.",
		lang: "en"
	},
	{
		title: "Ukraine of Two Leaders: The Flourishing of Institutions vs. the Trap of 'Bare Life' and Perpetual War",
		link: "https://olehhello.substack.com/p/ukraine-of-two-leaders-the-flourishing",
		img: "https://substackcdn.com/image/fetch/$s_!JBkF!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1ebcfa9a-38ff-454a-8b15-9b4e304624ab_1408x768.png",
		desc: "Thanks for reading!",
		lang: "en"
	},
	{
		title: "UKRAINE AS A COLONY OF THE WEST. The Verdict on the Four Freedoms: Freedom from Life",
		link: "https://olehhello.substack.com/p/ukraine-as-a-colony-of-the-west-the",
		img: "https://substackcdn.com/image/fetch/$s_!DKPK!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F49c27d8b-1533-492c-bff9-1489097a2d83_1380x752.png",
		desc: "The awarding of the \u201cFour Freedoms Award\u201d to Ukraine\u2019s political leadership, against the backdrop of a systemic dismantling of constitutional rights, reveals a profound crisis of relevance in Western institutions and policies.",
		lang: "en"
	},
	{
		title: "Digital Totalitarianism in the Heart of Europe: A Wake-Up Call for Horizon Capital and EVO",
		link: "https://olehhello.substack.com/p/digital-totalitarianism-in-the-heart",
		img: "https://substackcdn.com/image/fetch/$s_!_QVz!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F11d3bd76-6c01-4973-8886-0fa1906ed6c8_1408x768.png",
		desc: "While Ukraine fights for its life on the front lines of democracy, a different kind of struggle is unfolding within its digital borders.",
		lang: "en"
	},
	{
		title: "From Magna Carta to the \u2018Envelope\u2019 Republic: The Anatomy of a Fiscal Panopticon",
		link: "https://olehhello.substack.com/p/from-magna-carta-to-the-envelope",
		img: "https://substackcdn.com/image/fetch/$s_!6vG_!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F1176bbe6-836d-4604-bbd9-8a92e702828f_1408x768.png",
		desc: "The history of Western democracy is essentially the history of the struggle for the right not to surrender one\u2019s labor without a say.",
		lang: "en"
	},
	{
		title: "The Great Lie: From Dignity to a \u201cSectarian State\u201d",
		link: "https://olehhello.substack.com/p/the-great-lie-from-dignity-to-a-sectarian",
		img: "https://substackcdn.com/image/fetch/$s_!T1tq!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F8c7ea11c-a5ad-4d4e-8bdb-cd74e275008a_1408x768.png",
		desc: "What began in 2014 as the sincere yearning of millions for freedom, the rule of law, and European prosperity has, over the past decade, transformed into its exact opposite.",
		lang: "en"
	},
	{
		title: "The Erosion of Marketplace Ethics: Why Shafa.ua and EVO Are Demolishing Trust",
		link: "https://olehhello.substack.com/p/the-erosion-of-marketplace-ethics",
		img: "https://substackcdn.com/image/fetch/$s_!awDZ!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fdc2fac74-cd0c-4e32-ac62-3c864f9c54a9_1408x768.png",
		desc: "While EVO (@EVO.company) top management and investors from Horizon Capital (@horizoncapitalua) tout spectacular successes, boast about inclusivity, and showcase the correct use of gender-neutral language and feminitives in their public-facing comms and at high-profile digital conferences, the reality within their core assets\u2014specifically",
		lang: "en"
	},
	{
		title: "Diplomacy in the Era of Right-makes-Might: The Triumph of the Absurd and the \u201cShontepsel and Tarapunka\u201d Liquidation Commission",
		link: "https://olehhello.substack.com/p/diplomacy-in-the-era-of-right-makes",
		img: "https://substackcdn.com/image/fetch/$s_!nRuj!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F25861471-84c6-4f49-95dd-65c5d5e58973_1408x768.png",
		desc: "The world of March 2026 has finally torn off the mask of a \u201crules-based international order.\u201d What used to be called diplomacy has mutated into a transactional performance, where instead of international lawyers, a liquidation commission composed of \u201cShontepsel and Tarapunka\u201d",
		lang: "en"
	},
	{
		title: "A glimpse into the lives of three \"mighty\" leaders",
		link: "https://olehhello.substack.com/p/a-glimpse-into-the-lives-of-three",
		img: "https://substackcdn.com/image/fetch/$s_!zGTP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F12e72355-394e-4350-aef6-7581916c93a2_1408x768.png",
		desc: "Once, Trump, Putin, and Zelenskyy met on the ocean shore and found a golden fish.",
		lang: "en"
	},
	{
		title: "The End of the \u201cSerf War\u201d: Time for the Elites to Fight",
		link: "https://olehhello.substack.com/p/the-end-of-the-serf-war-time-for",
		img: "https://substackcdn.com/image/fetch/$s_!dE5v!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fbffa0477-6750-47e7-aef6-24b92b74ddd2_1376x768.png",
		desc: "The End of the \u201cSerf War\u201d: Time for the Elites to Fight",
		lang: "en"
	},
	{
		title: "Donald Trump: A 21st-Century Hitler? How History Repeats Itself",
		link: "https://olehhello.substack.com/p/donald-trump-a-21st-century-hitler",
		img: "https://substackcdn.com/image/fetch/$s_!e1QP!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F06f0926e-07df-4e84-b2f2-0b8129502eea_1377x768.png",
		desc: "Donald Trump \u2014 The 21st Century Hitler: How Does History Repeat Itself?",
		lang: "en"
	},
	{
		title: "Sociology\u2019s Crime Against Humanity: The Diagnosis of Ignorance",
		link: "https://olehhello.substack.com/p/sociologys-crime-against-humanity",
		img: "https://substackcdn.com/image/fetch/$s_!lUx9!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F5b6926ee-19c0-4861-833a-d7fb8711c247_1377x768.png",
		desc: "Sociology\u2019s Crime Against Humanity: The Diagnosis of Ignorance",
		lang: "en"
	},
	{
		title: "The Epitaph of Cosmopolitan Law: From Habermas\u2019s Dream to Global \u201cBestiality\u201d",
		link: "https://olehhello.substack.com/p/the-epitaph-of-cosmopolitan-law-from",
		img: "https://substackcdn.com/image/fetch/$s_!ij79!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F6cd5e000-8e78-4bd9-aebd-c9814caf9de3_1376x768.png",
		desc: "The Epitaph of Cosmopolitan Law: From Habermas\u2019s Dream to Global \u201cBestiality\u201d",
		lang: "en"
	},
	{
		title: "Four Stages of Symbolic Violence Against the Ukrainian People",
		link: "https://olehhello.substack.com/p/four-stages-of-symbolic-violence",
		img: "https://substackcdn.com/image/fetch/$s_!jiEC!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F4c0da6ca-0bae-404c-8cdf-79262874e161_1408x768.png",
		desc: "Four Stages of Symbolic Violence Against the Ukrainian People",
		lang: "en"
	},
	{
		title: "The Digital Leviathan: IMF Constructing a \"Concentration Camp\" on the Ruins of Microeconomics",
		link: "https://olehhello.substack.com/p/the-digital-leviathan-imf-constructing",
		img: "https://substackcdn.com/image/fetch/$s_!copi!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2Fca964c9d-f317-49c6-a4e7-c33cbcdaa32e_1408x768.png",
		desc: "Title: The Digital Leviathan: How the IMF is Building a \u201cConcentration Camp\u201d on the Ruins of Microeconomics",
		lang: "en"
	},
];
