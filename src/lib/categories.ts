import LuxuryImg from '@/assets/luxury.webp'
import DeluxeImg from '@/assets/deluxe.webp';
import ExecutiveImg from '@/assets/executive.webp'
export interface Categories {
    name:string;
    image:ImageMetadata;
    href:string;
}
export const categories:Categories[]= [
    {
        name:"Luxury Suites",
        image: LuxuryImg,
        href: "/luxury-rooms"
    },
    {
        name: "Deluxe Rooms",
        image: DeluxeImg,
        href: '/deluxe-rooms'
    },
    {
        name: "Executive Suites",
        image: ExecutiveImg,
        href: "/executive-rooms"
    }
]