import './style.css'

const ToggleButton = ({...props}) =>{
    const{ className, themeClick } = props
    return (
        <button
            className= {`${className} toogle-theme-btn`}
            onClick= {themeClick}
        >

        </button>
    )
}

export default ToggleButton