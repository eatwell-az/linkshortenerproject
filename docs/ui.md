# UI — shadcn/ui Standards

## Rules

1. **Use shadcn/ui for all UI elements.** Never build custom components from scratch when a shadcn/ui component exists.
2. **Never create custom component primitives.** Buttons, inputs, dialogs, cards, badges, tables, etc. must all come from shadcn/ui.
3. **Install components via CLI.** Add new components with `npx shadcn@latest add <component>` — do not hand-write them.
4. **Components live in `@/components/ui/`.** Do not move or rename generated files.
5. **Compose, don't replace.** Wrap or extend shadcn/ui components rather than reimplementing their internals.
6. **Use `cn()` for all conditional class names.** Import from `@/lib/utils`.

---

## Project Config (`components.json`)

| Setting        | Value             |
| -------------- | ----------------- |
| Style          | `new-york`        |
| Base color     | `neutral`         |
| CSS variables  | enabled           |
| Icon library   | `lucide`          |
| RSC support    | `true`            |
| Component path | `@/components/ui` |
| Utils path     | `@/lib/utils`     |

---

## Usage Pattern

```tsx
// Good — use shadcn/ui primitives
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

// Bad — custom primitive
const MyButton = ({ children }) => <button className='...'>{children}</button>;
```

---

## Icons

Use `lucide-react` for all icons (configured as the project icon library).

```tsx
import { Link2, Copy, Trash2 } from 'lucide-react';
```

---

## Available Component Reference

Browse all available components at [ui.shadcn.com/components](https://ui.shadcn.com/components). Common ones used in this project:

- `Button`, `Input`, `Label` — form controls
- `Card`, `CardHeader`, `CardContent`, `CardFooter` — layout containers
- `Dialog`, `DialogTrigger`, `DialogContent` — modals
- `Table`, `TableHeader`, `TableBody`, `TableRow`, `TableCell` — data tables
- `Badge` — status/tag labels
- `Tooltip`, `TooltipProvider` — contextual hints
- `Sonner` (via `sonner`) — toast notifications
