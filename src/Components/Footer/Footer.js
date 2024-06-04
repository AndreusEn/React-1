import './Footer.css'

const FooterCom = () => {
    return  <footer className='footer' style={{backgroundImage: "url(/img/Footer.png)"}}>
        <div className='redes'>
            <a href='https://www.facebook.com/profile.php?id=100008682580450'>
                <img src= "/img/facebook.png" alt = "Face" />
            </a>
            <a href='https://www.instagram.com/andreusenrique/'>
                <img src= "/img/instagram.png" alt = "Insta" />
            </a>
        </div>

        <strong>Desarrollado por AndreusCorp</strong>

    </footer>

}

export default FooterCom