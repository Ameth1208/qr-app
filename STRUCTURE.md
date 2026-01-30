# Project Structure

This project follows a scalable Next.js application architecture.

## Directory Structure

```
src/
├── app/                    # Next.js App Router
│   ├── actions/            # Server actions
│   ├── r/                  # Dynamic routes (e.g., QR redirection)
│   ├── globals.css         # Global styles
│   └── page.tsx            # Main entry point
├── components/
│   ├── common/             # Reusable generic components
│   ├── features/           # Feature-specific components
│   │   └── qr/             # QR generation feature module
│   │       ├── qr-card.tsx
│   │       ├── qr-form.tsx
│   │       └── qr-generator.tsx
│   ├── layout/             # Layout components (Header, Footer, etc.)
│   └── ui/                 # UI Library components (Shadcn UI)
├── constants/              # Global constants
├── context/                # React Context providers
├── hooks/                  # Custom React hooks
├── lib/                    # Utility functions and library configurations
└── types/                  # TypeScript type definitions
```

## Component Organization

- **Common Components**: Generic components that can be used across different features (e.g., specialized buttons, modals).
- **Feature Components**: Components that are specific to a business feature (e.g., `qr` module).
- **UI Components**: Base UI primitives (buttons, inputs, cards).
- **Layout Components**: Structural components.

## Key Directories

- `src/lib`: Contains `firebase.ts` for database connection and `utils.ts` for helpers.
- `src/app/actions`: Server-side actions for data mutation.
- `src/types`: Shared TypeScript interfaces.
