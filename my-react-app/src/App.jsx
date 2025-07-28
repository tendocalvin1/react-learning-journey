import Header from './Header.jsx';
import Footer from './Footer.jsx';
import Food from './Food.jsx';
import Card from './Card.jsx';
import HelloWorld from './HelloWorld.jsx';
import MyInfo from './MyInfo.jsx';
import FavouriteFoods from './FavouriteFoods.jsx';
import QuoteCard from './QuoteCard.jsx';
import GalleryCard from './GalleryCard.jsx';
import Hobbies from './Hobbies.jsx';
import Button from './Button/Button.jsx';
import Students from './Students.jsx';



function App() {

  return(
    <>
    <Header></Header>
    <Food></Food>
    <Button></Button>
    <QuoteCard></QuoteCard>
    <FavouriteFoods></FavouriteFoods>
    <HelloWorld></HelloWorld>
    <Hobbies></Hobbies>
    <GalleryCard></GalleryCard>
    <Hobbies></Hobbies>
    <MyInfo></MyInfo>
    <Students name ='Tendo Calvin' age={23} isStudent ={true}></Students>
    <Students name ='Daniel Agger' age={40} isStudent ={false}></Students>
    <Students name ='Todd Boehly' age={46} isStudent ={true}></Students>
    <Students name ='Todd'></Students>
    <Card></Card>
    <Card></Card>
    <Card></Card>
    <Footer></Footer>

    </>
  );
   
}

export default App
