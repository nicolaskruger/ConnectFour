class ConnectFourController {
    constructor() {
        this.$ = document.querySelector.bind(document);
        this.$_ = document.querySelectorAll.bind(document);
        this.table = this.$("#table");
        this.msgDiv = this.$("#msg");
        this.msgView = new msgView(this.msgDiv);
        this.msg = ProxyFactory.create(new msg(), ['setMsg'], (model) => this.msgView.set(model));
        this.buttons = document.querySelectorAll("button");
        this.fourView = new ConnectFourView(this.table);
        this.four = Bind.create(new ConnectFour(), this.fourView, 'push_', 'createGrid');
        for (let i = 0; i < this.buttons.length; i++) {
            this.buttons[i].addEventListener('click', this.add.bind(this, i));
        }
    }
    add(i) {
        try {
            this.four.push_(i);
            let w = this.four.Win();
            if (w != this.four.Draw) {
                this.endGameMsg(this.four.decode[w], this.four.decode[w], '');
            }
            else if (this.four.endGame()) {
                this.endGameMsg("draw", "cyan", '');
            }
        }
        catch (error) {
        }
    }
    endGameMsg(msg, color, inv) {
        this.msg.setMsg(msg, color, inv);
        setTimeout(() => { this.clear(); }, 2000);
    }
    clear() {
        console.log("foi");
        this.four.createGrid();
        this.msg.setMsg('', '', 'inv');
    }
}
//# sourceMappingURL=connectFourController.js.map