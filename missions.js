/* The Seoul Local Test — 미션 덱 18 (2026-08-14)
   장소 선정: 데이터랩 인기관광지·야간·연관 + 군집분석. 현지인/외지인 갭 지수로 보강 예정 */
const MISSIONS = [
 {
  "id": 1,
  "phrase": {
   "ko": "이모, 뭐가 맛있어요?",
   "rom": "Imo, mwoga masisseoyo?",
   "en": "Auntie, what's good here?"
  },
  "place": {
   "en": "Gwangjang Market",
   "ko": "광장시장",
   "hood": "Jongno",
   "gu": "종로구"
  },
  "how": "Ask the stall auntie, then eat whatever she says. No menu browsing allowed.",
  "basis": "Seoul night-tourism data: Jongno late-night classic",
  "pts": 10,
  "cat": "talk"
 },
 {
  "id": 2,
  "phrase": {
   "ko": "잘 먹었습니다!",
   "rom": "Jal meogeosseumnida!",
   "en": "I ate well!"
  },
  "place": {
   "en": "Any restaurant",
   "ko": "아무 식당",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Say it loud enough for the owner to hear, on your way out. Watch their face.",
  "basis": "The phrase that opens Seoul",
  "pts": 6,
  "cat": "talk"
 },
 {
  "id": 3,
  "phrase": {
   "ko": "시원~하다!",
   "rom": "Siwonhada!",
   "en": "So refreshing! (about boiling soup)"
  },
  "place": {
   "en": "An old gukbap house in Sindang",
   "ko": "신당동 노포 국밥집",
   "hood": "Sindang",
   "gu": "중구"
  },
  "how": "Order gukbap. Take one spoon of scalding broth. Exhale the word. You're one of us now.",
  "basis": "KTO data: Sindang = Seoul's #1 night neighborhood (53.6%)",
  "pts": 10,
  "cat": "talk",
  "special": "night"
 },
 {
  "id": 4,
  "phrase": {
   "ko": "서비스예요?",
   "rom": "Seobiseu-yeyo?",
   "en": "Is this on the house?"
  },
  "place": {
   "en": "Tongin Market",
   "ko": "통인시장",
   "hood": "Seochon",
   "gu": "종로구"
  },
  "how": "Buy something small, chat a little, and see if a bonus appears. It's earned, not asked.",
  "basis": "Navigation data: the market palace visitors miss",
  "pts": 12,
  "cat": "talk"
 },
 {
  "id": 5,
  "phrase": {
   "ko": "아이스 아메리카노 한 잔이요",
   "rom": "Ice americano han jan-iyo",
   "en": "One iced americano, please"
  },
  "place": {
   "en": "A Seongsu café",
   "ko": "성수 카페",
   "hood": "Seongsu",
   "gu": "성동구"
  },
  "how": "Order fully in Korean at Seoul's Brooklyn. Bonus points if they don't switch to English.",
  "basis": "KTO data: Seoul Forest area = 35.4% of Seongsu visits",
  "pts": 8,
  "cat": "talk"
 },
 {
  "id": 6,
  "phrase": {
   "ko": "수고하세요~",
   "rom": "Sugohaseyo~",
   "en": "(untranslatable goodbye)"
  },
  "place": {
   "en": "Any shop",
   "ko": "아무 가게",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Leave any store with this. There is no English word for it. That's the point.",
  "basis": "The word that doesn't translate",
  "pts": 6,
  "cat": "talk"
 },
 {
  "id": 7,
  "phrase": {
   "ko": "라면 하나, 김치 추가요",
   "rom": "Ramyeon hana, kimchi chuga-yo",
   "en": "One ramyeon, extra kimchi"
  },
  "place": {
   "en": "Han River convenience store, Yeouido",
   "ko": "여의도 한강 편의점",
   "hood": "Yeouido",
   "gu": "영등포구"
  },
  "how": "Cook it yourself at the ramyeon machine. Eat facing the river. 3,000-won fine dining.",
  "basis": "KTO data: 44.3% of Yeongdeungpo visits = this riverside",
  "pts": 8,
  "cat": "live"
 },
 {
  "id": 8,
  "phrase": {
   "ko": "또 왔어요!",
   "rom": "Tto wasseoyo!",
   "en": "I'm back again!"
  },
  "place": {
   "en": "The same café, twice",
   "ko": "같은 카페 두 번",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Return to a café you liked. Say this. If they remember you — mission complete, Regular unlocked.",
  "basis": "단골(regular) is Seoul's highest honor",
  "pts": 15,
  "cat": "live",
  "special": "revisit"
 },
 {
  "id": 9,
  "phrase": {
   "ko": "한 곡만 더!",
   "rom": "Han gok-man deo!",
   "en": "Just one more song!"
  },
  "place": {
   "en": "A noraebang",
   "ko": "노래방",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Sing one Korean song. Any decade. Scoring machine's opinion doesn't count.",
  "basis": "Where Koreans actually go after dinner",
  "pts": 8,
  "cat": "live"
 },
 {
  "id": 10,
  "phrase": {
   "ko": "여기서 내릴게요",
   "rom": "Yeogiseo naerilgeyo",
   "en": "I'll get off here"
  },
  "place": {
   "en": "A random subway station",
   "ko": "아무 지하철역",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Board line 2. Get off somewhere you can't pronounce. Walk 30 minutes. No maps.",
  "basis": "How locals know their city",
  "pts": 10,
  "cat": "live"
 },
 {
  "id": 11,
  "phrase": {
   "ko": "산책 좀 하다 갈게요",
   "rom": "Sanchaek jom hada galgeyo",
   "en": "Just taking a walk"
  },
  "place": {
   "en": "Seonjeongneung Royal Tombs",
   "ko": "선정릉",
   "hood": "Gangnam",
   "gu": "강남구"
  },
  "how": "Lunch-walk a UNESCO royal tomb between Gangnam towers, like the office workers do.",
  "basis": "KTO data: only 1.2% of Gangnam visitors find it",
  "pts": 12,
  "cat": "find"
 },
 {
  "id": 12,
  "phrase": {
   "ko": "노을 봐요",
   "rom": "No-eul bwayo",
   "en": "Look at the sunset"
  },
  "place": {
   "en": "Naksan Fortress Wall",
   "ko": "낙산공원 성곽길",
   "hood": "Hyehwa",
   "gu": "종로구"
  },
  "how": "Climb the old fortress wall at golden hour. Locals bring beer. You should too.",
  "basis": "Cluster analysis: the wall walk guidebooks skip",
  "pts": 10,
  "cat": "find"
 },
 {
  "id": 13,
  "phrase": {
   "ko": "돗자리 펴자",
   "rom": "Dotjari pyeoja",
   "en": "Let's lay out the mat"
  },
  "place": {
   "en": "Seoul Forest picnic",
   "ko": "서울숲 피크닉",
   "hood": "Seongsu",
   "gu": "성동구"
  },
  "how": "Buy a mat at the convenience store. Join the grass. Stay till the deer-shaped lamps glow.",
  "basis": "KTO data: Seongsu's #1 — but tourists pass through in 20 min",
  "pts": 8,
  "cat": "find"
 },
 {
  "id": 14,
  "phrase": {
   "ko": "불 좀 꺼주세요",
   "rom": "(just whisper) wow",
   "en": "—"
  },
  "place": {
   "en": "Théâtre des Lumières",
   "ko": "빛의시어터",
   "hood": "Gwangjin",
   "gu": "광진구"
  },
  "how": "Van Gogh projected on every wall. Sit on the floor. Koreans cry here; you're allowed to.",
  "basis": "KTO data: 0.7% visit share — the algorithm hasn't found it",
  "pts": 12,
  "cat": "find"
 },
 {
  "id": 15,
  "phrase": {
   "ko": "최애가 누구예요?",
   "rom": "Choe-ae-ga nugu-yeyo?",
   "en": "Who's your bias?"
  },
  "place": {
   "en": "K-Star Road, Apgujeong",
   "ko": "케이스타로드",
   "hood": "Apgujeong",
   "gu": "강남구"
  },
  "how": "Find your group's GangnamDol bear. Ask another fan the question. Instant friendship.",
  "basis": "The idol-agency alley",
  "pts": 8,
  "cat": "find",
  "special": "kwave"
 },
 {
  "id": 16,
  "phrase": {
   "ko": "막걸리 한 잔 주세요",
   "rom": "Makgeolli han jan juseyo",
   "en": "One bowl of makgeolli, please"
  },
  "place": {
   "en": "A pajeon house on a rainy day",
   "ko": "비 오는 날 전집",
   "hood": "Anywhere",
   "gu": null
  },
  "how": "Rain in Seoul = pajeon + makgeolli. It's practically law. Wait for rain, then go.",
  "basis": "The rule every Korean knows",
  "pts": 10,
  "cat": "live",
  "special": "weather"
 },
 {
  "id": 17,
  "phrase": {
   "ko": "벚꽃 보러 왔어요",
   "rom": "Beotkkot boreo wasseoyo",
   "en": "I came for the blossoms"
  },
  "place": {
   "en": "Yeouido cherry blossom road",
   "ko": "여의도 벚꽃길",
   "hood": "Yeouido",
   "gu": "영등포구"
  },
  "how": "Two weeks a year. Miss it, wait fifty more. The calendar decides, not you.",
  "basis": "Seasonal window: early April only",
  "pts": 15,
  "cat": "find",
  "special": "season-spring"
 },
 {
  "id": 18,
  "phrase": {
   "ko": "눈 온다!",
   "rom": "Nun onda!",
   "en": "It's snowing!"
  },
  "place": {
   "en": "Gyeongbokgung under snow",
   "ko": "눈 내린 경복궁",
   "hood": "Jongno",
   "gu": "종로구"
  },
  "how": "Only a few mornings a year. When Seoul wakes up white, drop everything and go.",
  "basis": "Seasonal window: a handful of days",
  "pts": 15,
  "cat": "find",
  "special": "season-winter"
 }
];
