"use strict";
var L05_Hexenkessel;
(function (L05_Hexenkessel) {
    function generateContent(_data) {
        console.log(_data);
        for (let category in _data) {
            console.log(category);
            let items = _data[category];
            let group = null;
            switch (category) {
                case "zutaten":
                    group = createMultiple(items, category);
                    break;
                default:
                    break;
                    let fieldset = document.querySelector("#ingredients");
                    if (fieldset && group) {
                        fieldset.appendChild(group);
                    }
            }
        }
        function createMultiple(_items, _category) {
            let group = document.createElement("div");
            for (let item of _items) {
                let checkbox = document.createElement("input");
                checkbox.type = "checkbox";
                checkbox.setAttribute("price", item.price.toFixed(2));
                checkbox.value = item.name;
                checkbox.name = _category;
                checkbox.id = item.name;
                let label = document.createElement("label");
                label.textContent = item.name;
                label.htmlFor = item.name;
                group.appendChild(checkbox);
                group.appendChild(label);
            }
            return group;
        }
    }
    L05_Hexenkessel.generateContent = generateContent;
})(L05_Hexenkessel || (L05_Hexenkessel = {}));
//# sourceMappingURL=generateContent.js.map