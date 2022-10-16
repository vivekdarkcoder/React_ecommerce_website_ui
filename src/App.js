
import './App.css';
import {
  Routes,
  Route,
} from "react-router-dom";
import Home from "./pages/Home"
import ClothCategory from "./pages/ClothCategory";
import Navbar from './Component/Navbar';
import Footer from "./Component/Footer";
import UpperWear from './Component/UpperWear';
import LowerWear from './Component/LowerWear';
import MiddlWear from './Component/MiddlWear';
import ClothItems from './pages/ClothItems';
function App() {
  const divStyle = {
    marginTop:"55px",
    paddingBottom:"20px",
    height:"100%",  
    // background:"linear-gradient(0deg,red,white)",
  };
  const ManUpperType={
    shirt: "shirt",tshirt:"T-shirt",jeans:"jeans",shoes:"shoes"
  }
  const WomenUpperType={
    Top: "Top",Kurti:"Kurti",Lahenga:"Lahenga"
  }
  const ManMiddleType={
    Paints: "Paints",Jeans:"Jeans",Lower:"Lower"
  }
  const WomenMiddleType={
    Jeans: "Jeans",Laggies:"Laggies",
  }
  const ManLowerType={
    shoes: "shoes",slipper:"slipper",Sandles:"Sandles"
  }
  const WomenLowerType={
    Sandles: "Sandles",Juties:"Juties",Shoes:"Shoes"
  }
  const ManUpperWear="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwlmNctSA80308duwixakaGCyrBYfVKlQ7T13SaKgsa6BDZ8vb3wix5EJVGrk1bCJ6LRA&usqp=CAU"
  const ManLowerWear="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnOOPf0G0M8GU2aqY2JOA0O6bBftCqzjYB7A&usqp=CAU"
  const ManBottomWear="https://woocommerce.com/wp-content/uploads/2012/08/wooslider-product-slideshow-preview.png"
  const WomenUpperWear="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTS7-RTi6D4hOZBrCm5YYgA8DVrFTEvN1BCpA&usqp=CAU"
  const WomenLowerWear="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvBODAffOAiecLqZkex47izpXgwNtBq9b5rQ&usqp=CAU"
  const WomenBottomWear="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRbPHErylZ09XUNuqr9UrTiD-b6UW3XYna4xg&usqp=CAU"
  return (
    <div>
       <Navbar />
      <div style={divStyle}>
        
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/ClothCategoryMen" element={<ClothCategory img={{UpperWear:ManUpperWear,MiddleWear:ManLowerWear,LowerWear:ManBottomWear}} Name={"Man"}/>} />
          <Route exact path="/ClothCategoryWomen" element={<ClothCategory img={{UpperWear:WomenUpperWear,MiddleWear:WomenLowerWear,LowerWear:WomenBottomWear}} Name={"Women"}/>} />
          <Route exact path="/Clothcategory/Man/UpperWear" element={<UpperWear type={ManUpperType}  Name="Man"/>}/>
          <Route exact path="/Clothcategory/Man/LowerWear" element={<LowerWear  type={ManLowerType} Name="Man"/>}/>
          <Route exact path="/Clothcategory/Man/MiddleWear" element={<MiddlWear   type={ManMiddleType }Name="Man"/>}/>
          <Route exact path="/Clothcategory/Women/UpperWear"   element={<UpperWear type={WomenUpperType}  Name={"Women"}/>}/>
          <Route exact path="/Clothcategory/Women/LowerWear"  element={<LowerWear type={WomenLowerType} Name={"Women"}/>}/>
          <Route exact path="/Clothcategory/Women/MiddleWear" element={<MiddlWear type={WomenMiddleType}  Name={"Women"}/>}/>
          <Route exact path="/Clothcategory/Man/:slug" element={<ClothItems/>}/>
          <Route exact path="/Clothcategory/Women/:slug" element={<ClothItems/>}/>
        </Routes>
      </div>
      <Footer/>

    </div>
  );
}

export default App;
