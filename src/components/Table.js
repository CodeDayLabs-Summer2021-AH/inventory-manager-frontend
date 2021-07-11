import { BiDotsVerticalRounded } from "react-icons/bi";
const Table = ({ products }) => {
    return (
        <table>
        <th>Product ID</th>
        <th>Name</th>
        <th>Location Quantity</th>
        <th>Section</th>
        <th>Last Verification Date </th>
        <th>Actions</th>
        {products.map((product) => {
        return(
            <tr key={product.id}>
                <td>{product.id}</td>
                <td>{product.name}</td>
                <td>{product.quanity}</td>
                <td>{product.section}</td>
                <td>{product.verificationData}</td>
                <td><BiDotsVerticalRounded/></td>
            </tr>
        )
        })}
    </table>
    ) 
}

export default Table
