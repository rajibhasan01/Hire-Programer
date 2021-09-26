import React from 'react';
import Rating from 'react-rating';
import Skill from '../Skill/Skill';
import './Developer.css';

const Developer = (props) => {
    const { first_name, last_name, designation, salary, country, company, email, phone, image, skills, star } = props.developer;

    return (
        <div className="col-12 col-md-6 col-lg-4 pt-5">
            <div className="cilent-text border h-100">
                <div className="mt-5">
                    <h3>{first_name} <span className="text-danger">{last_name}</span> </h3>
                    <h5 className="text-muted">{designation}</h5>
                    <div>
                        <i className="fas fa-quote-left text-danger"></i> <hr className="hrr" />
                    </div>
                    <div className="ms-2 fw-bold text-secondary lh-1 pt-3">

                        <div className="d-flex justify-content-between">
                            <p>{country}</p>
                            <Rating
                                initialRating={star}
                                emptySymbol="far fa-star icon"
                                fullSymbol="fas fa-star icon"
                                readonly />
                        </div>
                        <p>{phone}</p>

                        <p><small className="text-success">{email}</small></p>

                        <div className="d-flex flex-wrap mb-3">
                            {
                                skills.map((skill, i) => <Skill
                                    skill={skill}
                                    key={i}
                                />)
                            }
                        </div>

                        <p className="text-danger"><span className="text-muted">Expected Salary:</span> ${salary}</p>
                        <button id="detailsBtn" className="mt-3">Details <i className="fas fa-info-circle"></i></button>
                        <button id="hireBtn" className="ms-3 mt-3" onClick={() => props.handleHire(props.developer)}>Hire Now <i className="fas fa-check-circle"></i></button>
                    </div>

                </div>
                <div>
                    <img className="rounded-circle image-desgin" src={image} alt="" />
                </div>
            </div>

        </div>
    );
};

export default Developer;