
import HomePage from '@/Components/Home/HomePage';


export default function Home() {
  return (
    <HomePage/>
  );
}

export async function getStaticProps(){

  const dummyData =[
    {
      id : 'm1',
      taskname : 'Gym',
      description : 'must go gym'
    }
  ]

  return{
    props : {
      dummyData,
    },
  }
}

