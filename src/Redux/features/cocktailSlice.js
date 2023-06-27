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
    extraReducers:{
        [fetchCocktails.pending]:(state,action)=>{
             state.loading = true;    
        },
        [fetchCocktails.fulfilled]:(state,action)=>{
            state.loading=false;
            state.cocktails=action.payload.drinks;
        },
        [fetchCocktails.rejected]:(state,action)=>{
            state.loading=false;
            state.error= action.payload;
        },

        [fetchCocktail.pending]:(state,action)=>{
            state.loading = true;    
       },
       [fetchCocktail.fulfilled]:(state,action)=>{
           state.loading=false;
           state.cocktail=action.payload.drinks;
       },
       [fetchCocktail.rejected]:(state,action)=>{
           state.loading=false;
           state.error= action.payload;
       },

       [fetchSearchCocktails.pending]:(state,action)=>{
        state.loading = true;    
   },
   [fetchSearchCocktails.fulfilled]:(state,action)=>{
       state.loading=false;
       state.cocktails=action.payload.drinks;
   },
   [fetchSearchCocktails.rejected]:(state,action)=>{
       state.loading=false;
       state.error= action.payload;
   },
    }
})



export default cocktailSlice.reducer;