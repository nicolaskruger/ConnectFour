class msgView extends View {
    constructor(elemente:HTMLElement) {
        super(elemente);
    }
    template(model:msg){
       return `<p class="msg ${model.inv}" style="color: ${model.color};" >${model.msg}</p>`;
    }
}