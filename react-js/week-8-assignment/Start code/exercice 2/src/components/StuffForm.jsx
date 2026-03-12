import React from "react";

export default function StuffForm({ addStuff }) {
    const [price, setPrice] = React.useState(0);
    const [name, setName] = React.useState("");

    function onSubmit(e) {
        e.preventDefault();
        addStuff({ name, price});
    }

    return (
        <form className="stuff-form" onSubmit={onSubmit}>
        <p>Stuff name</p>
        <input type="search" placeholder="Banana" onChange={(e) => setName(e.target.value)}/>

        <p>Stuff price</p>
        <input type="search" placeholder="15" onChange={(e) => setPrice(parseFloat(e.target.value)||0)} />

        <button>Add Stuff</button>
        </form>
    );
}
