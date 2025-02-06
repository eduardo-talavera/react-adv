import { createContext, CSSProperties, ReactElement } from 'react'
import styles from '../styles/styles.module.css'
import { useProduct } from '../hooks/useProduct'
import { ProductContextProps, Product } from '../interfaces/interfaces'

export interface Props {
    product: Product
    children?: ReactElement | ReactElement[]
    className?: string
    style?: CSSProperties
}

export const ProductContext = createContext<ProductContextProps>({} as ProductContextProps)
const { Provider } = ProductContext

export const ProductCard = ({ children, product, className, style }: Props) => {

 const { counter, increaseBy } = useProduct();

  return (
    <Provider value={{
        counter,
        increaseBy,
        product
    }}>
        <div className={ `${styles.productCard} ${className}`} style={style}>
            {children}
        </div>
    </Provider>
  )
}

