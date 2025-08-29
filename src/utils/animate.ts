import gsap from 'gsap';
import { AppRouterInstance } from 'next/dist/shared/lib/app-router-context.shared-runtime';

export const animatePageIn = () => {
    const banner_1 = document.getElementById('banner-1');
    const banner_2 = document.getElementById('banner-2');
    const banner_3 = document.getElementById('banner-3');
    const banner_4 = document.getElementById('banner-4');

    if (banner_1 && banner_2 && banner_3 && banner_4) {
        const tl = gsap.timeline();

        tl.set([banner_1, banner_2, banner_3, banner_4], { yPercent: 0 }).to([banner_1, banner_2, banner_3, banner_4], {
            yPercent: 100,
            ease: 'power2.inOut',
            stagger: 0.2
        })
    }
}

export const animatePageOut = (href: string, router: AppRouterInstance) => {
    const banner_1 = document.getElementById('banner-1');
    const banner_2 = document.getElementById('banner-2');
    const banner_3 = document.getElementById('banner-3');
    const banner_4 = document.getElementById('banner-4');

    if (banner_1 && banner_2 && banner_3 && banner_4) {
        const tl = gsap.timeline();

        tl.set([banner_1, banner_2, banner_3, banner_4], { yPercent: -100 }).to([banner_1, banner_2, banner_3, banner_4], {
            yPercent: 0,
            ease: 'power2.inOut',
            stagger: 0.2,
            onComplete: () => {
                router.push(href);
            }
        })
    }
}