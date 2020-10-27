class ConnectFourView extends View{
    constructor(elemente:HTMLElement) {
        super(elemente);
    }
    template(model:ConnectFour){
        return model.Grid
            .reduce((c,s)=>c.concat(s),[])
            .map(s=> `<div class="circle ${model.Decode[s]}"></div>`)
            .join('');
    }
}