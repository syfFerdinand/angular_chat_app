export interface Message{
    id: number;
    text: string;
    created_at: Date;
}

export const messages= [
    {
        id: 1,
        text: ' Welcome to group everyone !',
        created_at: new Date('2020-01-12')
    },
    {
        id: 2,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaeratat praesentium, aut ullam delectus odio error sit rem. Architectonulla doloribus laborum illo rem enim dolor odio saepe, consequatur quas?",
        created_at: new Date('2020-01-13')
    },
    {
        id: 3,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis, reiciendis!",
        created_at: new Date('2020-01-14')
    },
    {
        id: 4,
        text: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Magnam, repudiandae.",
        created_at: new Date('2020-01-15')
    },
    {
        id: 5,
        text: "happy holiday guys!",
        created_at: new Date('2020-01-16')
    },
]