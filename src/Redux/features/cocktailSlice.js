import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

export const fetchCocktails = createAsyncThunk('cocktails/fetchCocktails', async ()=>{
       
    return fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=').then((res)=>res.json())
})


export const fetchCocktail = createAsyncThunk('cocktails/fetchCocktail', async ({id})=>{
       
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then((res)=>res.json())
})


export const fetchSearchCocktails = createAsyncThunk('cocktails/fetchSearchCocktails', async ({searchText})=>{
       
    return fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchText}
    `).then((res)=>res.json())
})

const cocktailSlice = createSlice({
    name:'cocktails',
    initialState:{
      loading:false,
      cocktails:[],
      error:null,
      cocktail:[]
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchCocktails.pending,(state,action)=>{
             state.loading = true;    
        })
        .addCase(fetchCocktails.fulfilled,(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks;
        })
        .addCase(fetchCocktails.rejected,(state,action)=>{
            state.loading=false;
            state.error= action.payload;
        })

        .addCase(fetchCocktail.pending,(state,action)=>{
            state.loading = true;    
       })
       .addCase(fetchCocktail.fulfilled,(state,action)=>{
           state.loading=false;
           state.cocktail=action.payload.drinks;
       })
       .addCase(fetchCocktail.rejected,(state,action)=>{
           state.loading=false;
           state.error= action.payload;
       })

       .addCase(fetchSearchCocktails.pending,(state,action)=>{
        state.loading = true;    
   })
   .addCase(fetchSearchCocktails.fulfilled,(state,action)=>{
       state.loading=false;
       state.cocktails=action.payload.drinks;
   })
   .addCase(fetchSearchCocktails.rejected,(state,action)=>{
       state.loading=false;
       state.error= action.payload;
   })
    }
})



export default cocktailSlice.reducer;