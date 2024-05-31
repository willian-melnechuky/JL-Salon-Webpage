import './Button.css'
export default function Button ({size}) {
    
    console.log({size})
    return(
        <div className='button_container '>
            <button className={size === 'small' ? 'button_container--default-button--small' : 'button_container--default-button--normal' }>
              <a className="button_container--default-anchor" href="./pages/menu.html">Book Now</a>
            </button>
          </div>

    );

}