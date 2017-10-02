
import index from './index.js';



describe('Click Counter', () => {
  it('returns to initial state', () => {
    const initialState = {count: 1}
    const state = (initialState)
    expect(state.count).toEqual(1)
  });


  it('adds one to the state', () => {
    const initialState = {count: 1}
    const state = (initialState)
    expect(state.count + 1).toEqual(2)
  });
})
