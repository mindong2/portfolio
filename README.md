# 🌈 김동민의 포트폴리오

제 소개와 프로젝트를 소개하고자 포트폴리오 사이트를 만들었습니다.
인터렉션 애니메이션과 깔끔한 스타일에 신경을 썼고, 소개하고픈 프로젝트에 대한설명을 정리했습니다.

링크 : https://dongmin-kim.vercel.app/

      
## 사용한 기술
#### 언어 및 프레임워크
- Next.js
- TypeScript

#### 스타일
- Styled-Component
- Framer-motion
- aos
#### 배포
- Vercel

      
## 로컬 환경 설치 방법

```
$ npm install
$ npm run dev
```

      
## 페이지 설명

포트폴리오는 단일페이지로 구성하였으며 Profile, Skills, Projects, Contact로 구성되어 있습니다.

### Profile

![portfolio](https://github.com/mindong2/portfolio/assets/73930706/0d818595-61da-42d5-b369-65eee31f93eb)

프로필에는 제 소개와 간단한 약력을 작성했습니다.

![image](https://github.com/mindong2/portfolio/assets/73930706/5c5f7b37-0da5-49ae-82d0-528fc0f7bb06)

제가 활용가능한 스킬을 소개하는 섹션입니다. 이미지를 활용해 눈에 더 잘 들어오도록 신경썼습니다.

![image](https://github.com/mindong2/portfolio/assets/73930706/dad24c46-4e6d-464a-8b3e-b19adaabaf52)

프로젝트 섹션으로 개인프로젝트와 사내프로젝트에 대해 정리하였습니다.
아이템을 클릭하면 팝업이 열리는데, 이곳에서 더 자세하게 확인할 수 있습니다.

![image](https://github.com/mindong2/portfolio/assets/73930706/800b233c-e32f-466a-abed-f5070cbead0b)
![image](https://github.com/mindong2/portfolio/assets/73930706/e9d622e1-5b02-4d1e-bf76-98e1de669344)

마지막으로 Contact 섹션입니다.
![image](https://github.com/mindong2/portfolio/assets/73930706/6fd29bab-7965-49d7-bd58-9460c355bce0)
제 포트폴리오를 보시고 연락을 주실 수 있도록 저에게 이메일을 보낼 수 있는 기능을
Emailjs를 이용해 개발했습니다.

## 느낀점
- Next.js는 12버전에 살짝 사용을 해본게 전부였는데, 14버전을 사용해보니 꽤나 달라진 부분이 많아 검색을 많이 해보며 좋은 공부가 되었습니다.
- Framer-motion과 Aos를 이용해 인터렉션 애니메이션을 구현 할 수 있었는데 언젠가 라이브러리의 도움없이 순수 CSS로 작업을 해봐야겠다고 생각했습니다.
- 항상 이메일을 보내는 기능을 어떻게 구현하는지 궁금했는데 Emailjs를 이용해 구현해볼 수 있었습니다. 처음에는 React-hook-form을 이용하여 Form을 관리했는데
Emailjs에서 추천하는 방식인 ref로 수정을 했습니다. 이부분에서 코드가 길어져 아쉬웠습니다. 깔끔한코드에 대한 필요성을 더욱 느꼈습니다.
