export const CreditItem = ({ credit }) => {
    return (
        <ul>
            {CreditItem.map(item => {
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