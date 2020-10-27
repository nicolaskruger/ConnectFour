class View {
    constructor(element) {
        this.element = element;
    }
    set(models) {
        this.element.innerHTML = this.template(models);
    }
}
//# sourceMappingURL=View.js.map