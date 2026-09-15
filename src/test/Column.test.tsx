import Column from "../componenets/Cloumn";
import { describe, expect, it } from "vitest";
import { render, screen } from "@testing-library/react";

describe("Column-tester", () => {
    it("den ska visa rubrik", () => {
        render(
            <Column title="ToDo">Test innehåll</Column>
        );

        expect(screen.getByRole("heading", { name: "ToDo" })).toBeInTheDocument();
    });
});