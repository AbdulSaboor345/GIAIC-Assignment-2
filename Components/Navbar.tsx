export default function Header() {
    return ( 
        <main className="bg-[#252B42]">
            <ul className="flex justify-center text-white">
                <li className="font-montserrat mt-7 mr-20 text-lg font-bold"><h3>BrandName</h3></li>
                <li className="mr-8 mt-7 font-semibold font-montserrat">Home</li>
                <li className="mr-8 mt-7 font-semibold font-montserrat">Product</li>
                <li className="mr-8 mt-7 font-semibold font-montserrat">Pricing</li>
                <li className="mr-8 mt-7 font-semibold font-montserrat">Contact</li>
                <li className="ml-40 mr-8 mt-7 font-semibold font-montserrat">Login</li>
                <li><button className="mr-8 mt-[27px] font-montserrat bg-[#23A6F0] px-5 py-2 rounded text-xs font-semibold">JOIN US</button></li>
            </ul>
        </main>
    );
}
