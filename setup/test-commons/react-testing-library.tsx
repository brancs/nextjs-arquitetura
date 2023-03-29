import { render as rtlRender } from "@testing-library/react";

function DefaultWrapper({ children }: { children: any }) {
  return children;
}

export const customRender = (AllTheProviders = DefaultWrapper) => {
  return (ui: any, options = {}) => {
    return rtlRender(ui, { wrapper: AllTheProviders, ...options });
  };
};

// re-export everything
export * from "@testing-library/react";

// override render method
export const render = () =>
  console.error("Please create your own render method");
