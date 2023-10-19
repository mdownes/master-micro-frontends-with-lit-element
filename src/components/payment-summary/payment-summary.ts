import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';

@customElement('payment-summary')
export class PaymentSummary extends LitElement {
    @property()
    paymentAmount = '100.00';

    render() {
        return html`        
        <h1>Payment Summary</h1>
        <div>Price: ${this.paymentAmount}</div>
     `;
    }

    connectedCallback(): void {
        super.connectedCallback();
        window.EventBus.subscribe('country-changed', this._onCountryChanged);
    }

    private _onCountryChanged: EventListener = (e: Event) => {
        const customEvent = e as CustomEvent;

        //Setting this.paymentAmount will automatically call the render method with new value
        this.paymentAmount = customEvent.detail.country === 'USA' ? '$100.00' : '€200.00';
    }
}