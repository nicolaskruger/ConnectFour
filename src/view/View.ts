abstract class View {
    protected element: HTMLElement;
    constructor(element:HTMLElement) {
        this.element = element;
    }
    abstract template(model);
    public set(models){
        this.element.innerHTML = this.template(models);
    }
}