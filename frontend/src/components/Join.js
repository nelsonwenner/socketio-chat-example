import React from 'react';

import CustomInput from './common/CustomInput';
import { Link } from 'react-router-dom';

const Join = ({valueName, valueRoom, onChange, onClick, error}) => {
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Join</h1>
        <CustomInput
          classs={ 'joinInput' }
          type={'text'}
          name="name"
          placeholder={ 'Enter name...' }
          value={ valueName }
          onChange={ onChange }
        />

        <CustomInput
          classs={ 'joinInput mt-20' }
          type={'text'}
          name={ 'room' }
          placeholder={ 'Enter room...' }
          value={ valueRoom }
          onChange={ onChange }
        />

        <Link onClick={ onClick } to={`/chat?name=${valueName}&room=${valueRoom}`}>
          <button className='button mt-20' type="submit">Sign in</button>
        </Link>

        {
          error && (
            <div style={{ paddingTop: 10 }}>
              <p style={{color: 'red'}}>{error}</p>
            </div>
          )
        }
      </div>
    </div>
  )
}

export default Join;