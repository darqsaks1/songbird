import {
    SET_TO_1,
    SET_TO_2,
    SET_TO_3,
    SET_TO_4,
    SET_TO_5,
    SET_TO_6,
    SET_TO_1_FALSE,
    SET_TO_2_FALSE,
    SET_TO_3_FALSE,
    SET_TO_4_FALSE,
    SET_TO_5_FALSE,
    SET_TO_6_FALSE,
    SET_TO_NULL,
} from '../actions/actions-types';

const initialState = {
    li_first: null,
    li_second: null,
    li_third: null,
    li_four: null,
    li_five: null,
    li_six: null
};

const liReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TO_1:
            return {
                ...state,
                li_first: true,
            };
        case SET_TO_2:
            return {
                ...state,
                li_second: true,
            };

        case SET_TO_3:
            return {
                ...state,
                li_third: true,
            };

        case SET_TO_4:
            return {
                ...state,
                li_four: true,
            };

        case SET_TO_5:
            return {
                ...state,
                li_five: true,
            };

        case SET_TO_6:
            return {
                ...state,
                li_six: true,
            };
        case SET_TO_1_FALSE:
            return {
                ...state,
                li_first: false,
            };
        case SET_TO_2_FALSE:
            return {
                ...state,
                li_second: false,
            };
        case SET_TO_3_FALSE:
            return {
                ...state,
                li_third: false,
            };
        case SET_TO_4_FALSE:
            return {
                ...state,
                li_four: false,
            };
        case SET_TO_5_FALSE:
            return {
                ...state,
                li_five: false,
            };
        case SET_TO_6_FALSE:
            return {
                ...state,
                li_six: false,
            };
        case SET_TO_NULL:
            return {
                ...state,
                li_first: null,
                li_second: null,
                li_third: null,
                li_four: null,
                li_five: null,
                li_six: null
            };
        default:
            return state;
    }
};

export default liReducer;
