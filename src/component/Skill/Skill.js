import React from 'react';

const Skill = (props) => {

    return (
        <div className="col m-1">
            <button className="bg-muted border-0 rounded-pill py-1 px-2">{props.skill}</button>

        </div>
    );
};

export default Skill;