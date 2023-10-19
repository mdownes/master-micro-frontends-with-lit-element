import { html, LitElement } from 'lit';
import { customElement, query } from 'lit/decorators.js';

@customElement('address-manager')
export class AddressManager extends LitElement {

    @query('select')
    select: HTMLSelectElement;

    constructor() {
        super();
    }

    render() {
        return html`
          <h1>Address Manager</h1>
          <label for="selectCountry">Country</label>

          <select @change="${this._onChange}" id="selectCountry">
            <option>USA</option>
            <option>EUR</option>
          </select>
     `;
    }

    private _onChange() {
        window.EventBus.publish('country-changed', { detail: { country: this.select.options[this.select.selectedIndex].text } });
    }
}