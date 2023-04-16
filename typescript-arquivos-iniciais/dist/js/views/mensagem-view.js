import { View } from "./View.js";
export class MensagemView extends View {
    template(model) {
        return `
            <p class="alert-info">${model}<p/>
        `;
    }
    update(model) {
        const template = this.template(model);
        this.elemento.innerHTML = template;
    }
}
