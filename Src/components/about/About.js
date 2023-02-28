import aboutImage from './../../utilities/images/About.jpg'
import './about.css'
const About = () => {
    return (
        <div className='about-container'>
            <h1 className='about-head'>Know About Us</h1>
            <div className='about-details'>
                <div className="about-left">
                    <img className='about-image' src={aboutImage} />
                </div>
                <div className="about-right">
                    <h2 className='heading'>Welcome to Meal Dash!!!!!</h2>
                    <p className='about-para'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse ac ante mi. Duis eget ullamcorper nisi. Sed commodo suscipit leo, at rhoncus ex interdum a. Praesent facilisis nisi fringilla dolor tincidunt porta. Phasellus commodo est et elit mattis, a vestibulum eros mollis. Nunc eleifend eleifend tristique. Phasellus quis consectetur nisi. Duis diam felis, vestibulum ac ullamcorper in, egestas vitae justo. Donec lacinia urna id metus vehicula, ac blandit leo dictum. In sit amet dignissim ligula. Donec pulvinar iaculis leo vitae eleifend. Fusce placerat, purus vitae congue imperdiet, arcu nibh fringilla sem, egestas gravida ipsum augue pellentesque orci. Vivamus sollicitudin vehicula metus et scelerisque. Praesent nec urna at ipsum congue rutrum in eu justo.</p>
                </div>
            </div>
        </div>
    )
}
export default About