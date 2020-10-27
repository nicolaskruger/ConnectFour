class ConnectFourController{
    private $ = document.querySelector.bind(document);
    private $_ = document.querySelectorAll.bind(document);
    private table = this.$("#table");
    
    private msgDiv = this.$("#msg");
    private msgView:msgView = new msgView(this.msgDiv);
    private msg:msg = ProxyFactory.create(new msg(),['setMsg'],(model)=>this.msgView.set(model));
    
    private buttons = document.querySelectorAll("button");
    private fourView:ConnectFourView = new ConnectFourView(this.table);
    private four:ConnectFour = Bind.create(new ConnectFour(),this.fourView,'push_','createGrid');
    
    constructor(){
        
        for(let i=0;i<this.buttons.length;i++){
            this.buttons[i].addEventListener('click',this.add.bind(this,i));
        }
    }
    add(i){
        try {
            this.four.push_(i);
            let w = this.four.Win(); 
            if(w!= this.four.Draw){
                this.endGameMsg(this.four.decode[w],this.four.decode[w],'');
            }
            else if(this.four.endGame()){
                this.endGameMsg("draw","cyan",'');
            }
        } catch (error) {
            
        }
    }
    endGameMsg(msg,color,inv){
        this.msg.setMsg(msg,color,inv);
        setTimeout(()=>{this.clear()},2000);
    }
    clear(){
        console.log("foi");
        this.four.createGrid();
        this.msg.setMsg('','','inv');
    }

}