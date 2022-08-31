# Nuxt 3 rc8

nuxt 변경 및 주의점

1. volar extension을 활성화 해줘야 타입스크립트 변환시 has no default export 에러가 뜨지 않는다.
2. layout의 slot과 같은 위치에 요소 2개 이상 있으면 slot안에 div로 감사쭤야 non-element root 에러가 사라진다.
3. router 폴더를 별도로 생성 해주어야 하며 pages안에 파일을 만들면 자동으로 라우터가 생성된다. 동적 라우팅 생성방법 = pages/[id]
4. public/index.html가 존재 하지 않는다. 또한 main.js의 역할을 대신하는 nuxt.config.ts에서 상태관리 라이브러리, css import, favicon 등을 설정한다.
