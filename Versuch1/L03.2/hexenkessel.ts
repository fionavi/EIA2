namespace L03_CocktailBar {
    window.addEventListener("load", handleLoad);

    function handleLoad(_event: Event): void {
        console.log("Start");
        let form: HTMLDivElement = <HTMLDivElement>document.querySelector("div#form");
        //let slider: HTMLInputElement = <HTMLInputElement>document.querySelector("input#amount");

        document.querySelector("#fertig").addEventListener("click", handleChange);
        //slider.addEventListener("input", displayAmount);
        //form.addEventListener("change", handleChange);
        //document.querySelector("#fertig").addEventListener("click", handleChange);
        //slider.addEventListener("input", displayAmount);
    }

    function handleChange(_event: Event): void {
       // console.log(_event);
        let kessel: HTMLSelectElement = <HTMLSelectElement>document.querySelector("#kessel");
       // console.log(kessel.value + kessel);

        let inputs: NodeListOf<HTMLInputElement> = document.querySelectorAll("input");
        console.log(inputs);

        let order: HTMLDivElement = <HTMLDivElement>document.querySelector("div#order");
        order.innerHTML = "";

        let formData: FormData = new FormData(document.forms[0]);           //Formular (<form> - Tag) -> 0 ist falls es mehrere gibt, dass es 1. Formular wählt, alle Inhalte aus Formular werden ausgewählt
        for (let entry of formData) {                   // solange Einträge im Formular
           //debugger;
           let item: HTMLInputElement = <HTMLInputElement>document.querySelector("[value='" +  entry[1] + "']"); //item mitsamt Infos wird aufgegriffen bzw selektiert
           
           //console.log(item);
           //console.log(entry);
           if (entry[1] != null && entry[0] == "Name" && entry[1] != "" ) {
               order.innerHTML += "Name: " + entry[1] + "<br>";
            }

            
           if (item != null && entry[0] == "Datalist" ) {
            order.innerHTML += "Wirkung: " + entry[1] + "<br>";
           }
          
           if (item != null && item.type == "range") {
           order.innerHTML += "Zubereitung: " + item.value + " Stunden" + "<br>";

           }

           if (entry[0] == "Kessel" && item != null) {
            let price: number = parseInt(item.getAttribute("price")!);      
            order.innerHTML += entry[1] + "  Galleonen " + price  + "<br>";
            } 

           if (item != null && item.type == "checkbox") { 
            let mengenangabe: string = document.getElementById(item.name + "_anzahl").getAttribute("mengenangabe")!; //Attribut mengenangabe vom elemnet mit id _anzahl wird aufgegriffen
            let price: number = parseInt(item.getAttribute("price")!);                                                  //string zu number geparsed, Attribute price wird rausgegriffen         price * parseInt(item.getElementById(item.name + "_anzahl").getAttribute("value")!)   geht nicht
            order.innerHTML += item.name + " " + (<HTMLInputElement>document.getElementById(item.name + "_anzahl")).value + " " + mengenangabe + " " + price + "Galleonen" + "<br>"; // schreibt in Rezept den Wert des Attributs mit id anzahl + mengenangabe + preis 
            /* console.log((<HTMLInputElement>document.getElementById(item.getAttribute("id") + "_anzahl")).value);
            console.log(document.getElementById(item.name + "_anzahl")); */
        }

           if (item != null && item.type == "radio") {
            if (item.className == "temp") {
            order.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.name)).name + " auf " + (<HTMLInputElement>document.getElementById("temperatur")).value + " °C" + "<br>";
            }
            if (item.className == "rühren") {
                order.innerHTML += "Den Trank " + (<HTMLInputElement>document.getElementById(item.name)).name + "<br>";
           }
           }

           if (item != null && entry[0] == "fest") {
                
            order.innerHTML += "bis der Trank " + entry[1]  + " ist " + "<br>";
           }
           if (item != null && item.type == "color") {
                
            order.innerHTML += " und die Farbe " + (<HTMLInputElement>document.getElementById(item.name)).value + " bekommt." + "<br>";
           }
           
                      /* if (entry[0] == "Kessel" && item != null) {
             order.innerHTML += entry[1] + "  Galleonen " + price  + "<br>";
             } else {
                order.innerHTML += item.name + "  Sickel " + price  + "<br>";
                order.innerHTML += item.value + mengenangabe;  
             }
         */
        
    }

        /* function displayAmount(_event: Event): void {
        let progress: HTMLProgressElement = <HTMLProgressElement>document.querySelector("progress");
        let amount: string = (<HTMLInputElement>_event.target).value;
        progress.value = parseFloat(amount);
    } */
}
}
