import "@testing-library/jest-dom/extend-expect";
import "jest-canvas-mock";
import { server } from "./mocks/server";

beforeAll(() => {
  server.listen();
});

beforeEach(() => {
  // IntersectionObserver isn't available in test environment
  const mockIntersectionObserver = jest.fn();
  mockIntersectionObserver.mockReturnValue({
    observe: () => null,
    unobserve: () => null,
    disconnect: () => null,
  });
  window.IntersectionObserver = mockIntersectionObserver;
});

afterEach(() => {
  server.resetHandlers();
});

afterAll(() => server.close());
