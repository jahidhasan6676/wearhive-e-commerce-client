

const PendingProductTable = ({pendingProduct,index,handleUpdateStatus}) => {
    const { photo, productName, productCategory, status, price, _id } = pendingProduct || {};

    return (
        <tr className="bg-white border-b text-gray-600">
            <td className="px-6 py-3">{index}</td>
            <td className="px-6 py-3 flex justify-center items-center"> <img src={photo} alt="" className="w-[50px] h-[50px] rounded-md " /> </td>
            <td className="px-6 py-3">{productName}</td>
            <td className="px-6 py-3">{productCategory}</td>
            <td className="px-6 py-3 ">${price}</td>
            <td className="px-2 md:px-3 lg:px-6 py-3 ">
                <button onClick={()=>handleUpdateStatus(_id, "Approve")} className="bg-green-500 text-white px-3 py-1 mr-2 rounded">Approve</button>
                <button onClick={()=>handleUpdateStatus(_id, "Reject")} className="bg-red-500 text-white px-3 py-1 rounded mt-1 lg:mt-0">Reject</button>
            </td>
        </tr>
    );
};

export default PendingProductTable;