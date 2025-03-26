
import Link from "next/link"

const DeliveryHeader = (props) => {


    return (
        <div className="header-wrapper">
            <div className="w-24">
                <img src="logo/logo.png" />
            </div>
            <ul>
                <li>
                    <Link href="/" >Home</Link>
                </li>
                
            </ul>
        </div>
    )
}

export default DeliveryHeader