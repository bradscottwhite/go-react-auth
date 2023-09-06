const Home = ({ name }: { name: string }) => {
  return (
    <div>
      {name ? 'Hi ' + name : 'You are not logged in'}
    </div>
  );
};

export default Home;
