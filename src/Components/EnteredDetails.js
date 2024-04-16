
import { useNavigate } from 'react-router-dom'; 

export default function EnteredDetails(props) { 
const navigate = useNavigate(); 

const submit = () => { 
	console.log(props.data); 
	console.log(props.questiondData); 
	navigate('/thanks');  
}; 

return ( 
	<div className="container-fluid qform"> 
	<div className="col-md-5 m-auto"> 
		<div className="mt-3"> 
		<div className="card text-left h-100"> 
			<div className="card-body my-3"> 
			<h4>Entered Details</h4> 

			<p> 
				<b>Name:</b> {props.data.name} 
			</p> 
			<p> 
				<b>Email:</b> {props.data.email} 
			</p> 
			<p> 
				<b>Contact No.:</b> {props.data.contact} 
			</p> 

			<h4>Responses</h4> 

			<p> 
				<b>Profession:</b> {props.questiondData.profession} 
			</p> 
			<p> 
				<b>Interests:</b> {props.questiondData.interest} 
			</p> 
			<p> 
				<b>Reference:</b> {props.questiondData.reference} 
			</p> 

			<button type="submit" onClick={submit} className="btn btn-success"> 
				Submit 
			</button> 

			<center> 
				<span className="badge rounded-pill disabled">1</span> 
				<span className="badge rounded-pill disabled">2</span> 
				<span className="badge badge-pill bg-success"> 
				<b>3</b> 
				</span> 
			</center> 
			</div> 
		</div> 
		</div> 
	</div> 
	</div> 
); 
} 
