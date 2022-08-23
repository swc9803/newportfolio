<template>
    <div>
        <p class="title">My Works</p>
        <div v-for="mywork in myworks" :key="mywork.id" class="projectInfo">
            <div class="sliderWrap">
                <p class="projectTitle">{{ mywork.siteTitle }}</p>
                <swiper
                    class="slider"
                    :modules="[Navigation, Pagination]"
                    :slidesPerView="1"
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
                        <p>Main-Function</p>
                        <p>{{ mywork.desTitle }}</p>
                    </div>
                    <div class="desTitle">
                        <p>Front-End</p>
                        <p
                            v-for="front in mywork.frontImgArray"
                            :key="front.id"
                        >
                            <img :src="front.frontImg" />
                            {{ front.frontImgDes }}
                        </p>
                    </div>
                    <div class="desTitle">
                        <p>Distribution</p>
                        <p><img src="@/assets/firebase.png" />Firebase</p>
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
            margin: 20px;
            margin-top: 20px;
            word-break: keep-all;
            font-size: 1em;
            display: flex;
            flex-direction: column;
            .desTitle {
                margin: 0;
                p {
                    margin: 0;
                    flex: 0 0 30%;
                    &:nth-child(1) {
                        color: rgb(41, 41, 41);
                        letter-spacing: 1px;
                        font-size: 1.2em;
                        font-weight: 600;
                        margin: 20px 0 3px 0;
                    }
                    img {
                        width: 1em;
                        margin-right: 5px;
                    }
                }
            }
            .firstDes {
                margin: 0;
            }
            .icons {
                text-align: center;
                margin-top: 20px;
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
}
@media screen and (max-width: 1200px) {
    .sliderWrap {
        display: block !important;
        margin: 0px;
    }
}
</style>
