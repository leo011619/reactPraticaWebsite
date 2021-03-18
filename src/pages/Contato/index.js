import Main from '../../components/Main'
import MainBanner from '../../components/MainBanner'
import Form from '../../components/Form'
import './style.css'

const Contato = () =>{
    return(
        <>
        <small>Voce está na página Contato</small>
        <Main>
            <MainBanner title="Contato"/>
            <Form />
        </Main>
        </>
    )
}

export default Contato