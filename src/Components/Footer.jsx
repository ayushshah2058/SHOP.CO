

export const Footer = () => {
  return (
    <>
    <div className="bg-gray-200 py-4 mt-8">

    <div className="grid grid-cols-5 mx-16 my-8 gap-8 justify-between ">
        <div >
            <h1 className="text-2xl font-extrabold mb-2">SHOP.CO</h1>
            <p className="text-sm/6 font-extralight text-gray-800">We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-900 mb-2">COMPANY </p>
            <ul className="text-sm/8 font-extralight text-black line-height-4">
                <li>About</li>
                <li>Features</li>
                <li>Work</li>
                <li>Career</li>
            </ul>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-900 mb-2">HELP</p>
            <ul className="text-sm/8 font-extralight text-black line-height-4">
                <li>Coustomer Support</li>
                <li>Delivery Details</li>
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-900 mb-2">FAQ</p>
            <ul className="text-sm/8 font-extralight text-black line-height-4">
                <li>Account</li>
                <li>Manage Deliveries</li>
                <li>Orders</li>
                <li>Payments</li>
            </ul>
        </div>
        <div>
            <p className="text-sm font-medium text-gray-900 mb-2">Resources</p>
            <ul className="text-sm/8 font-extralight text-black line-height-4">
                <li>Free eBooks</li>
                <li>Development Tutorials</li>
                <li>How to - Blog</li>
                <li>Youtube Playlist</li>
            </ul>
        </div>
        
        </div>
    <hr className="border-gray-400 mx-16"/>
    </div>
    
    </>
  )
}

export default Footer;
