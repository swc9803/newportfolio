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
    goToSite: () => void;
    git?: string;
    goToGit?: () => void;
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
    showDes: (i: number) => any;
    alt: string;
}
export type TypeSkills = Skills[];