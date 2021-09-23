import { render, screen } from '@testing-library/react';
import React from "react";
import moexTickerLast from "./Stocks/actions";
import MessageInput from "./Chat/MessageInput";
import { unmountComponentAtNode } from "react-dom";

let container = null;
beforeEach(() => {
  container = document.createElement("div");
  document.body.appendChild(container);
});

afterEach(() => {
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it("Get quotes", async () => {
    const quote = await moexTickerLast("SBER");
    expect(quote).toBeGreaterThanOrEqual(0);
});

it("Render MessageInput", () => {
    render(<MessageInput />, container);
    expect(container).toBeDefined();
});
