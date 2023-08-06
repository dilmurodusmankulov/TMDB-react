import React from "react";
import { useSelector } from "react-redux";



const Genres = ({ data }) => {
    const { genres } = useSelector((state) => state.home);

    return (
        <div className="genres">
        </div>
    );
};

export default Genres;
