import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: '🍌 Banana',
      color: 'yellow',
    },
    {
      id: 1338,
      name: '🍏 apple',
      color: 'green',
    },
    {
      id: 1339,
      name: '🍍 pineapple',
      color: 'light brown',
    },
    {
      id: 1340,
      name: '🥝 kiwi',
      color: 'brown',
    },
    {
      id: 1341,
      name: '🍇 grapes',
      color: 'red',
    },
  ];

  return (
    <div className="app">
      {fruits.map(fruit => {
        return (
          <Card key={fruit.id} color={fruit.color} name={fruit.name} />
        )
      }
      )}
    </div>
  );


}
