import { NavLink } from "react-router-dom"

function Footer() {
    return (
        <>
            <footer>
                <div className="bg-[#171717] py-8 text-white">
                    <div className="flex flex-col lg:flex-row justify-between items-center  max-w-[90%] lg:max-w-5xl mx-auto">
                        <h1>Copyright &#169; -MasterIT Store</h1>
                        <ul className="flex items-center gap-4">
                            <li><NavLink to="/">Home</NavLink></li>
                            <li><NavLink to="/products">Contact Us</NavLink></li>
                            <li><NavLink to="/contact">Term and conditional</NavLink></li>
                            <li><NavLink to="/about">About Us</NavLink></li>
                        </ul>

                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer