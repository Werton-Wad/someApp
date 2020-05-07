const initialTech = [
  {
    id: 1,
    title: 'Телефон iPhone SE2',
    price: 100,
  },
  {
    id: 2,
    title: 'Телевизор Samsung',
    price: 500,
  },
  {
    id: 3,
    title: 'Приставка PS5',
    price: 400,
  }
];

const initialState = {
  tech: initialTech,
};

const techReducer = (state = initialState, action) => {

  let tech;

  switch (action.type) {
    case 'DELETE_TECH':
      tech = state.tech.filter(it => it.id !== action.payload);

      return { ...state, tech: tech };

    case 'ADD_TECH_TO_FAVORITE':
      tech = state.tech.map(item => {
        if (item.id !== action.payload) {
          return item;
        }

        return { ...item, favorite: true };
      });

      return { ...state, tech: tech };

    default:
      return state;
  }
  
}

export default techReducer;
