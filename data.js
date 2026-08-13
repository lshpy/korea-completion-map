/* 자동 생성 — 데이터랩 산출 항목 (엔진 v1.1, 2026-08-13, 9개 지역) */
const CATS = [
 {
  "icon": "🏛️",
  "n": "첫 번째 한국",
  "e": "The First Korea",
  "d": "각 지역 방문 1위 — 데이터랩 인기관광지 기준",
  "items": [
   {
    "t": "전주한옥마을 (전주)",
    "en": "Jeonju — No.1 spot",
    "w": 1.0,
    "region": "jeonbuk",
    "hint": "📊 전주 방문 점유 1위(56.0%) · 인기관광지"
   },
   {
    "t": "함덕해수욕장 (제주)",
    "en": "Jeju — No.1 spot",
    "w": 1.0,
    "region": "jeju",
    "hint": "📊 제주 방문 점유 1위(10.6%) · 인기관광지"
   },
   {
    "t": "불국사 (경주)",
    "en": "Gyeongju — No.1 spot",
    "w": 1.0,
    "region": "gyeongbuk",
    "hint": "📊 경주 방문 점유 1위(16.2%) · 인기관광지"
   },
   {
    "t": "경포해변 (강릉)",
    "en": "Gangneung — No.1 spot",
    "w": 1.0,
    "region": "gangwon",
    "hint": "📊 강릉 방문 점유 1위(14.6%) · 인기관광지"
   },
   {
    "t": "벡스코제1전시장 (부산 해운대)",
    "en": "Haeundae — No.1 spot",
    "w": 1.0,
    "region": "gyeongnam",
    "hint": "📊 부산 해운대 방문 점유 1위(17.7%) · 인기관광지"
   },
   {
    "t": "팔각정북악스카이 (서울 종로)",
    "en": "Jongno — No.1 spot",
    "w": 1.0,
    "region": "seoul",
    "hint": "📊 서울 종로 방문 점유 1위(14.9%) · 인기관광지"
   },
   {
    "t": "서울월드컵경기장 (서울 마포)",
    "en": "Mapo (Hongdae) — No.1 spot",
    "w": 1.0,
    "region": "seoul",
    "hint": "📊 서울 마포 방문 점유 1위(18.1%) · 인기관광지"
   }
  ]
 },
 {
  "icon": "🧭",
  "n": "연결된 한국",
  "e": "One Step Further",
  "d": "내비게이션 연계방문 데이터가 찾은 '함께 가는 곳'",
  "items": [
   {
    "t": "동궁과월지 → 첨성대",
    "en": "Visitors of 동궁과월지 also go here (navigation data)",
    "w": 4.0,
    "region": "gyeongbuk",
    "hint": "📊 내비 연계방문 — 동궁과월지의 연관 상위"
   },
   {
    "t": "강릉중앙시장 → 경포해변",
    "en": "Visitors of 강릉중앙시장 also go here (navigation data)",
    "w": 4.0,
    "region": "gangwon",
    "hint": "📊 내비 연계방문 — 강릉중앙시장의 연관 상위"
   },
   {
    "t": "팔각정북악스카이 → 북악스카이웨이",
    "en": "Visitors of 팔각정북악스카이 also go here (navigation data)",
    "w": 4.0,
    "region": "seoul",
    "hint": "📊 내비 연계방문 — 팔각정북악스카이의 연관 상위"
   },
   {
    "t": "협재해수욕장 → 오설록티뮤지엄",
    "en": "Visitors of 협재해수욕장 also go here (navigation data)",
    "w": 4.0,
    "region": "jeju",
    "hint": "📊 내비 연계방문 — 협재해수욕장의 연관 상위"
   }
  ]
 },
 {
  "icon": "💎",
  "n": "데이터가 찾은 숨은 곳",
  "e": "Hidden Gems by Data",
  "d": "방문 점유율이 낮을수록 높은 점수 — 희소성 가중치",
  "items": [
   {
    "t": "전주난장 (전주)",
    "en": "Hidden gem in Jeonju",
    "w": 5,
    "region": "jeonbuk",
    "hint": "📊 점유 1.6% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "성촌공원 (서울 용산)",
    "en": "Hidden gem in Yongsan (Itaewon)",
    "w": 5,
    "region": "seoul",
    "hint": "📊 점유 0.8% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "대천공원 (부산 해운대)",
    "en": "Hidden gem in Haeundae",
    "w": 5,
    "region": "gyeongnam",
    "hint": "📊 점유 0.5% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "국토발전전시관 (서울 중구)",
    "en": "Hidden gem in Jung-gu (Myeongdong)",
    "w": 5,
    "region": "seoul",
    "hint": "📊 점유 0.8% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "소극장산울림 (서울 마포)",
    "en": "Hidden gem in Mapo (Hongdae)",
    "w": 4.8,
    "region": "seoul",
    "hint": "📊 점유 0.7% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "강릉선교장 (강릉)",
    "en": "Hidden gem in Gangneung",
    "w": 4.2,
    "region": "gangwon",
    "hint": "📊 점유 0.9% — 데이터가 찾은 저노출 지점"
   },
   {
    "t": "서울공예박물관 (서울 종로)",
    "en": "Hidden gem in Jongno",
    "w": 4.1,
    "region": "seoul",
    "hint": "📊 점유 1.0% — 데이터가 찾은 저노출 지점"
   }
  ]
 },
 {
  "icon": "🌙",
  "n": "밤의 한국",
  "e": "Korea After Dark",
  "d": "야간관광 데이터 기준 인기 밤동네",
  "items": [
   {
    "t": "중구 신당5동의 밤",
    "en": "Night out in 신당5동",
    "w": 4.5,
    "region": "seoul",
    "hint": "📊 야간 방문 비율 53.55% — 서울특별시 야간 1위 동네"
   },
   {
    "t": "연제구 거제4동의 밤",
    "en": "Night out in 거제4동",
    "w": 4.5,
    "region": "gyeongnam",
    "hint": "📊 야간 방문 비율 49.01% — 부산광역시 야간 1위 동네"
   },
   {
    "t": "안동시 평화동의 밤",
    "en": "Night out in 평화동",
    "w": 4.5,
    "region": "gyeongbuk",
    "hint": "📊 야간 방문 비율 52.67% — 경상북도 야간 1위 동네"
   },
   {
    "t": "광장시장·포장마차 밤 야식",
    "en": "Late-night street food",
    "w": 4,
    "region": "seoul",
    "hint": ""
   },
   {
    "t": "한강 밤 돗자리 + 라면",
    "en": "Han River picnic at night",
    "w": 4,
    "region": "seoul",
    "hint": ""
   }
  ]
 },
 {
  "icon": "🍙",
  "n": "사는 사람의 한국",
  "e": "Korea Aesthetic",
  "d": "관광지가 아니라 일상 — SNS가 사랑하는 장면들",
  "items": [
   {
    "t": "편의점 야식 조합 만들기",
    "en": "Convenience-store feast",
    "w": 3,
    "region": "seoul",
    "hint": ""
   },
   {
    "t": "동네 목욕탕·찜질방",
    "en": "Local jjimjilbang",
    "w": 4,
    "region": "chung",
    "hint": ""
   },
   {
    "t": "단골처럼 두 번 간 카페·식당",
    "en": "Visit the same café twice",
    "w": 5,
    "region": "seoul",
    "hint": "두 번 가는 순간 여행이 생활이 됩니다"
   },
   {
    "t": "시골 오일장 구경",
    "en": "Countryside 5-day market",
    "w": 5,
    "region": "jeonnam",
    "hint": ""
   }
  ]
 },
 {
  "icon": "🌸",
  "n": "계절의 한국",
  "e": "Four Koreas",
  "d": "한국은 계절마다 다른 나라 — 한 번에 못 봅니다",
  "items": [
   {
    "t": "봄 — 벚꽃 (진해·여의도·경주)",
    "en": "Spring — cherry blossoms",
    "w": 5,
    "season": "spring",
    "region": "gyeongbuk",
    "hint": ""
   },
   {
    "t": "여름 — 밤바다와 계곡",
    "en": "Summer — night beaches",
    "w": 4,
    "season": "summer",
    "region": "gangwon",
    "hint": ""
   },
   {
    "t": "가을 — 단풍 (내장산·설악산)",
    "en": "Autumn — foliage",
    "w": 5,
    "season": "autumn",
    "region": "gangwon",
    "hint": ""
   },
   {
    "t": "겨울 — 눈 한옥·빙어축제",
    "en": "Winter — snow hanok",
    "w": 5,
    "season": "winter",
    "region": "gangwon",
    "hint": ""
   }
  ]
 }
];
