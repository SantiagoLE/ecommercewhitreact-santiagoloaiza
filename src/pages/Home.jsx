import { useSelector } from 'react-redux'
import CardProduct from '../components/CardProduct'
import "./styles/home.css"

const Home = () => {
    const {productsGlobal} = useSelector(state => state)

    return (
      <div className='cardProducts-cotain'>
          {
              productsGlobal?.map(prod => (

                  <CardProduct
                  key={prod.id}
                  product={prod}
                  />
              ))
          }
      </div>
    )
}

export default Home