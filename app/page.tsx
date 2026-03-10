import Link from "next/link";
import {
  Link2,
  BarChart3,
  Pencil,
  Shield,
  Zap,
  LayoutDashboard,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    icon: Zap,
    title: "Instant Shortening",
    description:
      "Paste any long URL and get a short link in milliseconds — no sign-up required to try it.",
  },
  {
    icon: BarChart3,
    title: "Click Analytics",
    description:
      "Track every click in real time. See how your links perform with per-link click counts.",
  },
  {
    icon: Pencil,
    title: "Custom Short Links",
    description:
      "Choose your own slug to create branded, memorable short URLs that reflect your content.",
  },
  {
    icon: LayoutDashboard,
    title: "Link Dashboard",
    description:
      "Manage all your shortened links in one place. Edit, delete, or copy them with a single click.",
  },
  {
    icon: Shield,
    title: "Secure & Reliable",
    description:
      "Built on Neon Postgres and served via Next.js edge infrastructure for maximum uptime.",
  },
  {
    icon: Link2,
    title: "Unlimited Links",
    description:
      "Create as many short links as you need. There are no artificial caps on your account.",
  },
];

const steps = [
  {
    step: "1",
    heading: "Paste your URL",
    body: "Drop any long link into the input field on your dashboard.",
  },
  {
    step: "2",
    heading: "Customize (optional)",
    body: "Add a custom slug to make the link uniquely yours.",
  },
  {
    step: "3",
    heading: "Share & track",
    body: "Copy the short link and watch the click stats roll in.",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero */}
      <section className="flex flex-col items-center justify-center gap-6 px-6 py-28 text-center">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-muted px-3 py-1 text-sm text-muted-foreground">
          <Zap className="h-3.5 w-3.5" />
          Fast, free &amp; open source
        </div>
        <h1 className="max-w-2xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
          Shorten links.{" "}
          <span className="text-primary">Track clicks.</span>{" "}
          Own your data.
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground">
          Turn any long URL into a clean, shareable short link in seconds.
          Monitor performance from a single dashboard — all for free.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
          <Button asChild size="lg">
            <Link href="/dashboard">Get started free</Link>
          </Button>

        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border bg-muted/40 px-6 py-20">
        <div className="mx-auto max-w-5xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Everything you need</h2>
            <p className="mt-3 text-muted-foreground">
              A complete link-management toolkit, built with simplicity in mind.
            </p>
          </div>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {features.map(({ icon: Icon, title, description }) => (
              <div
                key={title}
                className="flex flex-col gap-3 rounded-xl border border-border bg-background p-6 shadow-sm"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                  <Icon className="h-5 w-5 text-primary" />
                </div>
                <h3 className="font-semibold">{title}</h3>
                <p className="text-sm text-muted-foreground">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="px-6 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tight">How it works</h2>
            <p className="mt-3 text-muted-foreground">
              Three steps stand between you and a short link.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-3">
            {steps.map(({ step, heading, body }) => (
              <div key={step} className="flex flex-col items-center gap-3 text-center">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary text-primary-foreground text-lg font-bold">
                  {step}
                </div>
                <h3 className="font-semibold">{heading}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="border-t border-border bg-muted/40 px-6 py-20">
        <div className="mx-auto flex max-w-2xl flex-col items-center gap-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight">
            Ready to shorten your first link?
          </h2>
          <p className="text-muted-foreground">
            Sign up for free and start managing your links in seconds.
          </p>
          <Button asChild size="lg">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border px-6 py-6 text-center text-sm text-muted-foreground">
        © {new Date().getFullYear()} Link Shortener. All rights reserved.
      </footer>
    </div>
  );
}
