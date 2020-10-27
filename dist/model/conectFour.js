class ConnectFour {
    constructor() {
        this.grid = [];
        this.current = Array(7).fill(5);
        this.red = 1;
        this.yellow = 2;
        this.draw = 0;
        this.currentTurn = this.red;
        this.decode = {
            0: "draw",
            1: "red",
            2: "yellow",
            "draw": 0,
            "red": 1,
            "yellow": 2,
        };
        this.decodeLetter = (str) => (str.charCodeAt(0) - "A".charCodeAt(0));
        this.createGrid();
    }
    get Red() { return this.red; }
    get Yellow() { return this.yellow; }
    get Draw() { return this.draw; }
    get Grid() {
        return [...this.grid];
    }
    get Decode() {
        return Object.assign({}, this.decode);
    }
    changeTurn() {
        this.currentTurn = this.currentTurn == this.red ? this.yellow : this.red;
    }
    createGrid() {
        this.grid = [];
        this.current = Array(7).fill(5);
        for (let i = 0; i < 6; i++)
            this.grid.push([...Array(7).fill(0)]);
    }
    printGrid() {
        this.grid.forEach(gg => {
            console.log(gg);
        });
    }
    pushCard(color, pos) {
        if (this.current[pos] != -1) {
            let cur = this.current[pos];
            this.grid[cur][pos] = color;
            this.current[pos]--;
            return [cur, pos];
        }
        else {
            throw new Error();
        }
    }
    push_(pos) {
        this.lastAdded = this.pushCard(this.currentTurn, pos);
        this.changeTurn();
        return this.lastAdded;
    }
    line(y, x, dy, dx) {
        try {
            if (this.grid[y][x] == this.grid[y + dy][x + dx]) {
                return 1 + this.line(y + dy, x + dx, dy, dx);
            }
            return 0;
        }
        catch (error) {
            return 0;
        }
    }
    win(y, x) {
        let yy = this.line(y, x, 1, 0) + 1 + this.line(y, x, -1, 0);
        let xx = this.line(y, x, 0, 1) + 1 + this.line(y, x, 0, -1);
        let dr = this.line(y, x, -1, -1) + 1 + this.line(y, x, 1, 1);
        let ur = this.line(y, x, 1, -1) + 1 + this.line(y, x, -1, 1);
        let arr = [yy, xx, dr, ur];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] >= 4) {
                let v = this.grid[y][x];
                return v;
            }
        }
        return this.draw;
    }
    Win() {
        return this.win(this.lastAdded[0], this.lastAdded[1]);
    }
    endGame() {
        return this.grid.reduce((c, s) => c.concat(s), [])
            .filter(s => s == this.draw).length == 0;
    }
    whoIsWinner(piecesPositionList) {
        //return "Red", "Yellow" or "Draw"
        this.createGrid();
        for (const pp of piecesPositionList) {
            let val = pp.split("_");
            try {
                let vet = this.pushCard(this.decode[val[1]], this.decodeLetter(val[0]));
                let w = this.win(vet[0], vet[1]);
                if (w != this.draw)
                    return this.decode[w];
            }
            catch (error) {
            }
        }
        ;
        return this.decode[this.draw];
    }
}
//# sourceMappingURL=conectFour.js.map