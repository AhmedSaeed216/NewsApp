// import React, { useState } from 'react'

// const SignUp = ({onclose}) => {

//     const [form, setForm] = useState([

//     ])

//     const handlechange=(e)=>{
//         setForm({
//             ...form,
//             [e.target.name]:e.target.value
//         });
//     };


//     return (
//          <>
        
//        <div className='bg-white p-6 rounded-lg realtive'>
//         <button className='absolute top-2 right-2 text-red-700 font-bold text-xl' onClick={onclose}>
//             x
//             </button>
//         <form action="" className='flex flex-col gap-4'>
//             <label htmlFor="">
//                 <input 
//                 type="text"
//                 name='email'
//                 value={form.email}
//                 className=''
//                 onChange={handlechange}
//                 placeholder='Email'
//                 />
//             </label>

//         </form>
//        </div>
//          </>
//     )
// }

// export default SignUp



import React, { useState } from 'react';

const SignUp = ({ onClose }) => {
    const [formData, setFormData] = useState({
        email: '',
        username: '',
        password: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form data submitted:', formData);
    };

    return (
        <div className='bg-blur p-6 rounded-lg shadow-lg relative'>
            <h1 className=' font-bold py-2 m-2'>Sign Up/ Register</h1>
            <button onClick={onClose} className="absolute top-2 right-2 text-red-600 font-bold text-xl">
                ×
            </button>
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <label className="flex items-center gap-2">
                    <input
                        type="text"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Email"
                    />
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="text"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Username"
                    />
                </label>
                <label className="flex items-center gap-2">
                    <input
                        type="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        className="grow p-2 border border-gray-300 rounded-md"
                        placeholder="Password"
                    />
                </label>
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600">
                    Sign Up
                </button>
            </form>
        </div>
    );
};

export default SignUp;



