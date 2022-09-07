import React, { useState } from 'react';
import { countries } from '../data';

const genders = ['Male', 'Female', 'Other'];
const courses = ['Python', 'Javascript', 'HTML5', 'CSS3', 'Bootstrap'];

const Input = ({ type, name, value, handler }) => {
  return (
    <input
      type={type}
      name={name}
      placeholder={`Enter your ${name}`}
      className='mr-3 py-3 px-2 border-solid border-2 border-indigo-600 outline-none'
      required
      value={value}
      onChange={handler}
    />
  );
};

const FormScreen = () => {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: '',
    gender: genders[0],
    country: countries[0],
  });

  const { name, email, password, gender, country } = data;

  // const onValueChangeHandler = (e) => {
  //   setData({ ...data, [e.target.name]: e.target.value });
  // };
  // OR
  const onValueChangeHandler = ({ target: { name, value } }) => {
    setData({ ...data, [name]: value });
  };

  const submitHandler = (e) => {
    e.preventDefault();
    // on click submit button do whatever you want send data to api or something else here i am just simply log it
    // for this trick you must set same name in in input name attribute as your state name otherwise this shorthand trick is not work as expected
    console.log({ name, email, password, gender, country });
  };
  return (
    <div className='container mx-auto px-4'>
      <form onSubmit={submitHandler}>
        {/* <input
          type='text'
          name='name'
          placeholder='Enter your name'
          className='mr-3 py-3 px-2 border-solid border-2 border-indigo-600 outline-none'
          required
          value={name}
          onChange={onValueChangeHandler}
        />
        <input
          type='email'
          name='email'
          placeholder='Enter your email'
          className='mr-3 py-3 px-2 border-solid border-2 border-indigo-600 outline-none'
          required
          value={email}
          onChange={onValueChangeHandler}
        />
        <input
          type='password'
          name='password'
          placeholder='Enter your password'
          className='mr-3 py-3 px-2 border-solid border-2 border-indigo-600 outline-none'
          required
          value={password}
          onChange={onValueChangeHandler}
        /> */}
        {/* Same Above Code with custom input component */}
        <Input
          type={'text'}
          name={'name'}
          value={name}
          handler={onValueChangeHandler}
        />
        <Input
          type={'email'}
          name={'email'}
          value={email}
          handler={onValueChangeHandler}
        />
        <Input
          type={'password'}
          name={'password'}
          value={password}
          handler={onValueChangeHandler}
        />

        <select
          name='country'
          defaultValue={country}
          className='py-[0.85rem] px-2 border-solid border-2 border-indigo-600 outline-none bg-transparent'
          required
          onChange={onValueChangeHandler}
        >
          {countries?.length > 0 &&
            countries?.map((country, index) => {
              return (
                <option key={index} value={country}>
                  {country}
                </option>
              );
            })}
        </select>

        {/* <span className='p-4' onChange={onValueChangeHandler}>
          <span className='mr-5'>
            <input
              type='radio'
              value='Male'
              name='gender'
              className='accent-indigo-600'
              checked={gender === 'Male'}
            />{' '}
            Male
          </span>
          <span className='mr-5'>
            <input
              type='radio'
              value='Female'
              name='gender'
              className='accent-indigo-600'
              checked={gender === 'Female'}
            />{' '}
            Female
          </span>
          <span className='mr-5'>
            <input
              type='radio'
              value='Other'
              name='gender'
              className='accent-indigo-600'
              checked={gender === 'Other'}
            />{' '}
            Other
          </span>
        </span> */}

        {/* Same Above Code by using array of genders */}

        <span className='p-4' onChange={onValueChangeHandler}>
          {genders?.length > 0 &&
            genders?.map((_gender, index) => {
              return (
                <span className='mr-5' key={index}>
                  <input
                    type='radio'
                    value={_gender}
                    name='gender'
                    className='accent-indigo-600'
                    checked={gender === _gender}
                  />{' '}
                  {_gender}
                </span>
              );
            })}
        </span>

        <button
          type='submit'
          className='bg-indigo-600 p-3 text-white rounded-md'
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormScreen;
