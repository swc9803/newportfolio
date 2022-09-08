<template>
    <div>
        <p class="title">My Works</p>
        <div v-for="mywork in myworks" :key="mywork.id" class="projectInfo">
            <p class="projectTitle">{{ mywork.siteTitle }}</p>
            <div class="sliderWrap">
                <swiper
                    class="slider"
                    :modules="[Navigation, Pagination]"
                    :spaceBetween="20"
                    :loop="true"
                    :pagination="{ clickable: true }"
                >
                    <swiper-slide
                        v-for="slide in mywork.slideArray"
                        :key="slide.id"
                        ><img :src="`/assets/${slide.slideImg}.png`" :alt="slide.alt"
                    /></swiper-slide>
                </swiper>
                <div class="projectDes">
                    <p class="firstDes">
                        {{ mywork.firstDes }}
                    </p>
                    <p>
                        {{ mywork.secondDes }}
                    </p>
                    <div class="desTitle">
                        <p class="frontTitle">Main-Function</p>
                        <p>{{ mywork.desTitle }}</p>
                    </div>
                    <div class="desTitle">
                        <p class="frontTitle">Front-End</p>
                        <div class="flex">
                            <div
                                class="inline"
                                v-for="front in mywork.frontImgArray"
                                :key="front.id"
                            >
                                <img :src="`/assets/${front.frontImg}.png`" :alt="`${front.frontImg}`" />
                                <p>
                                    {{ front.frontImgDes }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div v-if="mywork.distribution" class="desTitle">
                        <p class="frontTitle">Distribution</p>
                        <div class="flex">
                            <div>
                                <img src="@/public/assets/firebase.png" alt="firebase" />
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <img 
                            v-if="mywork.site"
                            src="@/public/assets/homeIcon.png"
                            @click="mywork.goToSite"
                            alt="homeIcon"
                        />
                        <img v-if="mywork.git" src="@/public/assets/githubIcon.png" @click="mywork.goToGit" alt="githubIcon" />
                        <img v-if="mywork.screen" src="@/public/assets/screenIcon.png" @click="mywork.goToScreen" alt="screenIcon" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";
import { TypeMyWorks } from "../types/index.js"

const myworks: TypeMyWorks = [
    {
        id: 0,
        siteTitle: "Updated Portfolio Site",
        slideArray: [
            {
                id: 0,
                slideImg: "portfolio/pf1",
                alt: "pf1",
            },
            {
                id: 1,
                slideImg: "portfolio/pf2",
                alt: "pf2",
            },
            {
                id: 2,
                slideImg: "portfolio/pf3",
                alt: "pf3",
            },
        ],
        firstDes:
            "최근 나온 nuxt3 rc로 포트폴리오 사이트를 다시 제작해보았습니다.",
        secondDes:
            "기존 제작했던 포트폴리오와는 다르게 본 사이트는 vue 대신 nuxt를, webpack 대신 vite를, 현재 배우고 있는 타입 스크립트를 적용하였습니다. 하드 코딩이 꽤나 있었고, 유지 보수가 좋지 않았던 코드를 보니 과거의 자신이 부끄럽게 느껴졌습니다. 코드를 수정하며 짧은 기간이지만 회사를 다니는 동안 많은 발전을 했다는 것을 느끼게 되었습니다.",
        desTitle: "자기소개, 보유 기술 나열, 프로젝트 설명",
        frontImgArray: [
            {
                id: 0,
                frontImg: "nuxt",
                frontImgDes: "nuxt",
            },
            {
                id: 1,
                frontImg: "typescript",
                frontImgDes: "typescript",
            },
        ],
        git: true,
        goToGit: () => {
            open("https://github.com/swc9803/newportfolio");
        },
        distribution: true,
    },
    {
        id: 1,
        siteTitle: "Wemix3.0 Linked with Screen Site",
        slideArray: [
            {
                id: 0,
                slideImg: "wemix/wemix1",
                alt: "wemix1",
            },
            {
                id: 1,
                slideImg: "wemix/wemix2",
                alt: "wemix2",
            },
            {
                id: 2,
                slideImg: "wemix/wemix3",
                alt: "wemix3",
            },
            {
                id: 3,
                slideImg: "wemix/wemix4",
                alt: "wemix4",
            },
        ],
        firstDes:
            "코엑스에 개최된 코리아 블록체인 위크 2022에서 진행하는 위믹스3.0의 전시 외주를 받아 제작하게 되었습니다. 핸드폰으로 QR코드를 찍으면 사이트로 이동하게 됩니다. 첫 번째 섹션에서는 해당하는 색을 눌러 웹과 스크린이 색이 동일하게 변경되도록 했으며, 두 번째 섹션에서는 input에 입력한 메세지가 스크린에 동일하게 출력되도록 했습니다. 마지막 섹션에서는 핸드폰 카메라 위에 canvas를 덮어 스티커 사진을 찍을 수 있습니다.",
        secondDes:
            "백엔드분과 협업을 처음 해 많은 걱정과 기대가 있었습니다. 걱정과는 다르게 수월하게 진행이 되어 마감일 보다 빠르게 제작이 되었습니다. websocket을 사용했으며 짧은 기간임에도 많은 발전을 한 것 같습니다.",
        desTitle: "사이트에서 스크린 컨트롤",
        frontImgArray: [
            {
                id: 0,
                frontImg: "vue",
                frontImgDes: "vue",
            },
        ],
        site: true,
        goToSite: () => {
            open("https://lab.ddungsang.com/wemix2022/phone/dist/?auth=QX7UD931");
        },
        screen: true,
        goToScreen: () => {
            open("https://lab.ddungsang.com/wemix2022/screen.php?auth=QX7UD9311tsvdqggjs4a426my");
        },
        distribution: false,
    },
    {
        id: 2,
        siteTitle: "Interactive Beer Promotion Site",
        slideArray: [
            {
                id: 0,
                slideImg: "beer/beerEx1",
                alt: "beer1",
            },
            {
                id: 1,
                slideImg: "beer/beerEx2",
                alt: "beer2",
            },
            {
                id: 2,
                slideImg: "beer/beerEx3",
                alt: "beer3",
            },
            {
                id: 3,
                slideImg: "beer/beerEx4",
                alt: "beer4",
            },
        ],
        firstDes:
            "간단한 svg 파일을 제작해 각각의 path에 애니메이션을 넣어 만든 사이트입니다. 스크롤을 내리면 좌우로 스크롤이 되며 각 색션에 맞춰집니다.",
        secondDes:
            "본 사이트를 제작하며 스크롤로 좌우 스크롤을 하는 방법을 알게 되었으며, gsap의 scrollTrigger와 scrollTo에 대한 지식이 더 늘게 해주었습니다.",
        desTitle: "좌우 스크롤, 네비게이션 바, svg파일 상호작용",
        frontImgArray: [
            {
                id: 0,
                frontImg: "vue",
                frontImgDes: "vue",
            },
            {
                id: 1,
                frontImg: "scss",
                frontImgDes: "scss",
            },
        ],
        site: true,
        goToSite: () => {
            open("https://sungsbeer.web.app");
        },
        git: true,
        goToGit: () => {
            open("https://github.com/swc9803/beer");
        },
        distribution: true,
    },
    {
        id: 3,
        siteTitle: "Interactive GSAP Animation Practice",
        slideArray: [
            {
                id: 0,
                slideImg: "gsap/spring",
                alt: "gsap1",
            },
            {
                id: 1,
                slideImg: "gsap/summer",
                alt: "gsap2",
            },
            {
                id: 2,
                slideImg: "gsap/fall",
                alt: "gsap3",
            },
            {
                id: 3,
                slideImg: "gsap/winter",
                alt: "gsap4",
            },
            {
                id: 4,
                slideImg: "gsap/sea",
                alt: "gsap5",
            },
            {
                id: 5,
                slideImg: "gsap/process",
                alt: "gsap6",
            },
        ],
        firstDes:
            "Figma를 배우며 로고와 여러 그림 등을 그리다 보니 직접 그린 svg로 애니메이션을 만들면 재밌을 것 같다는 생각이 들어 스크롤 애니메이션 등을 제작하게 되었습니다.",
        desTitle: "애니메이션 감상",
        frontImgArray: [
            {
                id: 0,
                frontImg: "vue",
                frontImgDes: "vue",
            },
        ],
        site: true,
        goToSite: () => {
            open("https://pofo-55041.web.app/weather");
        },
        distribution: true,
    },
    {
        id: 4,
        siteTitle: "Review Site",
        slideArray: [
            {
                id: 0,
                slideImg: "review/review1",
                alt: "review1",
            },
            {
                id: 1,
                slideImg: "review/review2",
                alt: "review2",
            },
            {
                id: 2,
                slideImg: "review/review3",
                alt: "review3",
            },
            {
                id: 3,
                slideImg: "review/review4",
                alt: "review4",
            },
            {
                id: 4,
                slideImg: "review/review5",
                alt: "review5",
            },
        ],
        firstDes:
            "vue를 배운 후 제일 처음으로 만든 사이트입니다. No-SQL인 Firebase를 사용해 클라우드 데이터베이스를 관리하였습니다.",
        secondDes:
            "css에 대한 지식이 부족했던 시기라 Bootstrap 클래스의 margin 기능을 많이 활용하였습니다. CRUD에 대해 많은 것을 알게 되었고, 데이터를 효율적으로 관리하는 방법을 배우게 만들어준 사이트 제작이었습니다.",
        desTitle:
            "로그인 및 회원가입, 글 읽기, 쓰기, 삭제, 수정, 이미지 업로드, 댓글 기능",
        frontImgArray: [
            {
                id: 0,
                frontImg: "vue",
                frontImgDes: "vue",
            },
        ],
        site: true,
        goToSite: () => {
            open("https://rhdyd-a7e3b.firebaseapp.com");
        },
        distribution: true,
    },
    {
        id: 5,
        siteTitle: "Three Js Test Site",
        slideArray: [
            {
                id: 0,
                slideImg: "threejs/three1",
                alt: "threejs1",
            },
            {
                id: 1,
                slideImg: "threejs/three2",
                alt: "threejs2",
            },
            {
                id: 2,
                slideImg: "threejs/three3",
                alt: "threejs3",
            },
        ],
        firstDes:
            "Three Js와 GSAP를 섞어 제작한 사이트입니다. 현재 업데이트 중에 있으며 raycaster와 OrbitControls를 공부 중입니다.",
        secondDes:
            "인터랙티브웹의 중요한 요소인 3D 모델링을 사용하기위해 Three js 라이브러리를 처음으로 사용해보았습니다.",
        desTitle: "3D 모델링, GSAP 애니메이션",
        frontImgArray: [
            {
                id: 0,
                frontImg: "vue",
                frontImgDes: "vue",
            },
        ],
        site: true,
        goToSite: () => {
            open("https://sungthreejs.web.app/");
        },
        git: true,
        goToGit: () => {
            open("https://github.com/swc9803/threetest");
        },
        distribution: true,
    },
];
</script>

<style lang="scss" scoped>
@import "../style/Mainstyle.scss";

.projectInfo {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    width: 70%;
    box-shadow: 0 0 0 2px rgb(206, 192, 68) inset;
    background: rgb(235, 235, 235);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 5%;
    .projectTitle {
        color: rgb(70, 70, 70);
        text-align: center;
        font-size: 1.5em;
        font-weight: 600;
        letter-spacing: 2px;
    }
    .sliderWrap {
        display: flex;
        flex-flow: row;
        .slider {
            flex: 1 1 45%;
            margin: 20px;
            overflow: hidden;
            cursor: pointer;
            img {
                margin-bottom: 30px;
                width: 100%;
            }
        }
        .projectDes {
            color: rgb(35, 35, 35);
            flex: 1 1 45%;
            margin: 0 20px 0 20px;
            margin-top: 20px;
            word-break: keep-all;
            font-size: 1em;
            display: flex;
            flex-direction: column;
            .desTitle {
                margin: 0;
                .frontTitle {
                    color: rgb(140, 140, 140);
                    letter-spacing: 1px;
                    font-size: 1.2em;
                    font-weight: 600;
                    margin: 10px 0 3px 0;
                }
                .flex {
                    display: flex;
                    .inline {
                        display: inline-block;
                    }
                    p {
                        display: inline-block;
                        margin-right: 10px;
                        position: relative;
                        top: -5px;
                    }
                    img {
                        width: 1.5em;
                        margin-right: 5px;
                    }
                }
            }
        }
        .firstDes {
            margin: 0;
        }
        .icons {
            text-align: center;
            img {
                cursor: pointer;
                width: 25px;
                margin: 15px;
                transition: 0.2s;
                &:hover {
                    transform: translateY(-3px);
                }
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    .sliderWrap {
        display: block !important;
        margin: 0px;
    }
}
</style>
