import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;
const resend = resendApiKey ? new Resend(resendApiKey) : null;

type SendArgs = {
  subject: string;
  to?: string | string[];
  html: string;
};

export async function sendEmail({ subject, to = "hello@cheffery.com", html }: SendArgs) {
  if (!resend) {
    // Fallback to console in dev/no key scenarios
    console.log("[email:fallback]", { subject, to, html });
    return { id: "console-fallback", error: null };
  }
  const from = "Cheffery <noreply@cheffery.com>";
  const result = await resend.emails.send({ from, to, subject, html });
  return result;
}


