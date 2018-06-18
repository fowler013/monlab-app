
import React from 'react';
;

const FilmInfo = (props) => {
    return (
        
            <div className="col-md-4 mb-4">
                <div className="card card-style text-light">

                    <div className="card-body text-dark">
                        <h5 className="card-title card-header text-dark">{props.title}</h5>
                        <p className = "card-text text-muted desc p-2"> { props.desc }</p>
                        <ul className="list-group list-group-flush">
                        <li className="list-group-item">Director: { props.dir }</li>
                        <li className="list-group-item">Producer: { props.prod }</li>
                        <li className="list-group-item text-muted score">{ props.released } | Rotten Tomatoes: { props.rt_score }</li>
                        </ul>
                    </div>
                </div>

            </div>
    )
}

export default FilmInfo;