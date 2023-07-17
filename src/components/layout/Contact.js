import './Contact.css'

function Contact(){
    var TextLow = "de acordo com o Instituto de Gestão de Design em Boston, EUA";

    return(
        <div className='Contact'>
                <p className='HighText'> empresas que investem em <span className='Allegin'>design crescem</span> o dobro das líderes suas indústrias </p>
                <div className='LowTextAux'>
                    <p className='LowText'> { TextLow } </p>
                </div>
        </div>
    )



}
export default Contact