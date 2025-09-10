import { describe, it, expect } from "vitest";
import * as email from "@/lib/email";

describe("email fallback", () => {
  it("falls back to console when no key", async () => {
    const res = await email.sendEmail({ subject: "Test", html: "<b>hi</b>" });
    expect(res).toHaveProperty("id");
  });
});


