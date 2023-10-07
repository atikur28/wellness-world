const WhyChooseUs = () => {
    return (
        <div className="w-11/12 mx-auto">
            <h2 className="text-center md:text-left text-xl md:text-5xl font-semibold md:font-medium pb-1">Why Choose WellnessWorld?</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 mx-10 text-center my-10">
                <div className="border rounded-md py-10">
                    <h2 className="text-xl font-semibold mb-5">Expertise</h2>
                    <p className="text-gray-500 font-medium">Benefit from insights and guidance from top experts in health and wellness.</p>
                </div>
                <div className="border rounded-md py-10">
                    <h2 className="text-xl font-semibold mb-5">Diverse Offerings</h2>
                    <p className="text-gray-500 font-medium">Explore a wide range of wellness events and resources tailored to your needs.</p>
                </div>
                <div className="border rounded-md py-10">
                    <h2 className="text-xl font-semibold mb-5">Community</h2>
                    <p className="text-gray-500 font-medium">Join a supportive community of individuals dedicated to well-being.</p>
                </div>
                <div className="border rounded-md py-10">
                    <h2 className="text-xl font-semibold mb-5">Quality Assurance</h2>
                    <p className="text-gray-500 font-medium">Count on high-quality events and content that align with our mission.</p>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseUs;