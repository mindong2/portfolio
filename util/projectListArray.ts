interface IProjectListArray {
  id: number;
  title: string;
  img: string;
  date: string;
  link: string;
  github?: string;
  work: string[];
  desc: string;
  mean: string;
  skill: string;
  type: string;
  tabStatus: string;
}

export const projectListArray: IProjectListArray[] = [
  {
    id: 1,
    title: "포트폴리오 사이트 ",
    link: "https://dongmin-kim.vercel.app/",
    img: "/image/project/portfolio.png",
    date: "2023.12",
    work: [
      "Next.js와 Typescript를 이용한 페이지 구현",
      "Aos, Framer-motion을 이용한 인터렉션 애니메이션 구현",
      "페이지 설계 및 Styled Components를 이용한 스타일링",
      "Emailjs를 이용해 이메일 발송기능 구현",
    ],
    github: "https://github.com/mindong2/portfolio",
    desc: "제 소개를 하기위한 포트폴리오 사이트입니다.",
    mean: "SEO에 이점을 갖고있기 때문에 Next.js로 작업을 해볼 수 있었습니다. 간단한 페이지지만 Next.js와 조금 더 가까워 질 수 있었습니다. 인터렉션 애니메이션 구현을 위해 Aos와 Framer-motion을 사용했는데, 간단하게 작업 할 수 있는 좋은 라이브러리를 사용 해 볼 수 있었습니다.",
    skill: "Next.js, Typescript",
    type: "개인 프로젝트 [기여도: 100%]",
    tabStatus: 'personal'
  },
  {
    id: 2,
    title: '나만의 SNS - "MINI"',
    link: "https://mini-mindong2.web.app/",
    img: "/image/project/mini.png",
    date: "2023.12",
    work: [
      "Firebase를 이용해 회원가입, 로그인 구현 / 게시글, 좋아요, 댓글 등 CRUD 구현",
      "프로필 이미지와 게시글 이미지 등 파일과 Firebase Cloud 연동",
      "페이지 설계 및 Styled Components를 이용한 스타일링",
    ],
    github: "https://github.com/mindong2/MINI",
    desc: "나만의 SNS제작 및 Firebase를 통한 개발 경험을 해보기 위해 작업했습니다. Firebase의 Firestore, Cloud를 이용해 백엔드 없이도 원하는 서비스를 개발 해볼 수 있는 좋은 기회였습니다.",
    mean: "React, Typescript에 더 익숙해 지며, Firebase와 더 가까워 질 수 있는 좋은 기회였고, 더 깨끗한 코드 작성을 연습할 필요를 더 느낄 수 있었습니다.",
    skill: "React, Typescript, Firebase",
    type: "개인 프로젝트 [기여도: 100%]",
    tabStatus: 'personal'
  },
  {
    id: 3,
    title: "예비집사 판별기",
    link: "https://cats-mbti-owo.netlify.app/",
    img: "/image/project/cats.png",
    date: "2023.12",
    work: [
      "질문별 Progressbar 진행도 구현과 MBTI state값 계산 후 결과 도출기능 개발",
      "Naver Search Advisor로 SEO 최적화",
      "페이지 설계 및 Styled Components를 이용한 스타일링",
    ],
    github: "https://github.com/mindong2/mbti-cats",
    desc: "본인의 MBTI 성향을 파악 후 가장 잘 맞는 고양이 종을 연결해주는 토이 프로젝트입니다.",
    mean: "본인이 좋아하는 것과 개발을 접목할 수 있다는 점에서 즐겁게 개발했습니다. 대화형 페이지를 어떻게 구현하는지 배우게 되었고 SEO최적화와 Kakao Adfit을 사용해볼 수 있는 좋은 기회였습니다.",
    skill: "React, Typescript",
    type: "개인 프로젝트 [기여도: 100%]",
    tabStatus: 'personal'
  },
  {
    id: 4,
    title: "Myflix",
    link: "https://myflix-mindong.netlify.app/",
    img: "/image/project/myflix.png",
    date: "2023.4 - 2023.06",
    work: [
      "사용자가 원하는 키워드가 포함되는 영화, 드라마 정보를 불러오는 검색기능 개발",
      "React-query, axios를 이용해 받아온 데이터를 캐싱하며, 지속적으로 동기화하고 업데이트",
      "Framer-motion과 Styled Components를 이용한 스타일링",
    ],
    github: "https://github.com/mindong2/react-remind",
    desc: "React와 Typescript의 숙련도 향상을 위해 좋아하는 Netflix의 클론코딩을 진행했습니다.",
    mean: "존재만 알고있던 Data fetching 라이브러리인 React-Query를 실제로 사용해 볼 수 있는 좋은 기회였습니다. API 호출을 한 후 데이터가 매번 같다면 불필요하게 호출을 하기 때문에 캐싱 기능이 정말 굉장하게 느껴졌습니다. 한편으로는 클론코딩이 아닌 본인만의 아이디어로 개발할 필요성을 느꼈습니다.",
    skill: "React, Typescript, React-Query",
    type: "개인 프로젝트 [기여도: 100%]",
    tabStatus: 'personal'
  },
  {
    id: 5,
    title: '신규플랫폼 "고고모바일"',
    link: "https://gogomobile.co.kr/",
    img: "/image/project/gogomobile.png",
    date: "2022.11 - 2023.03",
    work: [
      "Ajax통신으로 B2B 사업자 전용 상담문의 외 휴대폰 사전예약 페이지 개발",
      "사이트 레이아웃 구성 ,UI구현 및 rem, vw단위를 이용한 반응형 사이트 구성",
      "가입 신청 페이지와 요금제 페이지의 중문, 영문, 베트남어 번역 작업",
      "휴대폰 제품정보 데이터 리스트화",
    ],
    github: "",
    desc: "사내 신규 프로젝트로써 기존 오래된 사이트를 새로 만드는 프로젝트에 참여하게 되었습니다. PHP 프레임워크인 Codeigniter 환경에서 퍼블리싱 외 전반적인 프론트엔드 개발을 맡아서 진행했습니다.",
    mean: "가입 신청 페이지와 요금제 페이지의 중문, 영문, 베트남어 번역 작업을 통해 외국인 가입자 수가 기존 대비 35% 증가 했다는 성과를 보였고, 그 외 기존 PC버전과 모바일버전의 분리된 페이지에서 반응형 페이지로 구현하며 1개의 파일내에서 동시 작업가능 환경이 되며 유지보수 기간을 크게 단축 시킬 수 있었습니다. 무엇보다 알뜰폰 업계 첫 ‘휴대폰 구독’ 서비스 제공이라는 성과에 기여할 수 있는 의미있는 프로젝트였습니다.",
    skill: "HTML5, CSS3, Jquery, Codeigniter",
    type: "개발리드 1명, 프론트엔드 1명, 백엔드 1명 [기여도: 50%]",
    tabStatus: 'company'
  },
  {
    id: 6,
    title: '고고비',
    link: "https://gogob.co.kr",
    img: "/image/project/gogob.png",
    date: "2022.08 - 2023.01",
    work: [
      "기획자, 디자이너와 소통하며 레이아웃 개편",
      "해외유심 사용 신청 및 사용 현황 서비스 개발",
      "다양한 이벤트 랜딩 페이지 제작",
    ],
    github: "",
    desc: "통신비와 휴대폰 견적 및 구매 등 새 휴대폰을 구매 하려는 사용자들에게 유용한 기능을 제공하는 사이트입니다. ",
    mean: "입사 당시 어느정도 개발이 완료된 상태였지만, 기존 일자형 레이아웃에서 조금 더 웹페이지처럼 보이도록 레이아웃을 개편하고, 추후에 추가된 해외유심 서비스 개발을 맡게 되었습니다. 사용자의 선택에 맞는 조건들을 정리해서 전달받은 API로 DB에 저장하게 되어 추후에 admin에서 신청 내역을 확인할 수 있게 되었습니다.",
    skill: "HTML5, CSS3, Jquery, Laravel",
    type: "개발리드 1명, 프론트엔드 1명, 백엔드 2명 [기여도: 15%]",
    tabStatus: 'company'
  },
  {
    id: 7,
    title: "Unity Square",
    link: "http://www.unitysquare.co.kr/",
    img: "/image/project/unitysquare.png",
    date: "2022.02 - 2022.05",
    work: ["기획서와 전달받은 시안을 바탕으로 UI구현 및 반응형 사이트 구성"],
    github: "",
    desc: "기업 Unity Square의 홈페이지를 새로 리뉴얼 했던 프로젝트입니다. ",
    mean: "A - Z 혼자 퍼블리싱 하며 퍼블리싱 속도가 매우 향상 될 수 있었고 여러 라이브러리를 경험 할 수 있었습니다. (slick, aos, gsap 등) 그 결과 Unity Square와 유지보수 계약을 맺을 수 있었던 프로젝트였습니다.",
    skill: "HTML5, CSS3, Jquery",
    type: "프론트엔드 1명, 백엔드 1명 [기여도: 85%]",
    tabStatus: 'company'
  },
];
