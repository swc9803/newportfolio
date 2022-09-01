export interface MyWorks {
    id: number;
    siteTitle: string;
    slideArray: {
        id: number;
        slideImg: string;
    }[];
    firstDes: string;
    secondDes?: string;
    desTitle: string;
    frontImgArray: {
        id: number;
        frontImg: string;
        frontImgDes: string;
    }[];
    site?: boolean;
    goToSite?: () => void;
    git?: boolean;
    goToGit?: () => void;
    screen?: boolean;
    goToScreen?: () => void;
    distribution?: boolean,
}
export type TypeMyWorks = MyWorks[];

export interface Navbar {
    id: number;
    title: string;
    moveToSection: () => void;
}
export type TypeNavbar = Navbar[];

export interface Skills {
    id: number;
    iconImg: string;
    showDes: (i: number) => void;
    alt: string;
}
export type TypeSkills = Skills[];
export interface Des {
    id: number;
    background: string;
    desImg: string;
    firstDes: string;
    secondDes: string;
    focus: () => void;
    desExImg: string;
    desEx: string;
}
export type TypeDes = Des[];

export interface Velocity {
    x: number;
    y: number;
    tx: number;
    ty: number;
    z: number;
}
export interface Sections {
    id: number;
    title: string;
    component: any;
    background?: string;
}
export type TypeSections = Sections[];