export interface User{
    id: number;
    username: string;
    email: string|null;
    tel: number|null;
    photo_profile:string|null;
    online: boolean|null;
    created_at: Date|null;
    updated_at: Date|null;
}

export const users = [
    {
        id: 1,
        username: "lox",
        tel: +22800236598,
        photo_profile:"https://source.unsplash.com/_7LbC5J-jw4/600x600",
        online: false,
        created_at: new Date('2020-01-13'),
        updated_at: new Date('2020-01-14'),
    },
    {
        id: 2,
        username: "laol",
        tel: +2288563155,
        photo_profile:"https://source.unsplash.com/vpOeXr5wmR4/600x600",
        online: false,
        created_at: new Date('2020-01-13'),
        updated_at: new Date('2020-08-09'),
    },
    {
        id: 3,
        username: "drayin",
        tel: +22810248569,
        photo_profile:"https://source.unsplash.com/otT2199XwI8/600x600",
        online: false,
        created_at: new Date('2020-01-19'),
        updated_at: new Date('2020-04-22'),
    },
]