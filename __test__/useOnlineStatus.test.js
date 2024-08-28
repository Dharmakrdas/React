import { renderHook, act } from '@testing-library/react';
import useOnlineStatus from '../src/Hooks/useOnlineStatus';

describe('useOnlineStatus', () => {
  beforeAll(() => {
    // Mock the addEventListener method
    jest.spyOn(window, 'addEventListener');
    jest.spyOn(window, 'removeEventListener');
  });

  afterAll(() => {
    // Cleanup the mocks
    window.addEventListener.mockRestore();
    window.removeEventListener.mockRestore();
  });

  it('should return true when online', () => {
    const { result } = renderHook(() => useOnlineStatus());

    expect(result.current).toBe(true);
  });

  it('should return false when offline', () => {
    const { result } = renderHook(() => useOnlineStatus());

    act(() => {
      window.dispatchEvent(new Event('offline'));
    });

    expect(result.current).toBe(false);
  });

  it('should return true again when back online', () => {
    const { result } = renderHook(() => useOnlineStatus());

    act(() => {
      window.dispatchEvent(new Event('offline'));
    });

    expect(result.current).toBe(false);

    act(() => {
      window.dispatchEvent(new Event('online'));
    });

    expect(result.current).toBe(true);
  });

 
});
