import { describe, it, expect } from 'vitest';
import Counter from '../src/lib/Counter.svelte';
import { tick } from 'svelte';

describe('Counter Component', () => {
  it('should render with initial count of 0', async () => {
    const target = document.createElement('div');
    const instance = new Counter({ target });
    await tick();
    expect(target.textContent).toContain('count is 0');
  });

  it('should increment count when button is clicked', async () => {
    const target = document.createElement('div');
    const instance = new Counter({ target });
    await tick();
    
    const button = target.querySelector('button');
    button?.click();
    await tick();
    expect(target.textContent).toContain('count is 1');

    button?.click();
    await tick();
    expect(target.textContent).toContain('count is 2');
  });
});