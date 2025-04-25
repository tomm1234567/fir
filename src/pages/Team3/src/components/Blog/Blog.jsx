function Blog({IMG_V_ZAGOLVKE,data_data,h1_blog,p_blog}) {
return (
    <div className="blog">
        <div className="verx">
            <img src={IMG_V_ZAGOLVKE} alt="" />
            <p>{data_data}</p>
        </div>
        <div className="niz">
            <h2>{h1_blog}</h2>
            <p>{p_blog}</p>
        </div>
    </div>
  )
}

export default Blog
