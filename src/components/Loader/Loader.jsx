import './Loader.css'

export const Loader = () => {
    return(
        <div className="loader">
            <div className="loader_wheel wheel_basic"></div>
            <div className="loader_wheel wheel_segment segment1"></div>
            <div className="loader_wheel wheel_segment segment2"></div>
            <div className="loader_wheel wheel_segment segment3"></div>
        </div>
    )
}