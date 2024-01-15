import { useState, useEffect } from "react";
import Layout from "../../Components/Layout";
import Card from "../../Components/Card";

const Home = () => {

  const [items, setItems] = useState(null);

  useEffect(()=>{
    fetch('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(data => setItems(data))
  },[])
  return (
    <Layout>
      <div className="grid gap-5 grid-cols-4 w-full max-w-screen-xl ">
      {
        items?.map((item)=>{
          return <Card key={item.id} data={item} />
        })
      }
      </div>
    </Layout>
  );
};

export default Home;
