import React, { useEffect, useState } from 'react'
import Layout from '../Components/Layout'
import { fetchCocktail } from '../Redux/features/cocktailSlice';
import { useSelector,useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import SpinnerAnim from '../Components/shared/SpinnerAnim';
const ProductDetails = () => {
  const [modifiedCocktail , setmodifiedCocktail]=useState();
  const {loading,cocktail}=useSelector(state=>({...state.app}));
  const dispatch = useDispatch();
  const {id} = useParams();
  useEffect(()=>{
   
          dispatch(fetchCocktail({id})); 
  },[id,dispatch])
  useEffect(()=>{
   if(cocktail.length > 0){
     const {
      strDrink:name,
      strCategory:category,
      strAlcoholic:info,
      strGlass:glass,
      strDrinkThumb:img,
      strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5
    }=cocktail[0];
      const ingredients =[strIngredient1,strIngredient2,strIngredient3,strIngredient4,strIngredient5]
      const newCocktail = {name,category,info,glass,img,ingredients};
      setmodifiedCocktail(newCocktail);
   }else{
     setmodifiedCocktail([]);
   }
  },[id,cocktail]);

  if(!modifiedCocktail){
    return <h2>No Cocktail Found</h2>
  }else{
    const {name,category,info,glass,img,ingredients}=modifiedCocktail;
    return(
       <>
       {loading?(<SpinnerAnim/>):(
        <Layout>
          <div className='container mt-4'>
              <Link to='/' className='btn btn-info'>Go Back</Link>
              <div className='row mt-4'>
                <div className='col-md-5'>
                  <img src={img} alt={name} height={300} width={300}></img>
                </div>
                <div className='col-md-5'>
                    <h2>Name: {name}</h2>
                    <p className='mt-1'>category: {category}</p>
                    <p>Info : {info}</p>
                    <p>Glass : {glass}</p>
                    <p>Ingredients : {ingredients + ","}</p>
                </div>
              </div>
          </div>
        </Layout>
       )
       }
       </>
    );
  }
 
}

export default ProductDetails