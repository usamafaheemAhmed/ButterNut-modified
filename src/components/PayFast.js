import React from 'react';
import '../App.css'

function PayFast() {
  return (
    <div className='container-fluid'>
        <div className='row header py-5'>
            <div className='col-md-12 text-center'>
                <h3 className='DogDesc headerHeading'>Payment Method</h3>
            </div>
        </div>

        {/* Payment Form */}
       <div className='container my-5'>
         <form action="https://www.payfast.co.za/eng/process" method="post">
            <div className='row mt-5'>
            <div className='col-md-4'>
                <label>Merchant Id</label>
                <input className="form-control" name="merchant_id" value="10000100" />
            </div>
            <div className='col-md-4'>
                <label>Merchant Key</label>
                <input className="form-control" name="merchant_key" value="46f0cd694581a" />
            </div>
            <div className='col-md-4'>
                <label>Return URL</label>
                <input className="form-control" name="return_url" value="https://www.example.com/success" />
            </div>
            </div>
            <div className='row mt-3'>
            <div className='col-md-4'>
                <label>Cancel URL</label>
                <input className="form-control" name="cancel_url" value="https://www.example.com/cancel" />
            </div>
            <div className='col-md-4'>
                <label>Notify URL</label>
                <input className="form-control" name="notify_url" value="https://www.example.com/notify" />
            </div>
            <div className='col-md-4'>
                <label>Amount</label>
                <input className="form-control" name="amount" value="100.00" />
            </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <label>Item Name</label>
                    <input className="form-control" name="item_name" value="Test Product" />
                </div>
                <div className='col-md-4'>
                    <label>First Name</label>
                    <input className="form-control" name="name_first" value="John" />
                </div>
                <div className='col-md-4'>
                    <label>Last Name</label>
                    <input className="form-control" name="name_last" value="Doe" />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <label>Email</label>
                    <input className="form-control" name="email_address" value="john@doe.com" />
                </div>
                <div className='col-md-4'>
                    <label>Phone</label>
                    <input className="form-control" name="cell_number" value="0823456789" />
                </div>
                <div className='col-md-4'>
                    <label>Payment ID</label>
                    <input className="form-control" name="m_payment_id" value="01AB" />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <label>Email Confirmation</label>
                    <input className="form-control" name="email_confirmation" value="1" />
                </div>
                <div className='col-md-4'>
                    <label>Confirmation Address</label>
                    <input className="form-control" name="confirmation_address" value="john@doe.com" />
                </div>
                <div className='col-md-4'>
                    <label>Payment Method</label>
                    <input className="form-control" name="payment_method" value="cc" />
                </div>
            </div>
            <div className='row mt-3'>
                <div className='col-md-4'>
                    <label>Signature</label>
                    <input className="form-control" name="signature" value="f103e22c0418655fb03991538c51bfd5" />
                </div>
            </div>
            <div className='row text-center my-3'>
                <div className='col-md-4'></div>
                <div className='col-md-4'>
                    <input type="submit" />
                </div>
                <div className='col-md-4'></div>
            </div>
         </form>
       </div>
       {/* Payment Form */}

       {/* 
    
       */}

    </div>
  )
}

export default PayFast