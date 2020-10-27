class msgView extends View {
    constructor(elemente) {
        super(elemente);
    }
    template(model) {
        return `<p class="msg ${model.inv}" style="color: ${model.color};" >${model.msg}</p>`;
    }
}
//# sourceMappingURL=msgView.js.map