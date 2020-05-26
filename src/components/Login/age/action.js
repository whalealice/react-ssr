export const GET_AGE = 'index => get age';

export const exchangeAge = count => (
    {
        type: GET_AGE,
        payload: count
    }
)
