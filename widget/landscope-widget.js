/**
 * LandScope 1-Line Drop-In Spatial HUD Widget
 * Author: The Quite Good Project (https://quitegoodproject.com)
 */
class LandScopeWidget extends HTMLElement {
  connectedCallback() {
    const address = this.getAttribute('address') || 'Enter Address';
    this.innerHTML = `
      <div style="background: #121215; border: 1px solid #27272a; border-radius: 8px; padding: 16px; font-family: sans-serif; color: #f4f4f5; max-width: 400px;">
        <div style="font-size: 11px; color: #10b981; font-family: monospace; font-weight: bold; margin-bottom: 4px;">LANDSCOPE SPATIAL HUD</div>
        <div style="font-size: 14px; font-weight: bold; margin-bottom: 8px;">${address}</div>
        <div style="font-size: 12px; color: #a1a1aa;">Powered by LandScope PostGIS Parcel & Solar Engine</div>
      </div>
    `;
  }
}
customElements.define('landscope-widget', LandScopeWidget);
