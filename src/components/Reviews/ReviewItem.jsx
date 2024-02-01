export const ReviewItem = ({ review }) => {
    return (
        <ul>
            {ReviewItem.map(item => {
                return (
                    <li key={item.id}>
                        <p>{item.author}</p>
                        <p>{item.content}</p>
                    </li>
                );
            })};
        </ul>
    );
}
