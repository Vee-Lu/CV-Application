import { useState } from 'react';
import '../styles/input.css';

function PersonalInput({info, setInfo}) {
    const [name, setName] = useState("");
    const editName = (e) => setName(e.target.value);

    const [email, setEmail] = useState("");
    const editEmail = (e) => setEmail(e.target.value);

    const [number, setNumber] = useState("");
    const editNumber = (e) => setNumber(e.target.value);

    const [address, setAddress] = useState("");
    const editAddress = (e) => setAddress(e.target.value);

    const onSave = () => {
        setInfo({...info, name, email, number, address });
    }

    const onClear = () => {
        setName("");
        setEmail("");
        setNumber("");
        setAddress("");
        setInfo( (prevInfo) => ({...prevInfo, name: "", email: "", number: "", address: ""}));
    }

    return (
        <>
            <div className="PersonalInfo">  
                <h2>Personal Info</h2>
                
                <form>
                    <label>
                        <h3>Full Name</h3>
                        <input
                            type="text"
                            placeholder={"Enter first and last name"}
                            onChange={editName}
                            value={name}
                            required
                        />
                    </label>

                    <label>
                        <h3>Email</h3>
                        <input
                            placeholder={"Enter email address"}
                            onChange={editEmail}
                            value={email}
                            required
                        />
                    </label>
                
                    <label>
                        <h3>Phone Number</h3>
                        <input
                            placeholder="Enter phone number"
                            onChange={editNumber}
                            value={number}
                            required
                        />
                    </label>

                    <label>
                        <h3>Address</h3>
                        <input
                            placeholder={"City, Country/State"}
                            onChange={editAddress}
                            value={address}
                            required
                        />
                    </label>
                </form>

                <div className="buttons">
                    <button type="button" onClick={onClear}>Clear</button>
                    <button type="button" onClick={onSave}>Save</button>
                </div>
            </div>      
        </>
    );
}

export default PersonalInput;
