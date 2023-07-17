import {RANDOM_MEAL_SUGGEST} from "../reducers/mealReducer"

export const randomMeal = (meals:[]) => async (dispatch: any) => {
    try {
        const getRandomElements = (array: any, n: any) => {
            const shuffled = array.sort(() => 0.5 - Math.random());
            return shuffled.slice(0, n);
          };
          dispatch({
            type: RANDOM_MEAL_SUGGEST,
            meals: getRandomElements(meals, 10)
          });
        
    } catch (error) {
        console.log('addHistorySearch:', error);
    }
}