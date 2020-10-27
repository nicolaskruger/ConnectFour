class msg {
    public color:string;
    public msg:string;
    public inv:string;
    constructor(msg:string='',color:string='',inv:string='') {
        this.msg = msg;
        this.color = color;
        this.inv = inv;
    }
    setMsg(msg:string,color:string,inv:string) {
        this.msg = msg;
        this.color = color;
        this.inv = inv;
    }
}