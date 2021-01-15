"use strict";
var L11_Skipiste;
(function (L11_Skipiste) {
    function createPaths() {
        L11_Skipiste.skierPaths = createSkierPaths(0);
    }
    L11_Skipiste.createPaths = createPaths;
    function createSkierPaths(_position) {
        let paths = [];
        for (let type of _position) {
            let path = new Path2D();
            let first = true;
            // console.group(type);
            for (let coordinates of type) {
                // console.log(coordinates);
                if (first)
                    path.moveTo(coordinates[0], coordinates[1]);
                else
                    path.lineTo(coordinates[0], coordinates[1]);
                first = false;
            }
            // console.groupEnd();
            path.closePath();
            paths.push(path);
        }
        return paths;
    }
})(L11_Skipiste || (L11_Skipiste = {}));
//# sourceMappingURL=paths11.js.map