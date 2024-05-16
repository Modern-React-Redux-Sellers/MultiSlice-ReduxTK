import {createSlice, nanoid} from "@reduxjs/toolkit";

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        searchTerm: '',
        cars: []
    },
    reducers: {
        changeSearchTerm(state, action){
            state.searchTerm = action.payload;
        },
        //action.payload should be an object with name and cost attributes
        // action.payload === {name: 'abc', cost:100}
        addCar(state, action){
            state.cars.push({
                name: action.payload.name,
                cost: action.payload.cost,
                id: nanoid()
            })
        },
        //action.payload === ID of car to remove
        removeCar(state, action){
            const updated = state.cars.filter((car) => {
                return car.id != action.payload;
            })
            state.cars = updated;
        }
    }
})

export const {changeSearchTerm, addCar, removeCar} = carsSlice.actions;
export const carsReducer = carsSlice.reducer;