import { css, html, LitElement } from 'lit'
import { customElement} from 'lit/decorators.js'
import './my-element';


/**
 * Root element containing the app.
 */
@customElement('app-root')
export class AppRoot extends LitElement {

  render() {
    return html`
      <my-element>
        <h1>Correlation Simulation 2.0</h1>
      </my-element>
    `
  }

  static styles = css`
    :host {
        width: 100%;
        max-width: 1280px;
        margin: 0 auto;
    }
  `

}

declare global {
  interface HTMLElementTagNameMap {
    'app-root': AppRoot
  }
}
