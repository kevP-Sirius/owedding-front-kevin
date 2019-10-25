let listID = 2;
let tableID = 1;

const initialState = [
  {
    id: `list-${1}`,
    guests: [],
  },
];

const ADD_LIST = 'ADD_LIST';
const DRAG_HAPENNED = 'DRAG_HAPENNED';
const GUEST_TABLE_PLAN = 'GUEST_TABLE_PLAN';

const listReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_LIST: {
      const newList = {
        id: `list-${listID}`,
        title: `Table ${tableID}`,
        guests: [],        
      };
      listID += 1;
      tableID += 1;
      return [
        ...state,
        newList,
      ];
    }
    case GUEST_TABLE_PLAN: {
      const newList = {
        id: `list-${1}`,
        title: 'Votre liste',
        guests: action.project.guests,        
      };
      state.splice(0, 1, newList);
      
      return [
        ...state,          
      ]; 
    }
    case DRAG_HAPENNED: {
      console.log('drag_hapenned');
      const {
        droppableIdStart,
        droppableIdEnd,
        droppableIndexStart,
        droppableIndexEnd,
        draggableId,
      } = action.payload;
      const newState = [...state];
      if(droppableIdStart !== droppableIdEnd) {
        console.log('another list');

        const listStart = state.find(list => droppableIdStart === list.id);
        const guest = listStart.guests.splice(droppableIndexStart, 1);
        const listEnd = state.find(list => droppableIdEnd === list.id);
        listEnd.guests.splice(droppableIndexEnd, 0, ...guest);
      };
      if(droppableIdStart === droppableIdEnd) {
        console.log('same list');
        const list = state.find(list => droppableIdStart === list.id);
        const guest = list.guests.splice(droppableIndexStart, 1);
        console.log(list, guest);
        list.guests.splice(droppableIndexEnd, 0, ...guest)
      };
     
      return newState;
    }
     

    default:
      return state;
  }
};

export const addList = () => ({
  type: ADD_LIST,
});
export const sort = (
  droppableIdStart,
  droppableIdEnd,
  droppableIndexStart,
  droppableIndexEnd,
  draggableId,
) => ({
  type: DRAG_HAPENNED,
  payload: {
    droppableIdStart,
    droppableIdEnd,
    droppableIndexStart,
    droppableIndexEnd,
    draggableId,
  },
});
export const guestsTable = (project) => ({
  type: GUEST_TABLE_PLAN,
  project,
});

export default listReducer;