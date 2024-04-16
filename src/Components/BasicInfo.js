

import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; 

export default function BasicInfo({ addBasicData }) { 

const [name, setName] = useState(""); 
const [email, setEmail] = useState(""); 
const [contact, setContact] = useState(""); 
	
const navigate = useNavigate(); 

const submit = (e) => { 
	e.preventDefault(); 
	if (!name || !email || !contact) { 
	alert("All fields necessary!"); 
	} else { 
	addBasicData(name, email, contact); 
	navigate('/questions'); 
	} 
} 

return ( 
	<div className="container-fluid qform"> 
	<div className="col-md-5 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div className="card-body my-3"> 
			<form onSubmit={submit}> 
				<label htmlFor=""> 
				<h4>Basic Details</h4> 
				</label> 
				<div className="form-group my-3"> 
				<label htmlFor=""> 
					<b>1.</b> Name 
				</label> 
				<input 
					type="text"
					name="name"
					value={name} 
					onChange={(e) => { setName(e.target.value) }} 
					className='form-control my-2'
					placeholder='Enter your Name'
					autoComplete='off'
				/> 
				</div> 
				<div className="form-group my-3"> 
				<label htmlFor=""> 
					<b>2.</b> Email 
				</label> 
				<input 
					type="email"
					name='email'
					value={email} 
					onChange={(e) => { setEmail(e.target.value) }} 
					className='form-control my-2'
					placeholder='Enter your Email'
					autoComplete='off'
				/> 
				</div> 
				<div className="form-group my-3"> 
				<label htmlFor=""> 
					<b>3.</b> Contact No. 
				</label> 
				<input 
					type="tel"
					name='contact'
					value={contact} 
					onChange={(e) => { setContact(e.target.value) }} 
					className='form-control my-2'
					placeholder='Enter your Contact No.'
					autoComplete='off'
				/> 
				</div> 
				<button type='submit' className='btn btn-success mx-3'>Next</button> 
			</form> 
			<center> 
				<span className="badge badge-pill bg-success"><b>1</b></span> 
				<span className="badge rounded-pill disabled">2</span> 
				<span className="badge rounded-pill disabled">3</span> 
			</center> 
			</div> 
		</div> 
		</div> 
	</div> 
	</div> 
) 
} 
