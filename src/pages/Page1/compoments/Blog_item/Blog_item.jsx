import React from 'react';
import './Blog_item.css';

function Blog_item(props) {
    return (
        <div className={props.display}>
            <div className="Blog_block1">
                    <div className="Blog_cont1">
                        <div className="Blog_img1"></div>
                        <p className="Blog_text1">{props.text1}</p>
                    </div>
                    <div className="Blog_cont2">
                        <p className="Blog_text2 gr">{props.text2}</p>
                        <p className="Blog_text3">{props.text3}</p>
                    </div>
            </div>
            <div className="Blog_block1">
                    <div className="Blog_cont1">
                        <div className="Blog_img1"></div>
                        <p className="Blog_text1">{props.text11}</p>
                    </div>
                    <div className="Blog_cont2">
                        <p className="Blog_text2 gr">{props.text22}</p>
                        <p className="Blog_text3">{props.text33}</p>
                    </div>
            </div>
        </div>
    );
}

export default Blog_item;