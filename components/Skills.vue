<template>
    <div>
        <p class="title" ref="skills">Skills</p>
        <h2>아이콘을 클릭해보세요 ▼</h2>
        <div class="logos">
            <img
                v-for="(logo, i) in logos"
                :key="logo.id"
                :src="logo.iconImg"
                @click="[logo.showDes(i)]"
                :ref="logoRef"
                :alt="logo.alt"
            />
        </div>
        <div class="des" v-for="des in dess" :key="des.id">
            <div
                class="desBorder"
                :ref="desRef"
                :style="{ background: des.background }"
            >
                <img class="desIcon" :src="`/assets/${des.desImg}.png`" />
                <section>
                    <div>
                        <p>
                            {{ des.firstDes }}
                        </p>
                        <p>
                            {{ des.secondDes }}
                        </p>
                    </div>
                    <div class="frame">
                        <img
                            :src="`/assets/${des.desExImg}.png`"
                            @click="des.focus"
                            :alt="des.desEx"
                        />
                        <p>이미지를 클릭하시면 확대됩니다.</p>
                    </div>
                </section>
            </div>
        </div>
        <div>
            <div class="focus" v-show="vueEx" @click="blur">
                <img
                    src="@/public/assets/examples/vueEx.png"
                    class="img1"
                    alt="vueEx"
                />
            </div>
            <div class="focus" v-show="tsEx" @click="blur">
                <img src="@/public/assets/examples/tsEx.png" class="img1" alt="tsEx" />
            </div>
            <div class="focus" v-show="scssEx" @click="blur">
                <img
                    src="@/public/assets/examples/scssEx.png"
                    class="img1"
                    alt="scssEx"
                />
            </div>
            <div class="focus" v-show="piniaEx" @click="blur">
                <img
                    src="@/public/assets/examples/piniaEx.png"
                    class="img1"
                    alt="piniaEx"
                />
            </div>
            <div class="focus" v-show="figmaEx" @click="blur">
                <img
                    src="@/public/assets/examples/figmaEx1.png"
                    class="img2"
                    alt="figmaEx1"
                />
                <img
                    src="@/public/assets/examples/figmaEx2.png"
                    class="img2"
                    alt="figmaEx2"
                />
            </div>
            <div class="focus" v-show="firebaseEx" @click="blur">
                <img
                    src="@/public/assets/examples/firebaseEx1.png"
                    class="img2"
                    alt="firebaseEx1"
                />
                <img
                    src="@/public/assets/examples/firebaseEx2.png"
                    class="img2"
                    alt="firebaseEx2"
                />
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { TypeSkills, TypeDes } from "../types/index.js"
gsap.registerPlugin(ScrollTrigger);

const skills = ref<null>(null);
const vueToggle = ref<boolean>(false);
const tsToggle = ref<boolean>(false);
const scssToggle = ref<boolean>(false);
const piniaToggle = ref<boolean>(false);
const figmaToggle = ref<boolean>(false);
const firebaseToggle = ref<boolean>(false);
    // pick 적용해서 필요한 요소만 넣어보기
const logoArray = ref<HTMLDivElement[]>([]);
const logoRef: any = (el: HTMLDivElement) => logoArray.value.push(el);
const logos: TypeSkills = ([
    {
        id: 0,
        iconImg: "../assets/logos/vuenuxtLogo.png",
        showDes: (i) => {
            if (!vueToggle.value) {
                tsToggle.value =
                    scssToggle.value =
                    piniaToggle.value =
                    figmaToggle.value =
                    firebaseToggle.value =
                        false;
                vueToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                vueToggle.value = false;
            }
        },
        alt: "vueIcon",
    },
    {
        id: 1,
        iconImg: "../assets/logos/typescriptLogo.png",
        showDes: (i) => {
            if (!tsToggle.value) {
                vueToggle.value =
                    scssToggle.value =
                    piniaToggle.value =
                    figmaToggle.value =
                    firebaseToggle.value =
                        false;
                tsToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                tsToggle.value = false;
            }
        },
        alt: "tsIcon",
    },
    {
        id: 2,
        iconImg: "../assets/logos/piniaLogo.png",
        showDes: (i) => {
            if (!piniaToggle.value) {
                tsToggle.value =
                    scssToggle.value =
                    vueToggle.value =
                    figmaToggle.value =
                    firebaseToggle.value =
                        false;
                piniaToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                piniaToggle.value = false;
            }
        },
        alt: "piniaIcon",
    },
    {
        id: 3,
        iconImg: "../assets/logos/scssLogo.png",
        showDes: (i) => {
            if (!scssToggle.value) {
                tsToggle.value =
                    vueToggle.value =
                    piniaToggle.value =
                    figmaToggle.value =
                    firebaseToggle.value =
                        false;
                scssToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                scssToggle.value = false;
            }
        },
        alt: "scssIcon",
    },
    {
        id: 4,
        iconImg: "../assets/logos/figmaLogo.png",
        showDes: (i) => {
            if (!figmaToggle.value) {
                tsToggle.value =
                    scssToggle.value =
                    vueToggle.value =
                    piniaToggle.value =
                    firebaseToggle.value =
                        false;
                figmaToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                figmaToggle.value = false;
            }
        },
        alt: "figmaIcon",
    },
    {
        id: 5,
        iconImg: "../assets/logos/firebaseLogo.png",
        showDes: (i) => {
            if (!firebaseToggle.value) {
                tsToggle.value =
                    scssToggle.value =
                    vueToggle.value =
                    piniaToggle.value =
                    figmaToggle.value =
                        false;
                firebaseToggle.value = true;
                logoArray.value.map((item: HTMLDivElement) => {
                    item.classList.remove("active");
                });
                logoArray.value[i].classList.toggle("active");
                desArray.value.map((item: HTMLDivElement) => (item.style.display = "none"));
                desArray.value[i].style.display = "block";
            } else {
                logoArray.value[i].classList.toggle("active");
                desArray.value[i].style.display = "none";
                firebaseToggle.value = false;
            }
        },
        alt: "firebaseIcon",
    },
]);

const vueEx = ref<boolean>(false);
const tsEx = ref<boolean>(false);
const scssEx = ref<boolean>(false);
const piniaEx = ref<boolean>(false);
const figmaEx = ref<boolean>(false);
const firebaseEx = ref<boolean>(false);
const desArray = ref<HTMLDivElement[]>([]);
const desRef: any = (el: HTMLDivElement) => desArray.value.push(el);
const dess: TypeDes = [
    {
        id: 0,
        background: "#3F724E",
        desImg: "logos/vuenuxtLogo",
        firstDes:
            "Vue3를 사용해 컴포넌트화와 라우팅, 상태 관리등을 할 수 있으며, vuex, router를 사용할 수 있습니다.",
        secondDes:
            "spa인 vue 뿐만이 아닌 ssr인 nuxt를 사용해 seo를 적용할 수 있습니다.",
        focus: () => {
            vueEx.value = true;
        },
        desExImg: "examples/vueEx",
        desEx: "vueEx",
    },
    {
        id: 1,
        background: "#3178C6",
        desImg: "logos/typescriptLogo",
        firstDes: "es6문법과 typescript를 사용할 수 있으며 유지보수와 최적화에 관심이 많습니다.",
        secondDes: "최근 유지 보수의 중요성을 알게 돼 코드 최적화에 노력을 하고 있습니다. 경험이 적어 모든 타입을 완벽하게 선언하지는 못하지만 앞으로 발전하며 개선할 것입니다.",
        focus: () => {
            tsEx.value = true;
        },
        desExImg: "examples/tsEx",
        desEx: "tsEx",
    },
    {
        id: 2,
        background: "#909256",
        desImg: "logos/piniaLogo",
        firstDes: "vue에서 권장하는 상태 관리 라이브러리인 pinia를 사용해 유저 관리, 토큰 저장 등의 작업이 가능합니다.",
        secondDes:
            "mutation이 없으며 vue3 composition api와 잘 어울려 vuex 대신에 pinia를 사용해 보다 깔끔한 코드를 만듭니다.",
        focus: () => {
            piniaEx.value = true;
        },
        desExImg: "examples/piniaEx",
        desEx: "piniaEx",
    },
    {
        id: 3,
        background: "#881777",
        desImg: "logos/scssLogo",
        firstDes: "CSS3와 scss로 반응형 웹을 만들 수 있습니다.",
        secondDes:
            "Scss를 사용해 mixin, 변수를 만들어 유지 보수 관리를 수월하게 합니다.",
        focus: () => {
            scssEx.value = true;
        },
        desExImg: "examples/scssEx",
        desEx: "scssEx",
    },
    {
        id: 4,
        background: "#757575",
        desImg: "logos/figmaLogo",
        firstDes:
            "Figma 툴을 사용해 간단한 일러스트를 제작할 수 있으며 웹 개발을 하기 전 제작에 도움을 줄 수 있는 견본을 만들 수 있습니다.",
        secondDes:
            "figma에 대해 기본 지식이 있으며 디자이너와의 협업 경험이 있어 능숙하게 다룰 수 있습니다.",
        focus: () => {
            figmaEx.value = true;
        },
        desExImg: "examples/figmaEx1",
        desEx: "figmaEx",
    },
    {
        id: 5,
        background: "#0d7297",
        desImg: "logos/firebaseLogo",
        firstDes:
            "구글의 NOSQL Firebase를 사용해 클라우드 데이터베이스와 유저를 관리할 수 있습니다.",
        secondDes:
            "Firebase 또는 Firestore, storage를 사용해 글, 이미지 저장 등의 간단한 백엔드를 다룰 수 있습니다.",
        focus: () => {
            firebaseEx.value = true;
        },
        desExImg: "examples/firebaseEx1",
        desEx: "firebaseEx",
    },
];

const blur = (): void => {
    vueEx.value =
        tsEx.value =
        scssEx.value =
        piniaEx.value =
        firebaseEx.value =
        figmaEx.value =
            false;
};
onMounted(() => {
    gsap.fromTo(
        skills.value,
        { color: "#ffffaf" },
        { color: "#ffffff", duration: 3, yoyo: true, repeat: -1 }
    );

    const logoAni = gsap.timeline();
    ScrollTrigger.create({
        animation: logoAni,
        trigger: skills.value,
        start: "top 35%",
    });
    logoAni.fromTo(
        logoArray.value,
        { opacity: 0 },
        { opacity: 1, stagger: 0.2 }
    );
});
</script>

<style lang="scss" scoped>
@import "../style/Mainstyle.scss";

h2 {
    text-align: center;
}
.logos {
    position: relative;
    text-align: center;
    overflow: hidden;
    img {
        width: 10%;
        margin: 20px;
        cursor: pointer;
        border-radius: 70%;
        filter: grayscale(0.8);
        transition: 0.3s;
        &:hover {
            transform: scale(1.1);
            filter: grayscale(0);
            box-shadow: 1.5px 2px 3px rgb(100, 100, 100);
        }
    }
    .active {
        transform: scale(1.1);
        filter: grayscale(0);
        box-shadow: 1.5px 2px 3px rgb(100, 100, 100);
    }
}
.des {
    position: relative;
    transform: translate(-50%);
    left: 50%;
    width: 80%;
    margin-top: 50px;
    color: #ffffff;
    .desBorder {
        box-shadow: 0 0 0 3px rgb(255, 255, 255) inset;
        border-radius: 1em;
        display: none;
    }
    .desIcon {
        position: absolute;
        top: 10px;
        left: 20%;
        width: 120px;
    }
    section {
        margin: 0 10px 0 10px;
        display: flex;
        div {
            flex: 1 1 45%;
            margin: 130px 0 0 10px;
            word-break: keep-all;
            p:nth-child(1) {
                margin-top: 22px;
                font-weight: 600;
            }
            p:nth-child(2) {
                margin-top: 30px;
                font-size: 0.9em;
            }
            p:nth-child(3) {
                display: inline-block;
                padding: 5px;
                border: 1px solid blue;
                cursor: pointer;
                color: rgb(37, 37, 255);
            }
        }
        .frame {
            flex: 1 1 50%;
            margin: 15px 5px 5px 10px;
            text-align: center;
            overflow: hidden;
            img {
                cursor: pointer;
                border-radius: 2%;
                width: 100%;
            }
            p {
                margin: 5px 0 10px 0 !important;
            }
        }
    }
}
.focus {
    position: fixed;
    transform: translate(-50%, -50%);
    top: 50%;
    left: 50%;
    width: calc(100% + 1px);
    height: 100%;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    overflow: hidden;
    cursor: pointer;
    text-align: center;
    @mixin img-style {
        position: relative;
        transform: translate(0, -50%);
        top: 50%;
    }
    .img1 {
        @include img-style;
        width: 85%;
    }
    .img2 {
        @include img-style;
        width: 49%;
        &:nth-child(1) {
            margin-right: 10px;
        }
    }
}
@media screen and (max-width: 1500px) {
    .des {
        .desIcon {
            width: 100px;
        }
        section {
            div {
                p:nth-child(2) {
                    margin-top: 40px;
                }
            }
        }
    }
}
@media screen and (max-width: 1200px) {
    .des {
        section {
            div {
                margin-top: 100px;
                p:nth-child(2) {
                    margin-top: 20px;
                }
            }
        }
    }
}
@media screen and (max-width: 768px) {
    .logos {
        img {
            width: 20%;
        }
    }
    .des {
        width: 100%;
        margin-top: 20px;
        .desIcon {
            display: none;
        }
        section {
            display: block;
            div {
                margin-top: 0;
                p {
                    padding-top: 20px;
                }
            }
            .frame {
                span {
                    display: none;
                }
            }
        }
    }
    .focus {
        display: flex;
        flex-direction: column;
        .img1 {
            width: 95%;
            transform: translate(-50%, -50%);
            top: 50%;
            left: 50%;
        }
        .img2 {
            width: 90%;
            transform: translate(-50%, -50%);
            top: 30%;
            left: 50%;
            &:nth-child(1) {
                margin-right: 0;
                margin-bottom: 20px;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .logos {
        img {
            width: 26%;
            margin: 10px;
        }
    }
}
</style>
