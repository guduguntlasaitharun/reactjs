import { productReducer } from './Product/product.reducer'
import { CreateStore } from 'redux'
import { composeWithDevTools } from '@redux-devtools/extension'
let store = CreateStore(productReducer, composeWithDevTools())

export { store }