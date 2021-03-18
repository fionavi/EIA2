namespace L04_Hexenkessel {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        generateContent(data);
        
        //let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
       
        document.querySelector("#infos").addEventListener("click", handleInfos);
        document.querySelector("#zutaten").addEventListener("click", handleZutaten);
        document.querySelector("#abbruchbutton").addEventListener("click", handleAbbruch);
        //document.querySelector("#submit").addEventListener("click", submitToServer);
     
     
    }

    function handleInfos(_event: Event): void {
        // console.log(_event);
        let kessel: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#kessel");
        // console.log(kessel.value + kessel);

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let info: HTMLDivElement = <HTMLDivElement>document.querySelector("div#info");
        info.innerHTML = "";
        
        let formData: FormData = new FormData(document.forms[0]);  
        for (let entry of formData) {                   // solange Einträge im Formular
            //debugger;
            let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //item mitsamt Infos wird aufgegriffen bzw selektiert

            if (entry[1] != null && entry[0] == "Name" && entry[1] != "") {
                info.innerHTML += "Name: " + entry[1] + "<br>";
            }


            if (item != null && entry[0] == "Datalist") {
                info.innerHTML += "Wirkung: " + entry[1] + "<br>";
            }

            if (entry[0] == "Kessel" && item != null) {
                let price: number = parseInt(item.getAttribute("price")!);
                info.innerHTML += "Gefäß: " + entry[1] + " (" + price + "  Galleonen) " + "<br>" + "______________________" + "<br>";
            }
        }     
}

    function handleZutaten(_event: Event): void {
    
        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let anweisung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#anweisung");
       // anweisung.innerHTML = "";
    
        let formData2: FormData = new FormData(document.forms[1]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
        for (let entry of formData2) {                   // solange Einträge im Formular
        //debugger;
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //item mitsamt Infos wird aufgegriffen bzw selektiert

        
        if (item != null && item.type == "checkbox") {
            let mengenangabe: string = document.getElementById(item.name + "_anzahl").getAttribute("mengenangabe")!; //Attribut mengenangabe vom elemnet mit id _anzahl wird aufgegriffen
            let price: number = parseInt(item.getAttribute("price")!);                                                  //string zu number geparsed, Attribute price wird rausgegriffen         price * parseInt(item.getElementById(item.name + "_anzahl").getAttribute("value")!)   geht nicht
            anweisung.innerHTML += item.name + " " + (<HTMLInputElement>document.getElementById(item.name + "_anzahl")).value + " " + mengenangabe + " " + price + "Galleonen" + "<br>"; // schreibt in Rezept den Wert des Attributs mit id anzahl + mengenangabe + preis 
            /* console.log((<HTMLInputElement>document.getElementById(item.getAttribute("id") + "_anzahl")).value);
            console.log(document.getElementById(item.name + "_anzahl")); */
        }

       /*  if (item != null && item.type == "radio") {
            if (item.className == "temp") {
                anweisung.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.name)).name + " auf " + (<HTMLInputElement>document.getElementById("temperatur")).value + " °C" + "<br>";
            }
            if (item.className == "rühren") {
                anweisung.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.name)).name + "<br>";
            }
        }
         
        if (item != null && item.type == "color") {
            anweisung.innerHTML += " bis er die Farbe " + (<HTMLInputElement>document.getElementById(item.name)).value + " bekommt." + "<br>";
        } */
    }

}

}
function handleAbbruch(_event: Event): void {

 let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
 console.log(inputs);

 let anweisung: HTMLDivElement = <HTMLDivElement>document.querySelector("div#anweisung");
 //anweisung.innerHTML = "";
    
 let formData2: FormData = new FormData(document.forms[1]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
 for (let entry of formData2) {                   // solange Einträge im Formular
        //debugger;
        let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" + entry[1] + "']"); //item mitsamt Infos wird aufgegriffen bzw selektiert

        
        

        if (item != null && item.type == "radio") {
            if (item.className == "temp") {
                anweisung.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.value)).value + " auf " + (<HTMLInputElement>document.getElementById("temperatur")).value + " °C" + "<br>";
            }
            if (item.className == "rühren") {
                anweisung.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.id)).id + "<br>";
            }
        }
        
        if (item != null && item.type == "color") {
        anweisung.innerHTML += " bis er die Farbe " + (<HTMLInputElement>document.getElementById(item.name)).value + " bekommt." + "<br>";
        }

        if (item != null && item.name == "konsistenz1") {
            anweisung.innerHTML += " bis er " + (<HTMLInputElement>document.getElementById(item.name)).value + " ist." + "<br>";
            }
    }

}

/* function submitToServer(_event: Event): void {
    let rezept: HTMLDivElement = <HTMLDivElement>document.querySelector("div#f3"); 
} */