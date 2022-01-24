
function ItemCard(props) {



    return(
        <>
            <div className="w-60 p-2 bg-white rounded-xl transform transition-all hover:-translate-y-2 duration-300 shadow-lg hover:shadow-2xl">

                <img className=" object-cover rounded-xl border object-cover rounded-xl"
                 src="https://cdn.shopify.com/s/files/1/0270/1351/3269/products/Jehu-cal1529_1445x.jpg" alt=""/>
                <div className="p-2">

                    <h2 className="font-bold text-lg mb-2 ">Red Jumper</h2>

                    <p className="text-sm text-gray-600"> by Jehucal</p>
                </div>
            </div>
        </>


    )


}

export default ItemCard;