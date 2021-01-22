import {TodoItem} from '../models/todo-item.model'
import {TodoAction, TodoActionTypes} from '../actions/todo.actions'

export interface TodoState {
    list: TodoItem[],
    loading: boolean,
    error: Error
  }
  
  const initialState: TodoState = {
    list: [],
    loading: false,
    error: undefined
  };

export function TodoReducer(state: TodoState = initialState, action : TodoAction){
    switch (action.type){
        //Load Item
        case TodoActionTypes.LOAD_ITEM:
            return {...state,loading: true}
        case TodoActionTypes.LOAD_ITEM_SUCCESS:
            return {...state,list: action.payload,loading: false }
         case TodoActionTypes.LOAD_ITEM_FAILURE: 
            return {...state, error: action.payload,loading: false}
        //Add Item
        case TodoActionTypes.ADD_ITEM:
            return {...state,loading: true}    
        case TodoActionTypes.ADD_ITEM_SUCCESS:
            return{...state,
                list: [...state.list,action.payload ],
                    loading: false
                };
        case TodoActionTypes.ADD_ITEM_FAILURE:
            return {...state,error: action.payload,loading: false};
        // Delete Item
        case TodoActionTypes.DELETE_ITEM:
            return {...state,loading: true};    
        case TodoActionTypes.DELETE_ITEM_SUCCESS:
            return {...state,list: state.list.filter(item => item.id !== action.payload), loading:false};
        case TodoActionTypes.DELETE_ITEM_FAILURE:
            return {...state, error: action.payload,loading: false};

        default:
            return state;
    }
}