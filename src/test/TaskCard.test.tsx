import TaskCard from "../componenets/TaskCard";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("TaskCard-tester", () => {
  it("den ska visa titel", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText("Designa UI")).toBeInTheDocument();
  });

  it("den ska visa id", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText("1")).toBeInTheDocument();
  });

  it("den ska visa beskrivning", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText("Skapa layout")).toBeInTheDocument();
  });

  it("den ska visa ansvarig", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText(/Ansvarig:\s*Anna/)).toBeInTheDocument();
  });

  it("den ska visa kategory", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText("Frontend")).toBeInTheDocument();
  });

  it("den ska visa prioritet", () => {
    render(
      <TaskCard
        title="Designa UI"
        id={1}
        description="Skapa layout"
        assignee="Anna"
        category="Frontend"
        priority="Hög"
      />,
    );

    expect(screen.getByText(/Prioritet:\s*Hög/)).toBeInTheDocument();
  });
});
