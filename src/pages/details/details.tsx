import { useSelector } from 'react-redux';
import { iState } from '../../models/state';

export function Details() {
    const products = useSelector((state: iState) => state.products);

    return <div></div>;
}
