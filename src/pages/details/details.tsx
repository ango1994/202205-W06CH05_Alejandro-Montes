import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { iState } from '../../models/state';

export function Details() {
    const products = useSelector((state: iState) => state.products);
    const { id } = useParams();
    const productDetailed = products.find((product) => product.id === +id!);
    if (productDetailed) {
        return (
            <div>
                <h2>{productDetailed.description}</h2>
            </div>
        );
    }
    return <div></div>;
}
