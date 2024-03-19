 const BrokerageProduct =(props : any)=>{
    const product = props.product;
    return(
        <div>
            <h2>{product.productname}</h2>
            <h3>{product.category}</h3>
            <h3>{product.userId}</h3>
        </div>
    )
}
export default BrokerageProduct;