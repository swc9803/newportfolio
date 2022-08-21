<template>
    <div>
        <Navbar
            class="navbar"
            ref="progressbar"
            @moveToAboutme="moveToAboutme"
            @moveToSkills="moveToSkills"
            @moveToMyworks="moveToMyworks"
            @moveToContact="moveToContact"
        />
        <div class="background" />
        <div class="container main">
            <SpaceBackground class="space" />
            <div class="wrapper">
                <!-- 최성우 누르면 소개페이지로 -->
                <p ref="mainText">
                    끝없이 배움을 추구하는 웹퍼블리셔
                    <span
                        v-for="star in stars"
                        :key="star.id"
                        class="twinkle"
                        :ref="twinkle"
                        >★</span
                    >
                    <b @click="moveToAboutme">최성우</b>입니다
                </p>
            </div>
        </div>
        <div class="aboutme" ref="aboutme">
            <Aboutme />
        </div>
        <div class="skills" ref="skills">
            <Skills />
        </div>
        <div class="myworks" ref="myworks">
            <Myworks />
        </div>
        <div class="contact" ref="contact">
            <Contact />
        </div>
    </div>
</template>

<!-- <script setup lang="ts"> -->
<script setup>
import { onMounted, ref } from "vue";
import Navbar from "@/components/Navbar.vue";
import SpaceBackground from "@/components/home/SpaceBackground.vue";
import Aboutme from "@/components/Aboutme.vue";
import Skills from "@/components/Skills.vue";
import Myworks from "@/components/Myworks.vue";
import Contact from "@/components/Contact.vue";
import gsap from "gsap";

const progressbar = ref();
const aboutme = ref();
const skills = ref();
const myworks = ref();
const contact = ref();
const mainText = ref();
const array = ref([]);
const twinkle = (el) => array.value.push(el);
// const star = ref();
const stars = ref([{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }]);

const scrollEvent = () => {
    progressbar.value.changeProgress();
};
const moveToAboutme = () => {
    const aboutmeLocation = aboutme.value.offsetTop;
    const menuHeight = document.querySelector(".navbar").offsetHeight;
    scrollTo({ top: aboutmeLocation - menuHeight, behavior: "smooth" });
};
const moveToSkills = () => {
    const skillsLocation = skills.value.offsetTop;
    const menuHeight = document.querySelector(".navbar").offsetHeight;
    scrollTo({ top: skillsLocation - menuHeight, behavior: "smooth" });
};
const moveToMyworks = () => {
    const myworksLocation = myworks.value.offsetTop;
    const menuHeight = document.querySelector(".navbar").offsetHeight;
    scrollTo({ top: myworksLocation - menuHeight, behavior: "smooth" });
};
const moveToContact = () => {
    const contactLocation = contact.value.offsetTop;
    const menuHeight = document.querySelector(".navbar").offsetHeight;
    scrollTo({ top: contactLocation - menuHeight, behavior: "smooth" });
};

const setRandomPosition = () => {
    for (var i = 0; i < 4; i++) {
        gsap.set(array.value[i], {
            xPercent: gsap.utils.random(0, 830),
            yPercent: gsap.utils.random(0, 250),
        });
    }
};
onMounted(() => {
    document.addEventListener("scroll", scrollEvent);
    gsap.from(mainText.value, {
        opacity: 0,
        yPercent: -100,
        pointerEvents: "none",
        duration: 1,
        ease: "ease-out",
        delay: 1,
    });
    for (var i = 0; i < 4; i++) {
        gsap.to(array.value[i], {
            opacity: 0,
            scale: 3,
            duration: 0.5,
            onComplete() {
                gsap.delayedCall(gsap.utils.random(2, 5, 0.1), () => {
                    setRandomPosition();
                    this.restart();
                });
            },
        });
    }
});
</script>

<style lang="scss" scoped>
$titleColor: rgb(255, 255, 175);
$titleFont: "KOTRALEAP";
$titleFontSize: 1.8em;

.main {
    .space {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .wrapper {
        position: relative;
        pointer-events: none;
        top: 50%;
        transform: translate(0, -50%);
        text-align: center;
        font-family: $titleFont;
        p {
            display: inline-block;
            pointer-events: auto;
            margin: 0 4% 0 4%;
            font-size: $titleFontSize;
            font-weight: 400;
            color: white;
            word-break: keep-all;
            b {
                color: $titleColor;
                transform-origin: center center;
                cursor: pointer;
                transition: 0.5s;
                &:hover {
                    color: rgb(255, 200, 80);
                }
            }
            .twinkle {
                position: absolute;
                overflow: hidden;
                pointer-events: none;
                font-size: 0.3em;
            }
        }
    }
}
.skills,
.myworks {
    position: relative;
}
.contact {
    background: #212121;
}
@media screen and (max-width: 768px) {
    .main {
        .wrapper {
            p {
                font-size: 1.5em;
            }
        }
    }
}
@media screen and (max-width: 480px) {
    .main {
        pointer-events: none;
        .wrapper {
            p {
                font-size: 1.6em;
            }
        }
    }
}
</style>