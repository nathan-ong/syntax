import { screen, render } from "@testing-library/react";
import LabeledCheckbox from "./LabeledCheckbox";
import { expect, vi } from "vitest";
import userEvent from "@testing-library/user-event";

describe("checkbox", () => {
  it("renders successfully", () => {
    const { baseElement } = render(
      <LabeledCheckbox
        id="testid"
        checked
        label="test"
        onChange={() => {
          /* empty */
        }}
      />,
    );
    expect(baseElement).toBeTruthy();
  });
  it("fires the onClick when clicked", async () => {
    const handleChange = vi.fn();
    render(
      <LabeledCheckbox
        id="testid"
        checked
        label="Continue to the next step"
        onChange={handleChange}
      />,
    );
    const checkbox = await screen.findByLabelText("Continue to the next step");
    // eslint-disable-next-line testing-library/no-await-sync-events
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledTimes(1);
  });
  it("successfully grabs input checked status when clicked", async () => {
    const handleChange = vi.fn();
    render(
      <LabeledCheckbox
        id="testid"
        checked
        label="Continue to the next step"
        onChange={handleChange}
      />,
    );
    const checkbox = await screen.findByLabelText("Continue to the next step");
    // eslint-disable-next-line testing-library/no-await-sync-events
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        target: expect.objectContaining({
          checked: true,
        }),
      }),
    );
  });
  it("successfully grabs input unchecked status when clicked", async () => {
    const handleChange = vi.fn();
    render(
      <LabeledCheckbox
        id="testid"
        checked={false}
        label="Continue to the next step"
        onChange={handleChange}
      />,
    );
    const checkbox = await screen.findByLabelText("Continue to the next step");
    // eslint-disable-next-line testing-library/no-await-sync-events
    await userEvent.click(checkbox);
    expect(handleChange).toHaveBeenCalledWith(
      expect.objectContaining({
        // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
        target: expect.objectContaining({
          checked: false,
        }),
      }),
    );
  });
});
