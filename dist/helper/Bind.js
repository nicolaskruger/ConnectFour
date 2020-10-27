class Bind {
    constructor(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, (model) => view.set(model));
        view.set(model);
        return proxy;
    }
    static create(model, view, ...props) {
        let proxy = ProxyFactory.create(model, props, (model) => view.set(model));
        view.set(model);
        return proxy;
    }
}
//# sourceMappingURL=Bind.js.map