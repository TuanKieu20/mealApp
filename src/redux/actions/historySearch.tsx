import { useDispatch } from 'react-redux';
import {
  ADD_HISTORY_SEARCH, 
  REMOVE_ALL, 
  REMOVE_HISTORY_SEARCH, 
  ADD_HISTORY_ITEM_SEARCH, 
  REMOVE_ALL_ITEM_HISTORY,
  ADD_ITEM_FAVORITE,
  REMOVE_ITEM_FAVORITE,
  FIND_ITEM_BY_CATEGORY
} from '../reducers/mealReducer';
import {AppDispatch, store} from '../store';


export const addHistoryItemSearch =
  (history: string) =>  (dispatch: AppDispatch) => {
    try {
      if (history.trim() == null || history.trim()=='') {
        console.log('null');
      } else {
        dispatch({
          type: ADD_HISTORY_ITEM_SEARCH,
          history: history
        });
      }
      
    } catch (error) {
      console.log('addHistorySearch:', error);
    }
};

export const removeAllHistory = () =>(dispatch:AppDispatch)=>{
  try {
    dispatch({
      type: REMOVE_ALL,
    })
  } catch (error) {
    console.log('removeAllHistory:', error);
  }
}
export const removeAllItemHistory = () =>(dispatch:AppDispatch)=>{
  try {
    dispatch({
      type: REMOVE_ALL_ITEM_HISTORY,
    })
  } catch (error) {
    console.log('removeAllHistory:', error);
  }
}

export const addHistorySearch =
  (history: string) =>  (dispatch: AppDispatch) => {
    try {
      if (history.trim() == null || history.trim()=='') {
        console.log('null');
      } else {
        dispatch({
          type: ADD_HISTORY_SEARCH,
          history: history,
        });
      }
      
    } catch (error) {
      console.log('addHistorySearch:', error);
    }
};

export const removeHistorySearch = (index:number) => (dispatch:AppDispatch)=>{
  try {
    dispatch({
      type:REMOVE_HISTORY_SEARCH,
      indexHistory: index
    });
  } catch (error) {
    console.log('removeHistorySearch:', error);
  }
}

export const addItemFavorite = (item:any) => (dispatch:AppDispatch) => {
  try {
    dispatch({
      type: ADD_ITEM_FAVORITE,
      item: item
    })
  } catch (error) {
    console.log('addItemFavorite:', error);
  }
}
export const removeItemFavorite = (item:any) => (dispatch:AppDispatch) => {
  try {
    dispatch({
      type: REMOVE_ITEM_FAVORITE,
      item: item
    })
  } catch (error) {
    console.log('addItemFavorite:', error);
  }
}

export const findItemByCategory = (category:any) =>(dispatch:AppDispatch) => {
  try {
    dispatch({
      type: FIND_ITEM_BY_CATEGORY,
      category: category
    })
  } catch (error) {
    console.log('findItemByCategory:', error);
    
  }
}
