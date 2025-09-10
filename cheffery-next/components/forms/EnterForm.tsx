"use client";
import * as React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { enterSchema, type EnterInput } from "@/lib/schema";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function EnterForm() {
  const [sent, setSent] = React.useState(false);
  const form = useForm<EnterInput>({ resolver: zodResolver(enterSchema), defaultValues: { needVenue: false } });

  async function onSubmit(values: EnterInput) {
    const res = await fetch("/api/enter", { method: "POST", body: JSON.stringify(values) });
    if (res.ok) setSent(true);
  }

  if (sent) {
    return (
      <div className="rounded-2xl border border-neutral-800 bg-neutral-950 p-8">
        <h3 className="text-xl font-semibold">Thank you</h3>
        <p className="mt-2 text-neutral-300">Weve received your details and will be in touch shortly.</p>
      </div>
    );
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your full name" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.name?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="you@example.com" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.email?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="phone"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.phone?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="eventDate"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Date</FormLabel>
                <FormControl>
                  <Input type="date" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.eventDate?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="guestCount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Guest Count</FormLabel>
                <FormControl>
                  <Input type="number" min={1} placeholder="e.g., 30" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.guestCount?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="address"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Event Address</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.address?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="budgetRange"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Budget Range</FormLabel>
                <FormControl>
                  <Input placeholder="Optional" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.budgetRange?.message}</FormMessage>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="social"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Social Link</FormLabel>
                <FormControl>
                  <Input placeholder="https://instagram.com/yourhandle" {...field} />
                </FormControl>
                <FormMessage>{form.formState.errors.social?.message}</FormMessage>
              </FormItem>
            )}
          />
        </div>
        <FormField
          control={form.control}
          name="notes"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Vision / Notes</FormLabel>
              <FormControl>
                <Textarea placeholder="Tell us about your vision" {...field} />
              </FormControl>
              <FormMessage>{form.formState.errors.notes?.message}</FormMessage>
            </FormItem>
          )}
        />
        <div className="text-sm text-neutral-400">
          {/* Optionally embed Calendly here. Include your data-prefill as needed. */}
          {/* <div className="mt-6">Calendly embed...</div> */}
        </div>
        <Button type="submit" variant="gold" className="w-full md:w-auto">
          Submit
        </Button>
      </form>
    </Form>
  );
}


