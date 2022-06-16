import useClima from '../hooks/useClimas'
import Formulario from './Formulario'
import Resultado from './Resultado'
import Spinner from './Spinner'

const AppClima = () => {

  const { resultado, load, noResultado } = useClima()
  return (
    <>
        <main className='dos-columnas'>
            <Formulario />
            { load  ? <Spinner /> :
            resultado?.name ? <Resultado /> : noResultado ? <p>{noResultado}</p> :<p>El clima se va a mostrar aquí</p>}
            
        </main>
    
    </>
  )
}

export default AppClima