import "./card.scss";

export default function Card() {
    return (
        <div className="card">
            <div className="card-top">
                <h1>Name of Taco</h1>
            </div>
            <div className="card-body">
                <picture>
                    <img class="tacologo" 
                    src="https://png.pngtree.com/png-vector/20201129/ourmid/pngtree-cute-taco-vector-illustration-png-image_2486323.jpg" />
                </picture>
            </div>
            <div>
                <p>Taco description</p>
            </div>
        </div>
    );
}