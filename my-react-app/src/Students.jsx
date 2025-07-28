// props = Read only properties that are shared between components
//         A parent can only send data to a child
//         < component key = value>

// propTypes = A mechanism that ensures that the passed value is of the correct data type
// age : PropType.number


// default props = default values for props incase they are not passed from the parent component
// name : "Guest"  

import PropTypes from 'prop-types';

function Students(props){
    return(
        <div className="student">
            <p>Name: {props.name}</p>
            <p>Age: {props.age}</p>
            <p>Student: {props.isStudent  ? "Yes" : "No"}</p>
        </div>
    );
}

Students.propTypes = {
    name : PropTypes.string,
    age : PropTypes.number,
    isStudent : PropTypes.bool
}

Students.defaultProps = {
    name : "Guest",
    age : 0,
    isStudent: false,
}

export default Students