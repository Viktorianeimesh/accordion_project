const data = [
  {
    id: '1',
    question: "What is JSX?",
    answer: 
    "JSX is a syntax extension of JavaScript. It is used with React to describe what the user interface should look like. By using JSX, we can write HTML structures in the same file that contains JavaScript code.",
  },

  {
    id: '2',
    question: "What is the virtual DOM?",
    answer: 
    "DOM stands for Document Object Model. The DOM represents an HTML document with a logical tree structure. Each branch of the tree ends in a node, and each node contains objects. React keeps a lightweight representation of the real DOM in the memory, and that is known as the virtual DOM. When the state of an object changes, the virtual DOM changes only that object in the real DOM, rather than updating all the objects. The following are some of the most frequently asked react interview questions.",
  },

  {
    id: '3',
    question: "Why is there a need for using keys in Lists?",
    answer: "A key is a unique identifier and it is used to identify which items have changed, been updated or deleted from the lists. It also helps to determine which components need to be re-rendered instead of re-rendering all the components every time. Therefore, it increases performance, as only the updated components are re-rendered.",
  },

  {
    id: '4',
    question: "What are the components in React?",
    answer: "Components are the building blocks of any React application, and a single app usually consists of multiple components. A component is essentially a piece of the user interface. It splits the user interface into independent, reusable parts that can be processed separately."
  },

  { 
    id: '5',
    question: " What is a state in React?",
    answer: "The state is a built-in React object that is used to contain data or information about the component. The state in a component can change over time, and whenever it changes, the component re-renders. The change in state can happen as a response to user action or system-generated events. It determines the behavior of the component and how it will render.",
  },

  {
    id: '6',
    question: "What are props in React?",
    answer: "Props are short for Properties. It is a React built-in object that stores the value of attributes of a tag and works similarly to HTML attributes. Props provide a way to pass data from one component to another component. Props are passed to the component in the same way as arguments are passed in a function.",
  },

  {
    id: '7',
    question: "What is a higher-order component in React?",
    answer: "A higher-order component acts as a container for other components. This helps to keep components simple and enables re-usability. They are generally used when multiple components have to use a common logic.",
  },

  {
    id: '8',
    question: "What are synthetic events in React?",
    answer: "Synthetic events combine the response of different browser's native events into one API, ensuring that the events are consistent across different browsers."
  },
];

export default data;