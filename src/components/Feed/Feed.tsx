import { useEffect, useState, useMemo } from 'react';
import { posts } from '../../constants/posts';
import { FeedItem } from '../FeedItem/FeedItem';
import styles from './Feed.module.css';

type PostType = {
    id: number;
    title: string;
    date: string;
    image: string;
    body: string;
};

export const Feed = ({ searchQuery }: { searchQuery: string }) => {
    const [feedPosts, setFeedPosts] = useState<PostType[] | null>(null);
    const [showFullText, setShowFullText] = useState<boolean[]>([]);

    useEffect(() => {
        const fetchData = () => {
            setTimeout(() => {
                setFeedPosts(posts);
                setShowFullText(new Array(posts.length).fill(false));
            }, 1500);
        };
        fetchData();
    }, []);

    const handleToggleText = (index: number) => {
        setShowFullText(prevState => {
            const newState = [...prevState];
            newState[index] = !newState[index];
            return newState;
        });
    };

    const filteredPosts = useMemo(() => {
        if (!feedPosts) return [];
        return feedPosts.filter(post => post.title.toLowerCase().includes(searchQuery.toLowerCase()));
    }, [feedPosts, searchQuery]);

    if (!feedPosts) {
        return <div>Загрузка...</div>;
    }

    return (
        <main className={styles.feed}>
            {filteredPosts.map((post, index) => (
                <FeedItem
                    key={post.id}
                    post={post}
                    showFullText={showFullText[index]}
                    onToggleText={() => handleToggleText(index)}
                />
            ))}
        </main>
    );
};
