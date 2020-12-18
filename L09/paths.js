"use strict";
var L09_Skipiste;
(function (L09_Skipiste) {
    function createPaths() {
        L09_Skipiste.skierPaths = createSkierPaths(0);
    }
    L09_Skipiste.createPaths = createPaths;
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
})(L09_Skipiste || (L09_Skipiste = {}));
//# sourceMappingURL=paths.js.map