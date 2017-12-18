import React from 'react';
import Modal from './modal';

export default props => {
    const {complete} = props.item;

    const listStyle = {
      textDecoration: 'line-through',
      color: '#888'
    };

    return (
        <li className="collection-item row">
            <div style={ complete ? listStyle : {} } className="col s10">
                {props.item.title}
            </div>
            <div className="col s2">
                <Modal />
                <button onClick={() => props.delete(props.index)} className="btn btn-floating red">
                    <i className="material-icons">delete_forever</i>
                </button>
                <button onClick={()=> props.complete(props.index)} className={`btn btn-floating ${ complete ? 'yellow' : 'green'}`}>
                    <i className="material-icons">{complete ? 'undo' : 'check'}</i>
                </button>
            </div>
        </li>
    )
}