import {MEALS} from "../../constants/dataFake"


export const RANDOM_MEAL_SUGGEST = "RANDOM_MEAL_SUGGEST";
export const ADD_HISTORY_SEARCH = "ADD_HISTORY_SEARCH";
export const ADD_HISTORY_ITEM_SEARCH = "ADD_HISTORY_ITEM_SEARCH";
export const REMOVE_ALL = "REMOVE_ALL";
export const REMOVE_HISTORY_SEARCH = "REMOVE_HISTORY_SEARCH";
export const REMOVE_ALL_ITEM_HISTORY = "REMOVE_ALL_ITEM_HISTORY";
export const ADD_ITEM_FAVORITE = "ADD_ITEM_FAVORITE";
export const REMOVE_ITEM_FAVORITE = "REMOVE_ITEM_FAVORITE";
export const FIND_ITEM_BY_CATEGORY = "FIND_ITEM_BY_CATEGORY";


const initState = {
    initMeals: MEALS,
    meals:MEALS,
    historySearch: [],
    itemSearch: [],
    itemFavorite: []
}

type TyePayload = {
    type: String,
    meals: Array<Object>,
    history: String
    // itemSearch: [],
    item: any,
    indexHistory:number,
    category:String
}

export default function actionForReducer(state=initState, payload:TyePayload){
    switch(payload.type){
        case RANDOM_MEAL_SUGGEST:
            return {
                ...state,
                meals:payload.meals
            }
        case ADD_HISTORY_SEARCH:
            return {
                ...state,
                historySearch:[...state.historySearch, payload.history],
                // itemHistory: payload.itemSearch
            }
        case ADD_HISTORY_ITEM_SEARCH:
            let result:any = []; 
            state.initMeals.map(item=>{
            if((item['title'] as String).toLowerCase().includes(payload.history.trim().toLowerCase())){
                result.push(item);
            }
            });
                return {
                    ...state,
                    itemSearch: result
                }
        case REMOVE_ALL:
            return {
                ...state,
                historySearch:[]
            }
        case REMOVE_HISTORY_SEARCH:
            if(payload.indexHistory!==-1){
                state.historySearch.splice(payload.indexHistory, 1);
            }
            return {
                ...state,
                historySearch: state.historySearch,
            }
        case REMOVE_ALL_ITEM_HISTORY:
            return {
                ...state,
                itemSearch: []
            }
        case ADD_ITEM_FAVORITE:
            return {
                ...state,
                itemFavorite: [...state.itemFavorite, payload.item]
            }
        case REMOVE_ITEM_FAVORITE:
            const indexItem = state.itemFavorite.findIndex((e:any)=>{
                return e.id===payload.item.id;
            });
            if(indexItem!==-1){
                state.itemFavorite.splice(indexItem, 1);
            }
                return {
                    ...state,
                    itemFavorite: state.itemFavorite
            }
        case FIND_ITEM_BY_CATEGORY:
            let listTemp:any = []; 
            state.initMeals.map(item=>{
            if((item['category'].name as String).toLowerCase().includes(payload.category.trim().toLowerCase())){
                listTemp.push(item);
            }
            });
                return {
                    ...state,
                    itemSearch: listTemp
                }
        default:
            return state;
    }
}