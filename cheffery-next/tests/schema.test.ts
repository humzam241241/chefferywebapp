import { describe, it, expect } from "vitest";
import { enterSchema, contactSchema } from "@/lib/schema";

describe("schemas", () => {
  it("validates enter schema", () => {
    const good = enterSchema.safeParse({
      name: "Alex",
      email: "a@example.com",
      phone: "",
      eventDate: "2025-12-10",
      guestCount: 20,
      address: "",
      budgetRange: "",
      notes: "",
      social: "https://example.com",
    });
    expect(good.success).toBe(true);
  });

  it("rejects invalid contact schema", () => {
    const bad = contactSchema.safeParse({ name: "A", email: "no", message: "hi" });
    expect(bad.success).toBe(false);
  });
});


