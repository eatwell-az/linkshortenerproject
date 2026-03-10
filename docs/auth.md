# Authentication — Clerk

## Rules

- **Clerk is the only auth solution.** Never implement custom auth, sessions, JWTs, or password handling.
- All Clerk configuration lives in environment variables in `.env.local` (`NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`, `CLERK_SECRET_KEY`).

---

## Route Protection

| Route        | Behaviour                                                   |
| ------------ | ----------------------------------------------------------- |
| `/dashboard` | Protected — redirect unauthenticated users to sign-in       |
| `/`          | Public — authenticated users are redirected to `/dashboard` |

Enforce this in `middleware.ts` using Clerk's `clerkMiddleware` and `createRouteMatcher`:

```ts
// middleware.ts
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';

const isProtectedRoute = createRouteMatcher(['/dashboard(.*)']);

export default clerkMiddleware(async (auth, req) => {
  const { userId } = await auth();

  // Redirect authenticated users away from home to dashboard
  if (userId && req.nextUrl.pathname === '/') {
    return NextResponse.redirect(new URL('/dashboard', req.url));
  }

  // Protect dashboard routes
  if (isProtectedRoute(req)) {
    await auth.protect();
  }
});

export const config = {
  matcher: ['/((?!_next|.*\\..*).*)'],
};
```

---

## Sign In / Sign Up

- Always use **modal mode** — never navigate to a dedicated sign-in/sign-up page.
- Trigger modals with Clerk's `<SignInButton mode="modal">` and `<SignUpButton mode="modal">`.
- Do **not** set `NEXT_PUBLIC_CLERK_SIGN_IN_URL` or `NEXT_PUBLIC_CLERK_SIGN_UP_URL` to custom page routes.

```tsx
import { SignInButton, SignUpButton } from "@clerk/nextjs";

<SignInButton mode="modal">
  <button>Sign in</button>
</SignInButton>

<SignUpButton mode="modal">
  <button>Sign up</button>
</SignUpButton>
```

---

## Accessing Auth State

| Context          | How                                                            |
| ---------------- | -------------------------------------------------------------- |
| Server Component | `const { userId } = await auth()` from `@clerk/nextjs/server`  |
| Client Component | `const { userId } = useAuth()` from `@clerk/nextjs`            |
| Server Action    | `const { userId } = await auth()` — guard with a throw if null |

Always check for a valid `userId` in Server Actions before touching the database.
