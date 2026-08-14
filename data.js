/* Seoul Completion Map v3 — 카드 덱 (2026-08-14) — K-Wave 포함 34장 */
const CARDS = [
 {
  "en": "Gyeongbokgung & Bukak Skyway",
  "ko": "경복궁·북악스카이",
  "hood": "Jongno",
  "gu": "종로구",
  "w": 2,
  "cat": "essential",
  "emoji": "🏯",
  "hook": "The classic start — Jongno's most-visited spot area (14.9% of all district visits)"
 },
 {
  "en": "National Museum of Korea",
  "ko": "국립중앙박물관",
  "hood": "Yongsan",
  "gu": "용산구",
  "w": 2,
  "cat": "essential",
  "emoji": "🏛️",
  "hook": "27.7% of Yongsan visits — Korea's 5,000 years under one roof, free entry"
 },
 {
  "en": "COEX & Starfield Library",
  "ko": "코엑스·별마당도서관",
  "hood": "Gangnam",
  "gu": "강남구",
  "w": 2,
  "cat": "essential",
  "emoji": "📚",
  "hook": "43.9% of all Gangnam visits happen here — the famous library you've seen on Instagram"
 },
 {
  "en": "Seoul Forest",
  "ko": "서울숲",
  "hood": "Seongsu",
  "gu": "성동구",
  "w": 2,
  "cat": "essential",
  "emoji": "🌳",
  "hook": "35.4% of Seongsu visits — Seoul's Brooklyn has a forest with deer"
 },
 {
  "en": "Yeouido Han River Park",
  "ko": "여의도한강공원",
  "hood": "Yeouido",
  "gu": "영등포구",
  "w": 2,
  "cat": "essential",
  "emoji": "🌊",
  "hook": "44.3% of Yeongdeungpo visits — the Han River picnic you've seen in every K-drama"
 },
 {
  "en": "Olympic Park",
  "ko": "올림픽공원",
  "hood": "Jamsil",
  "gu": "송파구",
  "w": 2,
  "cat": "essential",
  "emoji": "🏟️",
  "hook": "Jamsil's green giant — one lone tree here is more famous than most landmarks"
 },
 {
  "en": "Seoul Arts Center",
  "ko": "예술의전당",
  "hood": "Seocho",
  "gu": "서초구",
  "w": 3,
  "cat": "essential",
  "emoji": "🎭",
  "hook": "25.9% of Seocho visits — where Seoul goes for opera and calligraphy"
 },
 {
  "en": "Jingwansa Temple",
  "ko": "진관사",
  "hood": "Eunpyeong",
  "gu": "은평구",
  "w": 4,
  "cat": "essential",
  "emoji": "🪷",
  "hook": "A royal temple in the forest — famous for temple food, 10 min from a hanok village"
 },
 {
  "en": "Dream Forest",
  "ko": "북서울꿈의숲",
  "hood": "Gangbuk",
  "gu": "강북구",
  "w": 4,
  "cat": "essential",
  "emoji": "🍃",
  "hook": "North Seoul's secret park — 25.4% of Gangbuk visits, zero tour buses"
 },
 {
  "en": "Children's Grand Park",
  "ko": "어린이대공원",
  "hood": "Gwangjin",
  "gu": "광진구",
  "w": 3,
  "cat": "essential",
  "emoji": "🎠",
  "hook": "A free zoo+park where Seoul families actually go — 32.2% of Gwangjin visits"
 },
 {
  "en": "Seonjeongneung Royal Tombs",
  "ko": "선정릉",
  "hood": "Gangnam",
  "gu": "강남구",
  "w": 5,
  "cat": "hidden",
  "emoji": "👑",
  "hook": "A UNESCO site hiding between Gangnam towers — only 1.2% of visitors find it"
 },
 {
  "en": "Théâtre des Lumières",
  "ko": "빛의시어터",
  "hood": "Gwangjin",
  "gu": "광진구",
  "w": 5,
  "cat": "hidden",
  "emoji": "✨",
  "hook": "Immersive art the algorithm hasn't found yet — 0.7% visit share"
 },
 {
  "en": "National Gugak Center",
  "ko": "국립국악원",
  "hood": "Seocho",
  "gu": "서초구",
  "w": 5,
  "cat": "hidden",
  "emoji": "🥁",
  "hook": "Korean court music live — 0.6% visit share, centuries of sound"
 },
 {
  "en": "Seoul Museum of Craft Art",
  "ko": "서울공예박물관",
  "hood": "Jongno",
  "gu": "종로구",
  "w": 4,
  "cat": "hidden",
  "emoji": "🏺",
  "hook": "Next to the palace, missed by 99% of palace visitors — free & stunning"
 },
 {
  "en": "Cheonggyecheon Museum",
  "ko": "청계천박물관",
  "hood": "Seongsu",
  "gu": "성동구",
  "w": 5,
  "cat": "hidden",
  "emoji": "🌉",
  "hook": "The story of Seoul's resurrected river — 1.1% visit share"
 },
 {
  "en": "Sanwoollim Small Theatre",
  "ko": "소극장산울림",
  "hood": "Hongdae",
  "gu": "마포구",
  "w": 5,
  "cat": "hidden",
  "emoji": "🎪",
  "hook": "A 40-year-old indie theatre in Hongdae — 0.7% visit share, pure local culture"
 },
 {
  "en": "Seongbuk Museum of Art",
  "ko": "성북구립미술관",
  "hood": "Seongbuk",
  "gu": "성북구",
  "w": 5,
  "cat": "hidden",
  "emoji": "🖼️",
  "hook": "An art walk in Seoul's old literati hills — 0.6% visit share"
 },
 {
  "en": "Sindang-dong at night",
  "ko": "신당동의 밤",
  "hood": "Sindang",
  "gu": "중구",
  "w": 4,
  "cat": "night",
  "emoji": "🌙",
  "hook": "Seoul's #1 night neighborhood by data — 53.6% of its visits happen after dark"
 },
 {
  "en": "Itaewon after midnight",
  "ko": "이태원의 밤",
  "hood": "Itaewon",
  "gu": "용산구",
  "w": 4,
  "cat": "night",
  "emoji": "🍸",
  "hook": "#2 night district in Seoul — 53.4% of visits are nocturnal"
 },
 {
  "en": "Gwangjang Market late-night",
  "ko": "광장시장 밤 야식",
  "hood": "Jongno",
  "gu": "종로구",
  "w": 4,
  "cat": "night",
  "emoji": "🥟",
  "hook": "Bindaetteok and soju under fluorescent lights — the Seoul night classic"
 },
 {
  "en": "Say \"jal meogeosseumnida!\" leaving a restaurant",
  "ko": "\"잘 먹었습니다!\"",
  "hood": "Anywhere",
  "gu": null,
  "w": 4,
  "cat": "human",
  "emoji": "🙏",
  "hook": "\"I ate well!\" — watch the owner's face light up. This phrase opens Seoul"
 },
 {
  "en": "Eat scalding soup & say \"siwonhada!\"",
  "ko": "뜨거운 국물에 \"시원하다!\"",
  "hood": "Anywhere",
  "gu": null,
  "w": 4,
  "cat": "human",
  "emoji": "🍲",
  "hook": "Koreans call boiling soup 'refreshing.' Say it and you're one of us"
 },
 {
  "en": "Get free \"service\" at a market",
  "ko": "시장에서 '서비스' 받기",
  "hood": "Anywhere",
  "gu": null,
  "w": 5,
  "cat": "human",
  "emoji": "🎁",
  "hook": "Korea's bonus culture — you earn it by feeling like a regular"
 },
 {
  "en": "Leave a shop with \"sugohaseyo~\"",
  "ko": "\"수고하세요~\"",
  "hood": "Anywhere",
  "gu": null,
  "w": 4,
  "cat": "human",
  "emoji": "👋",
  "hook": "An untranslatable goodbye that means 'I see your hard work'"
 },
 {
  "en": "Han River night + convenience store ramyeon",
  "ko": "한강 밤 + 편의점 라면",
  "hood": "Han River",
  "gu": null,
  "w": 4,
  "cat": "daily",
  "emoji": "🍜",
  "hook": "The 3,000-won dinner with a million-dollar view — peak Korea aesthetic"
 },
 {
  "en": "Visit the same café twice",
  "ko": "같은 카페 두 번 가기",
  "hood": "Anywhere",
  "gu": null,
  "w": 5,
  "cat": "daily",
  "emoji": "☕",
  "hook": "Twice makes you a regular. Regulars aren't tourists anymore"
 },
 {
  "en": "K-Star Road, Apgujeong",
  "ko": "케이스타로드",
  "hood": "Apgujeong",
  "gu": "강남구",
  "w": 4,
  "cat": "kwave",
  "emoji": "🐻",
  "hook": "The idol agency alley — GangnamDol bears for every K-pop group you love"
 },
 {
  "en": "HYBE building pilgrimage",
  "ko": "하이브 사옥",
  "hood": "Yongsan",
  "gu": "용산구",
  "w": 4,
  "cat": "kwave",
  "emoji": "💜",
  "hook": "The mecca. If you know, you know — bring your photocard"
 },
 {
  "en": "Bukchon Hanok Village drama alleys",
  "ko": "북촌한옥마을",
  "hood": "Jongno",
  "gu": "종로구",
  "w": 3,
  "cat": "kwave",
  "emoji": "🎬",
  "hook": "You've already seen these alleys — in at least three K-dramas"
 },
 {
  "en": "N Seoul Tower love locks",
  "ko": "남산타워 자물쇠",
  "hood": "Namsan",
  "gu": "용산구",
  "w": 3,
  "cat": "kwave",
  "emoji": "🔒",
  "hook": "Where every K-drama couple ends up eventually. Now it's your turn"
 },
 {
  "en": "Spring — Yeouido cherry blossoms",
  "ko": "봄 — 여의도 벚꽃",
  "hood": "Yeouido",
  "gu": "영등포구",
  "w": 5,
  "cat": "season",
  "season": "spring",
  "emoji": "🌸",
  "hook": "Two weeks a year. Miss it, and you wait 50 more"
 },
 {
  "en": "Summer — Han River chimaek nights",
  "ko": "여름 — 한강 치맥",
  "hood": "Han River",
  "gu": null,
  "w": 4,
  "cat": "season",
  "season": "summer",
  "emoji": "🍗",
  "hook": "Fried chicken + beer + river breeze. Summer Seoul's holy trinity"
 },
 {
  "en": "Autumn — Deoksugung stone wall road",
  "ko": "가을 — 덕수궁 돌담길",
  "hood": "City Hall",
  "gu": "중구",
  "w": 5,
  "cat": "season",
  "season": "autumn",
  "emoji": "🍁",
  "hook": "Seoul's most romantic 900 meters — ginkgo gold for 3 weeks only"
 },
 {
  "en": "Winter — Gyeongbokgung under snow",
  "ko": "겨울 — 눈 내린 경복궁",
  "hood": "Jongno",
  "gu": "종로구",
  "w": 5,
  "cat": "season",
  "season": "winter",
  "emoji": "❄️",
  "hook": "Only a few days a year. The palace becomes a Joseon painting"
 }
];
