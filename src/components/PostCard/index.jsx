import Footer from "./Footer";

export const PostCard = ({ cover, title, body, userId }) => (

    <div className='post-card'>
        <img src={cover} alt={title} />
        <div className='post-content'>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
        <Footer userId={userId} />
    </div>
)