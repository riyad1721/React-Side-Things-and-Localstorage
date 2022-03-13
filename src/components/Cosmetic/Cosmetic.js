import React from 'react';
import { addToDb, removeFromDb } from '../../utilities/fakedb';

const Cosmetic = (props) => {

    const { name, balance, gender, _id } = props.cosmetic;
    const handlePurchase = id => {
        addToDb(_id);
    }
    const handleRemove = id => {
        removeFromDb(id);

    }
    return (
        <div>
            <h2>Name: {name}</h2>
            <h4>Price: {balance}</h4>
            <h4><small>#ID: {_id}</small> -Gender: {gender}</h4>
            <button onClick={() => handlePurchase(_id)}>Purchase</button>
            <button onClick={() => handleRemove(_id)}>Remove</button>

        </div>
    );
};

export default Cosmetic;