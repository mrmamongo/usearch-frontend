export enum Tag {
    all="ВСЕ",
    budget="БЮДЖЕТ",
    paid="ПЛАТНОЕ",
    state="ГОСУДАРСТВЕННЫЙ",
    nostate="НЕГОСУДАРСТВЕННЫЙ",
    hostel="ОБЩЕЖИТЕ",
    license="ЛИЦЕНЗИЯ",
    vuz="ПРИ ВУЗе",
}

export type Colleague = {
    long_name: string,
    tags: string[][],
    url: string
};
