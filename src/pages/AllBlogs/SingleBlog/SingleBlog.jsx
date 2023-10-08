import PropTypes from "prop-types";

const SingleBlog = ({data}) => {
    console.log(data);
    const {title, author, category, date, content} = data || {};
    return (
        <div className="w-[310px] lg:w-[400px] border rounded-md px-1 lg:px-3 py-3 bg-white shadow-md">
            <h2 className="font-semibold md:text-lg lg:text-xl lg:font-bold">{title}</h2>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold my-2">Author: {author}</h3>
            <h3 className="text-sm md:text-base lg:text-lg font-semibold">Category: {category}</h3>
            <p className="text-xs md:text-sm lg:text-base font-medium my-2">Date: {date}</p>
            <p className="text-xs md:text-sm lg:text-base font-semibold">{content}</p>
        </div>
    );
};

SingleBlog.propTypes = {
    data: PropTypes.object.isRequired,
}

export default SingleBlog;