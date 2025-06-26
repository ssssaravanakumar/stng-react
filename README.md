# Stng-react

A modern React component library built with TypeScript and styled with Tailwind CSS, featuring beautifully designed and accessible UI components.

## Installation

```bash
npm install stng-react
```

## Requirements

- React 18.0.0 or higher
- React DOM 18.0.0 or higher

## Styling

This library uses **Tailwind CSS** for styling. The compiled CSS is automatically included when you import components, so you don't need to install Tailwind CSS separately in your project unless you want to extend or customize the styles.

If you're already using Tailwind CSS in your project, the components will seamlessly integrate with your existing Tailwind setup.

## Components

### SButton

A flexible button component with multiple variants and sizes, styled with Tailwind CSS.

```tsx
import { SButton } from "stng-react";

function App() {
  return (
    <div>
      <SButton
        variant="primary"
        size="medium"
        onClick={() => console.log("Clicked!")}
      >
        Click me
      </SButton>
      <SButton variant="secondary" size="large">
        Secondary Button
      </SButton>
      <SButton variant="danger" size="small" disabled>
        Disabled Button
      </SButton>
      <SButton variant="success" size="medium">
        Success Button
      </SButton>
    </div>
  );
}
```

#### Props

- `children`: React.ReactNode - Button content
- `variant`: 'primary' | 'secondary' | 'danger' | 'success' - Button style variant
- `size`: 'small' | 'medium' | 'large' - Button size
- `disabled`: boolean - Whether the button is disabled
- `onClick`: (event: React.MouseEvent<HTMLButtonElement>) => void - Click handler
- `type`: 'button' | 'submit' | 'reset' - Button type
- `className`: string - Additional Tailwind CSS classes

### SCard

A versatile card component for displaying content in a structured layout, built with Tailwind CSS utility classes.

```tsx
import { SCard } from "stng-react";

function App() {
  return (
    <div>
      <SCard
        title="Card Title"
        subtitle="Card subtitle"
        variant="elevated"
        padding="medium"
      >
        <p>This is the card content.</p>
      </SCard>

      <SCard
        variant="outlined"
        padding="large"
        header={<div>Custom Header</div>}
        footer={<div>Custom Footer</div>}
      >
        <p>Card with custom header and footer.</p>
      </SCard>
    </div>
  );
}
```

#### Props

- `children`: React.ReactNode - Card content
- `title`: string - Card title
- `subtitle`: string - Card subtitle
- `variant`: 'default' | 'outlined' | 'elevated' - Card style variant
- `padding`: 'none' | 'small' | 'medium' | 'large' - Card padding
- `className`: string - Additional Tailwind CSS classes
- `onClick`: (event: React.MouseEvent<HTMLDivElement>) => void - Click handler
- `header`: React.ReactNode - Custom header content
- `footer`: React.ReactNode - Custom footer content

## Customization

Since the components are built with Tailwind CSS, you can easily customize them by:

1. **Adding custom classes**: Use the `className` prop to add additional Tailwind classes
2. **Extending with your own Tailwind config**: If you're using Tailwind in your project, you can extend the default theme
3. **CSS-in-JS integration**: The Tailwind classes work well with CSS-in-JS libraries

Example of customization:

```tsx
<SButton
  variant="primary"
  className="shadow-xl transform hover:scale-105 transition-transform"
>
  Custom Styled Button
</SButton>
```

## TypeScript Support

This library is built with TypeScript and includes complete type definitions for all components and their props.

## License

MIT
