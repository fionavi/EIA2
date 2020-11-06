namespace L04_Hexenkessel {

export interface Item {
    name: string;
    price: number;
    //stepper: boolean;
}

export interface Data {
    [category: string]: Item[];
}

export let data: Data = {
   zutaten: [
       {name: "Spinnenbeine", price: 10},
       {name: "Haare", price: 5},
       {name: "Alraunensaft", price: 20},
       {name: "Einhornstaub", price: 100},
       {name: "Drachenblut", price: 500},
       {name: "Knochenmehl", price: 30},
       {name: "Nachtschattenknolle", price: 20}
   ]

};

}
}