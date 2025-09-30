// test_Counter.test.ts
import { describe, it, expect } from 'vitest';
import { render, fireEvent } from '@testing-library/svelte';
import Counter from './Counter.svelte';

describe('Counter Component', () => {
  it('should render with initial count of 0', () => {
    const { getByText } = render(Counter);
    expect(getByText('count is 0')).toBeTruthy();
  });

  it('should increment count when button is clicked', async () => {
    const { getByText } = render(Counter);
    const button = getByText('count is 0');

    await fireEvent.click(button);
    expect(getByText('count is 1')).toBeTruthy();

    await fireEvent.click(button);
    expect(getByText('count is 2')).toBeTruthy();
  });
});