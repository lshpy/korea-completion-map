/* Seoul Completion Map — 카드 덱 18장 (2026-08-14 컷)
   essential/hidden/night 훅 수치 = 데이터랩 공식 데이터. 전체 풀은 분석/derived 파일 참조 */
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
