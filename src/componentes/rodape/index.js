import './Rodape.css'

const Rodape = () => {
    return (
        <footer className='rodape'>
            <div className='rodape__redes-socias'>
                <a href='https://www.x.com' alt='X' className='rodape__redes'><img src='/imagens/tw.png'/></a>
                <a href='https://www.facebook.com' alt='Facebook' className='rodape__redes'><img src='/imagens/fb.png'/></a>
                <a href='https://www.instagram.com/rcannabrava' alt='Instagram' className='rodape__redes'><img src='/imagens/ig.png'></img></a>
            </div>
            <img src='/imagens/logo.png' alt='Logo da organo' className='rodape__logo'/>
            <h4 className='rodape__texto'>Desenvolvido por Rodrigo Cannabrava</h4>
        </footer>
    )
}

export default Rodape