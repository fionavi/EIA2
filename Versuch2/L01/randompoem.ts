namespace L01 {

    let subject: string[] = ["Jeder", "Es", "Niemand", "Sie", "Er", "Man"];
    let predicate: string[] = ["kennt", "mag", "liebt", "hasst", "findet", "braucht"];
    let object: string[] = ["EIA 2", "Furtwangen", "HFU", "Haferbrei", "Sand im Schuh", "Kneifzangen"];

    for (let i: number = object.length; i > 0; i--) {
       // console.log(i);
        let randomLine: string = subject[Math.floor(Math.random() * 6)] + " " + predicate[Math.floor(Math.random() * 6)] + " " + object[Math.floor(Math.random() * 6)] + ".";
       
        console.log(randomLine);

    }


}

