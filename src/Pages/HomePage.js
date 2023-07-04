import React, { useEffect,useState } from 'react'
import Layout from './../Components/Layout' ;
import { useDispatch,useSelector } from 'react-redux';
import { fetchCocktails } from '../Redux/features/cocktailSlice';
import SpinnerAnim from '../Components/shared/SpinnerAnim';
import { Link } from 'react-router-dom';
const HomePage = () => {
  const {loading,cocktails,error}=useSelector(state=>({...state.app}));
  const dispatch = useDispatch();
  const [modifiedCocktails,setmodifiedCocktails]=useState([]);
  useEffect(()=>{
  dispatch(fetchCocktails());
  },[dispatch]);

  useEffect(()=>{
    console.log(cocktails);
  if(cocktails){
    const newCocktails = cocktails.map((item)=>{
      const {idDrink,strAlcoholic,strDrinkThumb,strGlass,strDrink}=item;
      return(
        {
          id:idDrink,
          name:strDrink,
          img:strDrinkThumb,
          info:strAlcoholic,
          glass:strGlass
        }
      )
    })
    setmodifiedCocktails(newCocktails);
  }else{
  setmodifiedCocktails([]);
  }
  },[cocktails])

  if(loading){
    return<h1>{<SpinnerAnim/>}</h1> 
  }
  if(!cocktails){
    return <Layout><h2>No Cocktail Found with this name</h2></Layout>
  }
  if(error){
    return<p>{error.message}</p>
  }
  return ( 
    <>
    <div className='container '>
      <div className='row  row-cols-1 row-cols-sm-2 row-cols-md-4'>
             {
              modifiedCocktails.map((item)=>{
                return(
          <div className="col -md-3 mt-2  " key={item.id}>
  <div className="card" style={{width: '15rem'}}>
    <img src={item.img} className="card-img-top" alt={item.name} />
    <div className="card-body ">
      <h5 className="card-title text-success">{item.name}</h5>
      <h5 className="card-title text-success">{item.glass}</h5>
      <p className="card-text text-success">{item.info}</p>
      <Link to={`/products/${item.id}`} className="btn btn-success">Details</Link>
    </div>
  </div>
</div>

                  
                )
              })
             }
      </div>
    </div>
    </>
  )
}

export default HomePage