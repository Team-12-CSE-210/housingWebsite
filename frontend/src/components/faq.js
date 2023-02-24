import React from 'react';
import '../styles/faq.css'

function Faq() {
    return (
        <div className='align-center clearfix section-1' style={{ backgroundColor: 'white' }}>
            <div className='clearfix sheet sheet1'>
                <div className='clearfix exp-width layout-warp1'>
                    <div className='layout'>
                        <div className='layout-row'>
                            <div className='align-left layout-cell layout-cell-1 size-30'>
                                <div className='container-layout container-layout-1'>
                                    <h2 className='text-1'>
                                        Finding the best housing options in San Diego is our goal
                                    </h2>
                                    <p className='text-2'>
                                        We are here to answer any problems you might encounter for you
                                    </p>

                                    <button className='align-left u-btn u-border-none t'>
                                        Click Here for Customer Online Lawyer 
                                    </button>
                                </div>
                            </div>

                            <div className='align-left layout-cell layout-cell-2 size-30 '>
                                <div className='container-layout container-layout-2 align-top'>
                                    <div className='align-left exp-width accordion-1'>
                                        <div className='container-layout container-layout-1'>
                                            <h2 className='text-1'>
                                                FAQ:
                                            </h2>
                                            <p className='text-2'>Question 1: What does each button on the header means?</p>
                                            <p className='text-2'>Answer: <br /> <strong>Rent</strong> is for listing the properties that are avaible on our webpage out for users to look up these properties' details. <br />
                                                  <strong>List</strong> is for the landlorder who have willing to post their porperties on our website for renting. <br />
                                                  <strong>Help</strong> will be our online customer lawyer  service that can ensure the lease will be fair for our customer.
                                            </p>
                                        </div>

                                        <div className='container-layout container-layout-1'>
                                            <p className='text-2'>
                                                abc
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Faq;
