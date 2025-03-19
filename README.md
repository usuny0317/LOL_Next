# Riot Api를 활용하여 LOL 캐릭터, 아이템 정보 제공하는 웹 사이트

---
## 페이지

![image](https://github.com/user-attachments/assets/f5a61b85-aa98-4d5d-abf5-ef0715f9cf34)
![image](https://github.com/user-attachments/assets/c92388f8-2f58-40d6-bd2d-4232c0f96044)
![image](https://github.com/user-attachments/assets/322b17a2-f4bb-4286-b2e9-a94fb2ae0404)

---

## 사용 : RiotAPI, Tailwind, Typescript, Next, Query, ImageTag, SSG, SSR, CSR, ISR , RouteHandle

### 구현 성공 : 홈, 챔피언 , 챔피언 상세, 아이템, 로테이션, 반응형 페이지

### 구현 실패(시도 but 실패) 
1. Loading Error 페이지 suspense로 구현하기 
 - suspense에 대한 공부가 더 필요할 것 같다.
 - 딱 Loading, Error 페이지만 만들고 적용을 시키지 못했다.
2. Pick 하나만 사용하고 더 사용하지 못했다.

### 배운점
 - CSR , ISR , SSG , SSR 의 사용
 - Next에서의 Image 태그 사용
 - 쿼리 2개 사용하기
 - 타입 적용시키기
 - 라우트 핸들러 적용

### 어려운 점
 - 타입을 유연하게 omit, pick을 사용하며 변형하면서 사용하는 거 못하겠다.




```
lol-app
├─ .eslintrc.json
├─ next.config.mjs
├─ package-lock.json
├─ package.json
├─ postcss.config.mjs
├─ public
│  ├─ champion.jpg
│  ├─ item.jpg
│  └─ rotation.jpg
├─ README.md
├─ src
│  ├─ app
│  │  ├─ api
│  │  │  ├─ handleroute
│  │  │  │  └─ route.ts
│  │  │  └─ query.tsx
│  │  ├─ champions
│  │  │  ├─ page.tsx
│  │  │  └─ [id]
│  │  │     └─ page.tsx
│  │  ├─ favicon.ico
│  │  ├─ fonts
│  │  │  ├─ GeistMonoVF.woff
│  │  │  └─ GeistVF.woff
│  │  ├─ globals.css
│  │  ├─ items
│  │  │  └─ page.tsx
│  │  ├─ layout.tsx
│  │  ├─ page.tsx
│  │  └─ rotation
│  │     └─ page.tsx
│  ├─ components
│  │  ├─ Card.tsx
│  │  └─ ItemCard.tsx
│  ├─ styles
│  ├─ types
│  │  ├─ Champion.ts
│  │  ├─ ChampionRotaion.ts
│  │  └─ Item.ts
│  └─ utils
│     └─ serverApi.ts
├─ tailwind.config.ts
├─ tsconfig.json
└─ yarn.lock

```
