import styles from './FeedItem.module.css';

interface Post {
    title: string;
    id: number;
    body: string;
    image: string;
    date: string;
}

interface FeedItemProps {
    post: Post;
    showFullText: boolean;
    onToggleText: () => void;
}

export const FeedItem = ({ post, showFullText, onToggleText }: FeedItemProps) => {
    const isLongText = post.body.split(' ').length > 5;

    return (
        <div className={styles.feedItem}>
            <div className={styles.top}>
                <h3>{post.title}</h3>
                <p>{post.date}</p>
            </div>
            <p>
                {showFullText || !isLongText ? post.body : `${post.body.split(' ').slice(0, 5).join(' ')}...`}
                {isLongText && (
                    <span onClick={onToggleText} style={{ cursor: 'pointer', color: 'blue' }}>
                        {showFullText ? ' Скрыть' : ' Показать больше'}
                    </span>
                )}
            </p>
            <img className={styles.img} src={post.image} alt="Post" />
            <hr />
        </div>
    );
};
