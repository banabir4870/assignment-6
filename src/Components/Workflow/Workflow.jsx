import React from 'react';

const Workflow = () => {
    return (
        <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA]">
            <div className="w-full md:w-8/12 mx-auto p-28 text-center space-y-4">
                <h1 className="text-2xl md:text-4xl font-extrabold text-white">Ready to Transform Your Workflow?</h1>
                <p className="text-white/80">Join thousands of professionals who are already using Digitools to work smarter. <br />Start your free trial today.</p>
                <div className="gap-4 flex items-center justify-center mt-6">
                    <button className="btn bg-white rounded-full"><span className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] bg-clip-text text-transparent">Explore Products</span></button>
                    <button className="btn btn-outline rounded-full text-white">View Pricing</button>
                </div>
                <p className="text-white/80">14-day free trial • No credit card required • Cancel anytime</p>
            </div>
        </div>
    );
};

export default Workflow;