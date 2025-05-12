
export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content: string;
  coverImage: string;
  author: {
    name: string;
    avatar: string;
  };
  publishedAt: string;
  featured: boolean;
  tags: string[];
}

export const posts: Post[] = [
  {
    id: '1',
    title: 'Getting Started with React and TypeScript',
    slug: 'getting-started-with-react-and-typescript',
    excerpt: 'Learn how to set up a new React project with TypeScript and build your first component.',
    content: `
# Getting Started with React and TypeScript

React is a popular JavaScript library for building user interfaces, and TypeScript is a typed superset of JavaScript that compiles to plain JavaScript. Together, they provide a powerful combination for building robust web applications.

## Setting up a new project

To get started with React and TypeScript, you can use Create React App with the TypeScript template:

\`\`\`bash
npx create-react-app my-app --template typescript
\`\`\`

This will create a new React project with TypeScript already configured.

## Creating your first component

Let's create a simple component in TypeScript:

\`\`\`tsx
interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h1>Hello, {name}!</h1>;
};

export default Greeting;
\`\`\`

## Type checking

One of the benefits of TypeScript is that it can catch errors at compile time:

\`\`\`tsx
// This will cause a TypeScript error because 'age' is not in GreetingProps
<Greeting name="John" age={30} />
\`\`\`

## Conclusion

Using React with TypeScript can help you build more robust applications by catching errors earlier in the development process. It also provides better editor support with features like autocompletion and inline documentation.
`,
    coverImage: 'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: {
      name: 'Jane Smith',
      avatar: 'https://randomuser.me/api/portraits/women/17.jpg'
    },
    publishedAt: '2025-05-01T12:00:00Z',
    featured: true,
    tags: ['React', 'TypeScript', 'Frontend']
  },
  {
    id: '2',
    title: 'Mastering CSS Grid Layout',
    slug: 'mastering-css-grid-layout',
    excerpt: 'Learn how to use CSS Grid to create complex layouts with ease.',
    content: `
# Mastering CSS Grid Layout

CSS Grid Layout is a powerful tool for creating two-dimensional layouts in CSS. It allows you to create complex layouts with rows and columns, without having to resort to hacks like floats or positioning.

## Basic Concepts

To create a grid container, you use \`display: grid\`:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;
}
\`\`\`

This creates a grid with three equal-width columns and automatically sized rows, with a 20px gap between items.

## Placing Items

You can place items in the grid using the \`grid-column\` and \`grid-row\` properties:

\`\`\`css
.item {
  grid-column: 1 / 3; /* Start at column line 1, end at column line 3 */
  grid-row: 2 / 3; /* Start at row line 2, end at row line 3 */
}
\`\`\`

## Responsive Grids

CSS Grid makes it easy to create responsive layouts:

\`\`\`css
.container {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
}
\`\`\`

This creates as many columns as will fit, each with a minimum width of 250px and maximum of 1fr.

## Conclusion

CSS Grid Layout is a powerful tool for creating complex layouts with ease. With its ability to control both rows and columns, it's a great choice for many types of layouts.
`,
    coverImage: 'https://images.unsplash.com/photo-1517134191118-9d595e4c8c2b?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: {
      name: 'John Doe',
      avatar: 'https://randomuser.me/api/portraits/men/32.jpg'
    },
    publishedAt: '2025-04-28T10:30:00Z',
    featured: false,
    tags: ['CSS', 'Web Design', 'Frontend']
  },
  {
    id: '3',
    title: 'Introduction to State Management with Redux',
    slug: 'introduction-to-state-management-with-redux',
    excerpt: 'Learn how to manage state in your React applications using Redux.',
    content: `
# Introduction to State Management with Redux

Redux is a predictable state container for JavaScript apps. It helps you write applications that behave consistently, run in different environments, and are easy to test.

## Core Concepts

Redux has three core concepts:

1. **Store**: Holds the state of your application
2. **Actions**: Describe what happened
3. **Reducers**: Describe how the state changes in response to actions

## Setting Up Redux

First, install Redux and React Redux:

\`\`\`bash
npm install redux react-redux
\`\`\`

Then, create a store:

\`\`\`js
import { createStore } from 'redux';

function counterReducer(state = { count: 0 }, action) {
  switch (action.type) {
    case 'INCREMENT':
      return { count: state.count + 1 };
    case 'DECREMENT':
      return { count: state.count - 1 };
    default:
      return state;
  }
}

const store = createStore(counterReducer);
\`\`\`

## Using Redux with React

To use Redux with React, you wrap your app with a `Provider` and use the `connect` function to connect components to the store:

\`\`\`jsx
import { Provider, connect } from 'react-redux';

function Counter({ count, increment, decrement }) {
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </div>
  );
}

const mapStateToProps = state => ({ count: state.count });
const mapDispatchToProps = dispatch => ({
  increment: () => dispatch({ type: 'INCREMENT' }),
  decrement: () => dispatch({ type: 'DECREMENT' })
});

const ConnectedCounter = connect(mapStateToProps, mapDispatchToProps)(Counter);

function App() {
  return (
    <Provider store={store}>
      <ConnectedCounter />
    </Provider>
  );
}
\`\`\`

## Conclusion

Redux is a powerful tool for managing state in complex applications. While it adds some boilerplate, it makes your application more predictable and easier to debug.
`,
    coverImage: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: {
      name: 'Sarah Johnson',
      avatar: 'https://randomuser.me/api/portraits/women/44.jpg'
    },
    publishedAt: '2025-04-25T15:45:00Z',
    featured: true,
    tags: ['React', 'Redux', 'State Management']
  },
  {
    id: '4',
    title: 'Building Responsive Websites with Tailwind CSS',
    slug: 'building-responsive-websites-with-tailwind-css',
    excerpt: 'Learn how to use Tailwind CSS to create responsive designs quickly and efficiently.',
    content: `
# Building Responsive Websites with Tailwind CSS

Tailwind CSS is a utility-first CSS framework that allows you to build custom designs without leaving your HTML. It's incredibly flexible and can be customized to match any design.

## Getting Started

First, install Tailwind CSS:

\`\`\`bash
npm install tailwindcss
\`\`\`

Then, create a configuration file:

\`\`\`bash
npx tailwindcss init
\`\`\`

## Utility-First Approach

Tailwind uses a utility-first approach, where you apply small, single-purpose classes directly in your HTML:

\`\`\`html
<div class="p-4 bg-blue-500 text-white rounded">
  This is a blue box with white text.
</div>
\`\`\`

## Responsive Design

Tailwind makes responsive design easy with built-in breakpoints:

\`\`\`html
<div class="text-sm md:text-base lg:text-lg">
  This text changes size at different breakpoints.
</div>
\`\`\`

## Customization

Tailwind is highly customizable through the configuration file:

\`\`\`js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'brand': '#ff6b6b',
      },
    },
  },
  variants: {},
  plugins: [],
}
\`\`\`

## Conclusion

Tailwind CSS is a powerful tool for building responsive websites quickly and efficiently. Its utility-first approach might seem verbose at first, but it leads to more maintainable and consistent designs in the long run.
`,
    coverImage: 'https://images.unsplash.com/photo-1540496905036-5937c10647cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80',
    author: {
      name: 'Michael Chen',
      avatar: 'https://randomuser.me/api/portraits/men/5.jpg'
    },
    publishedAt: '2025-04-22T09:15:00Z',
    featured: false,
    tags: ['CSS', 'Tailwind', 'Responsive Design']
  }
];

export const getPostBySlug = (slug: string): Post | undefined => {
  return posts.find(post => post.slug === slug);
};

export const getFeaturedPosts = (): Post[] => {
  return posts.filter(post => post.featured);
};

export const getLatestPosts = (limit: number = 3): Post[] => {
  return [...posts]
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())
    .slice(0, limit);
};
