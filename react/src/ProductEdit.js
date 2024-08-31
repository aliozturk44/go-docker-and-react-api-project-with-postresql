/* eslint-disable eqeqeq */
/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";

const ProductEdit = () =>{
    const{productid} = useParams();

     //const[productdata,productdatachange]=useState({});
     //this function create edit page. It brings the full data of the data we want to update.
     useEffect(()=>{
        fetch("http://localhost:4545/api/v1/product/"+productid).then((res) => {
            return res.json();
        }).then((resp)=>{
            idchange(resp.id)

            namechange(resp.name)
            pricechange(resp.price)
            quantitychange(resp.quantity)
            statuschange(resp.status)
        }).catch((err)=>{
            console.log(err.message);
        })
           
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const[id,idchange]=useState("");
    const[name,namechange]=useState("");
    const[price,pricechange]=useState("");
    const[quantity,quantitychange]=useState("");
    const[status,statuschange]=useState(true);  
    const[validation,valchange]=useState(false);   
    const[validation1,val1change]=useState(false); 
    const[validation2,val2change]=useState(false);
    const navigate = useNavigate();
    


    //This function works when edit page was submit. And Update the data for selected product
    const handlesubmit = (e) => {
        //void default event for HTML elements
        e.preventDefault();
        const productdata = {id,name,price,quantity,status};
        productdata.price = String(productdata.price);
        productdata.quantity = String(productdata.quantity);
        productdata.status = Number(productdata.status);
        productdata.status = String(productdata.status);
        
        // eslint-disable-next-line react-hooks/rules-of-hooks
        

        fetch("http://localhost:4545/api/v1/product/"+productid,{
            method: "PUT",
            headers: {"content-type":"application/json"},
            body: JSON.stringify(productdata)
            
        }).then((res)=>{
            
            alert('Saved succesfully.')
            navigate('/');
        }).catch((err =>{
            console.log(err.message)
        }))

    }
    //Return function creates for edit page html and bootstrap code
    return (
        <div>
            <div className="row">
                <div className="offset-lg-3 col-lg-6">
                    <form className="container" onSubmit={handlesubmit}>

                        <div className="card" style={{"textAlign":"left"}}>

                            <div className="card-title" style={{"textAlign":"center"}}>
                                <h2>Product Edit</h2>
                            </div>
                            <div className="card-body">
                                <div className="row">

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Id</label>
                                            <input value={id} disabled={"disabled"} className="form-control"></input>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Name</label>
                                            <input required value={name} onMouseDown={e=>valchange(true)} onChange={e=>namechange(e.target.value)} className="form-control"></input>
                                            {name.length == 0 && validation && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Price</label>
                                            <input required value={price} onMouseDown={e=>val1change(true)} onChange={e=>pricechange(e.target.value)} className="form-control"></input>
                                            {price.length == 0 && validation1 && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>
                                        

                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label>Quantity</label>
                                            <input type="number" required value={quantity} onMouseDown={e=>val2change(true)} onChange={e=>quantitychange(e.target.value)} className="form-control"></input>
                                            {quantity.length == 0 && validation2 && <span className="text-danger">Enter the name</span>}
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <div className="form-check">
                                            <input checked={Number(status)} onChange={e=>statuschange(e.target.checked)} type='checkbox' className="form-check-input"></input>
                                            <label className='form-check-label'>Status</label>
                                                
                                        </div>
                                    </div>
                                        
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <button className="btn btn-success mt-2" type="submit">Save</button>
                                            <Link to="/" className="btn btn-danger mt-2">Back</Link>
                                        </div>
                                    </div>
                                        
                                    
                                </div>

                            </div>

                        </div>

                    </form>

                </div>

            </div>
        </div>
    );
}


export default ProductEdit;