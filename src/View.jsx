import { Categories } from './Features';

export function View() {
    return (
        <>
            <h1>AI-slop sort</h1>
            <div>{categoryButtons()}</div>
        </>
    );
}

function categoryButtons() {
    return Categories.map((category) => (
        <button key={category}>{category}</button>
    ));
}

