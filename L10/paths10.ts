namespace L10_Skipiste {
    export let skierPaths: Path2D[];
    export let snowflakePath: Path2D;
    
    export function createPaths(): void {
        skierPaths = createSkierPaths(0);
    }
    
    function createSkierPaths(_position: number): Path2D[] {
            let paths: Path2D[] = [];
            for (let type of _position) {
                let path: Path2D = new Path2D();
                let first: boolean = true;
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
    
    }
    