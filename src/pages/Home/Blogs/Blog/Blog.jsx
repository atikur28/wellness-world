import PropTypes from "prop-types";

const Blog = ({blog}) => {
    const {image, title, author, category, date, content} = blog || {};
    return (
        <div className="p-5 border" data-aos="zoom-out-up" >
            <img className="w-[300px] md:w-[450px] mx-auto" src={image} alt="" />
            <p className="font-semibold text-gray-500 text-center mt-2"><span className="lg:mr-14">{category}</span> <span className="lg:ml-14">Date: {date}</span></p>
            <h3 className="text-xl font-semibold text-center mt-3">{title}</h3>
            <p className="text-sm font-semibold text-slate-500 my-3"><em>BY</em> {author}</p>
            <p className="text-center">{content}</p>
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
}

export default Blog;