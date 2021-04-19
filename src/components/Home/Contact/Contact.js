import React from 'react';

const Contact = () => {
    return (
        <section id="contact" className="contact my-5 py-5">
            <div className="container">
                <div className="section-header text-center mb-5">
                    <h1 className="fontColor">Send a message</h1>
                </div>
                <div className="col-md-9 mx-auto">
                    <form action="">
                        <div className="form-group my-4">
                            <input type="text" className="form-control py-3" placeholder="Email Address *" />
                        </div>
                        <div className="form-group my-4">
                            <input type="text" className="form-control py-3" placeholder="Phone Number*" />
                        </div>
                        <div className="form-group my-4">
                            <textarea name="" className="form-control py-3" id="" cols="30" rows="10" placeholder="Message *"></textarea>
                        </div>
                        <div className="form-group text-center my-4">
                            <button type="button" className="customBtn"> Send message</button>
                        </div>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default Contact;