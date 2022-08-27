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
                        ><img :src="slide.slideImg"
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
                                <img :src="front.frontImg" />
                                <p>
                                    {{ front.frontImgDes }}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="desTitle">
                        <p class="frontTitle">Distribution</p>
                        <div class="flex">
                            <div>
                                <img src="@/assets/firebase.png" />
                                <p>Firebase</p>
                            </div>
                        </div>
                    </div>
                    <div class="icons">
                        <img src="@/assets/homeIcon.png" @click="goToSite" />
                        <img :src="mywork.git" @click="goToGit" />
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { Pagination, Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/vue";
import "swiper/css";
import "swiper/css/pagination";

const myworks = [
    {
        siteTitle: "Interactive Beer Promotion Site",
        slideArray: [
            {
                slideImg: "../assets/beer/beerEx1.png",
            },
            {
                slideImg: "../assets/beer/beerEx2.png",
            },
            {
                slideImg: "../assets/beer/beerEx3.png",
            },
            {
                slideImg: "../assets/beer/beerEx4.png",
            },
        ],
        firstDes:
            "간단한 svg 파일을 제작해 각각의 path에 애니메이션을 넣어 만든 사이트입니다. 스크롤을 내리면 좌우로 스크롤이 되며 각 색션에 맞춰집니다.",
        secondDes:
            "본 사이트를 제작하며 스크롤로 좌우 스크롤을 하는 방법을 알게 되었으며, gsap의 scrollTrigger와 scrollTo에 대한 지식이 더 늘게 해주었습니다.",
        desTitle: "좌우 스크롤, 네비게이션 바, svg파일 상호작용",
        frontImgArray: [
            {
                frontImg: "../assets/vue.png",
                frontImgDes: "vue",
            },
            {
                frontImg: "../assets/scss.png",
                frontImgDes: "scss",
            },
        ],
        goToSite: () => {
            open("https://sungsbeer.web.app/");
        },
        git: "../assets/githubIcon.png",
        goToGit: () => {
            open("https://github.com/swc9803/beer");
        },
    },
    {
        siteTitle: "Portfolio Site",
        slideArray: [
            {
                slideImg: "../assets/portfolio/pf1.png",
            },
            {
                slideImg: "../assets/portfolio/pf2.png",
            },
            {
                slideImg: "../assets/portfolio/pf3.png",
            },
            {
                slideImg: "../assets/portfolio/pf4.png",
            },
            {
                slideImg: "../assets/portfolio/pf5.png",
            },
        ],
        firstDes:
            "포트폴리오 용으로 제작한 사이트입니다. 이 곳에 작성한 모든 프로젝트는 모두 저 혼자 만든 것입니다.",
        secondDes:
            "제작 기간 동안 많은 사람들의 포트폴리오를 보며 자신이 아직 많이 부족하다는 생각이 들며 뒤쳐지지 않게 더 열심히 배워야겠다는 동기부여를 시켜주었습니다.",
        desTitle: "자기 소개, 보유 기술 나열, 프로젝트 설명",
        frontImgArray: [
            {
                frontImg: "../assets/vue.png",
                frontImgDes: "vue",
            },
        ],
        goToSite: () => {
            open("https://github.com/swc9803/portf");
        },
        git: "../assets/githubIcon.png",
        goToGit: () => {
            open("https://github.com/swc9803/threetest");
        },
    },
    {
        siteTitle: "Interactive GSAP Animation Practice",
        slideArray: [
            {
                slideImg: "../assets/gsap/spring.png",
            },
            {
                slideImg: "../assets/gsap/summer.png",
            },
            {
                slideImg: "../assets/gsap/fall.png",
            },
            {
                slideImg: "../assets/gsap/winter.png",
            },
            {
                slideImg: "../assets/gsap/sea.png",
            },
            {
                slideImg: "../assets/gsap/process.png",
            },
        ],
        firstDes:
            "Figma를 배우며 로고와 여러 그림 등을 그리다 보니 직접 그린 svg로 애니메이션을 만들면 재밌을 것 같다는 생각이 들어 스크롤 애니메이션 등을 제작하게 되었습니다.",
        desTitle: "애니메이션 감상",
        frontImgArray: [
            {
                frontImg: "../assets/vue.png",
                frontImgDes: "vue",
            },
        ],
        goToSite: () => {
            open("https://pofo-55041.web.app/weather");
        },
    },
    {
        siteTitle: "Review Site",
        slideArray: [
            {
                slideImg: "../assets/review/review1.png",
            },
            {
                slideImg: "../assets/review/review2.png",
            },
            {
                slideImg: "../assets/review/review3.png",
            },
            {
                slideImg: "../assets/review/review4.png",
            },
            {
                slideImg: "../assets/review/review5.png",
            },
        ],
        firstDes:
            "제가 vue를 배운 후 제일 처음으로 만든 사이트입니다. No-SQL인 Firebase를 사용해 클라우드 데이터베이스를 관리하였습니다.",
        secondDes:
            "css에 대한 지식이 부족했던 시기라 Bootstrap 클래스의 margin 기능을 많이 활용하였습니다. CRUD에 대해 많은 것을 알게 되었고, 데이터를 효율적으로 관리하는 방법을 배우게 만들어준 사이트 제작이었습니다.",
        desTitle:
            "로그인 및 회원가입, 글 읽기, 쓰기, 삭제, 수정, 이미지 업로드, 댓글 기능",
        frontImgArray: [
            {
                frontImg: "../assets/vue.png",
                frontImgDes: "vue",
            },
        ],
        goToSite: () => {
            open("https://rhdyd-a7e3b.firebaseapp.com");
        },
    },
    {
        siteTitle: "Three Js Test Site",
        slideArray: [
            {
                slideImg: "../assets/threejs/three1.png",
            },
            {
                slideImg: "../assets/threejs/three2.png",
            },
            {
                slideImg: "../assets/threejs/three3.png",
            },
        ],
        firstDes:
            "Three Js와 GSAP를 섞어 제작한 사이트입니다. 현재 업데이트 중에 있으며 raycaster와 OrbitControls를 공부 중입니다.",
        secondDes:
            "인터랙티브웹의 중요한 요소인 3D 모델링을 사용하기위해 Three js 라이브러리를 처음으로 사용해보았습니다.",
        desTitle: "3D 모델링, GSAP 애니메이션",
        frontImgArray: [
            {
                frontImg: "../assets/vue.png",
                frontImgDes: "vue",
            },
        ],
        goToSite: () => {
            open("https://sungthreejs.web.app/");
        },
        git: "../assets/githubIcon.png",
        goToGit: () => {
            open("https://github.com/swc9803/threetest");
        },
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
            flex: 1 1 45%;
            margin: 0 20px 0 20px;
            margin-top: 20px;
            word-break: keep-all;
            font-size: 1em;
            display: flex;
            flex-direction: column;
            .desTitle {
                margin: 0;
                p {
                    margin: 5px 0 5px 0;
                }
                .frontTitle {
                    color: rgb(41, 41, 41);
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
                    }
                    img {
                        height: 1.5em;
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
