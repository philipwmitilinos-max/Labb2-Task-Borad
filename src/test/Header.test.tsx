import Header from "../componenets/Header";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Header-tester", () => {
  it("visar headers rubrik", () => {
    render(<Header />);

    expect(
      screen.getByRole("heading", { name: "Task Board" }),
    ).toBeInTheDocument();
  });

  it("den ska visa beskrivning", () => {
    render(<Header />);

    expect(screen.getByText("Laboration del 1")).toBeInTheDocument();
  });

  it("den ska visa inehåll", () => {
    render(<Header />);

    expect(
      screen.getByText("En enkel task board byggd med React och TypeScript."),
    ).toBeInTheDocument();
  });
});
