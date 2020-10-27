class ConnectFourView extends View {
    constructor(elemente) {
        super(elemente);
    }
    template(model) {
        return model.Grid
            .reduce((c, s) => c.concat(s), [])
            .map(s => `<div class="circle ${model.Decode[s]}"></div>`)
            .join('');
    }
}
//# sourceMappingURL=ConnectFourView.js.map