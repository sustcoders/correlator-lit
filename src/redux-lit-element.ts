import { LitElement } from 'lit';
import { store, RootState } from './store/store';

/**
 * Abstract base class that connects Lit components to Redux store
 */
export abstract class ReduxLitElement extends LitElement {
  private unsubscribe: () => void = () => {};
  private isConnectedToStore = false;

  /**
   * Abstract method that components must implement to handle state changes
   */
  protected abstract stateChanged(state: RootState): void;

  /**
   * Called when element is inserted into DOM
   * Sets up store subscription
   */
  override connectedCallback(): void {
    super.connectedCallback();
    this.isConnectedToStore = true;
    // Subscribe to store changes
    this.unsubscribe = store.subscribe(() => {
      if (this.isConnectedToStore) {
        this.stateChanged(store.getState());
      }
    });
    
    // Initial state update
    this.stateChanged(store.getState());
  }

  /**
   * Called when element is removed from DOM
   * Cleans up store subscription
   */
  override disconnectedCallback(): void {
    super.disconnectedCallback();
    this.isConnectedToStore = false;
    this.unsubscribe();
  }

  /**
   * Access to the Redux store
   */
  protected get store() {
    return store;
  }
}