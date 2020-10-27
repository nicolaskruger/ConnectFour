class ConnectFour{
  private grid:Array<Array<number>> = [];
  private current:Array<number>= Array(7).fill(5);
  private lastAdded:Array<number>;
  get Red(){ return this.red;}
  private red = 1;
  get Yellow(){ return this.yellow;}
  private yellow = 2;
  get Draw(){return this.draw;}
  private draw = 0;
  private currentTurn = this.red;
  get Grid(){
    return [...this.grid];
  }
  get Decode(){
    return {...this.decode}
  }
  public decode = {
    0: "draw",
    1: "red",
    2: "yellow",
    "draw":0,
    "red":1,
    "yellow":2,
  }
  constructor(){
    this.createGrid();
  }
  private changeTurn(){
    this.currentTurn = this.currentTurn==this.red?this.yellow:this.red;
  }
  private decodeLetter=(str:string)=> (str.charCodeAt(0) - "A".charCodeAt(0));
  public createGrid(){
    this.grid = [];
    this.current = Array(7).fill(5);
    for(let i=0;i<6;i++)
      this.grid.push([...Array(7).fill(0)])
  } 
  private printGrid(){
    this.grid.forEach(gg=>{
      console.log(gg);
    });
  }
  public pushCard(color:number,pos:number):Array<number>{
    if(this.current[pos]!=-1){
      let cur = this.current[pos];
      this.grid[cur][pos]=color;
      this.current[pos]--;
      return [cur,pos];
    }else{
      throw new Error();
    }
  }
  public push_(pos:number):Array<number>{
    this.lastAdded = this.pushCard(this.currentTurn,pos);
    this.changeTurn();
    return this.lastAdded;
  }
  private line(y:number,x:number,dy,dx){
    try {
      if(this.grid[y][x]==this.grid[y+dy][x+dx]){
        return 1 + this.line(y+dy,x+dx,dy,dx);
      }
      return 0;
    } catch (error) {
      return 0;
    }
  }
  private win(y:number,x:number){
    let yy = this.line(y,x,1,0)+1+this.line(y,x,-1,0)
    let xx = this.line(y,x,0,1)+1+this.line(y,x,0,-1)
    let dr = this.line(y,x,-1,-1)+1+this.line(y,x,1,1)
    let ur = this.line(y,x,1,-1)+1+this.line(y,x,-1,1)
    let arr = [yy,xx,dr,ur];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] >= 4) {
            let v= this.grid[y][x];
            return v;      
          }
    }
    return this.draw;
  }
  public Win(){
    return this.win(this.lastAdded[0],this.lastAdded[1]);
  }
  public endGame(){
    return this.grid.reduce((c,s)=>c.concat(s),[])
                    .filter(s => s==this.draw).length==0;
  }
  private whoIsWinner(piecesPositionList:Array<string>){
    //return "Red", "Yellow" or "Draw"
    this.createGrid();
    for(const pp of piecesPositionList){
      let val = pp.split("_")
      try {
        let vet = this.pushCard(this.decode[val[1]],this.decodeLetter(val[0]))
        let w = this.win(vet[0],vet[1]);
        if(w!=this.draw)
          return this.decode[w];
      } catch (error) {

      }
    };
    return this.decode[this.draw];
  }
}


