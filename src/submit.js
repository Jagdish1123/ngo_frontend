import React, { useState } from 'react';

const Submit = () => {
    const [email, setEmail] = useState('');
    const [userInfo, setUserInfo] = useState(null);

    const fetchUserData = async () => {
        if (!email.trim()) {
            setUserInfo(null);
            return;
        }

        // try {
        //     const response = await fetch(YOUR_BACKEND_ENDPOINT ? email = ${ email });
        //     if (!response.ok) throw new Error('Network response was not ok');
        //     const data = await response.json();

        //     if (data) {
        //         setUserInfo(data);
        //     } else {
        //         setUserInfo('No user found.');
        //     }
        // } catch (error) {
        //     console.error('Error fetching user data:', error);
        //     setUserInfo('Error fetching user data.');
        // }
    };

    const handleAction = (action) => {
        if (!email.trim()) {
            alert('Please enter an email.');
            return;
        }

        // alert(User with email "${email}" has been ${ action } ed.);
        // Here, you can add logic to send the action to the backend
    };

    return (
        <div className="container">
            <h2>Beneficiary Information</h2>
            <label htmlFor="email">Enter Email:</label>
            <input
                type="text"
                id="email"
                placeholder="Enter Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onInput={fetchUserData}
            />

            <div className="user-info">
                {userInfo ? (
                    typeof userInfo === 'string' ? (
                        <p>{userInfo}</p>
                    ) : (
                        <>
                            <p><strong>Username:</strong> {userInfo.first_name}</p>
                            <p><strong>Full Name:</strong> {userInfo.fullName}</p>
                            <p><strong>Email:</strong> {userInfo.email}</p>
                            <p><strong>Reason:</strong> {userInfo.reason}</p>
                            <p><strong>Aadhaar Number:</strong> {userInfo.aadhaar_number}</p>
                            <p><strong>Date of Birth:</strong> {userInfo.date_of_birth}</p>
                        </>
                    )
                ) : (
                    <p>No user found.</p>
                )}
            </div>

            <div className="buttons">
                <button onClick={() => handleAction('approve')}>Approve</button>
                <button className="reject" onClick={() => handleAction('reject')}>Reject</button>
            </div>

            <style jsx>{`
                body {
                    font-family: Arial, sans-serif;
                    margin: 50px;
                    padding: 20px;
                    background-color: #f4f4f4;
                }

                .container {
                    max-width: 600px;
                    margin: auto;
                    padding: 20px;
                    background-color: #fff;
                    border-radius: 5px;
                    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                }

                input[type="text"] {
                    width: 100%;
                    padding: 10px;
                    margin: 10px 0;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                }

                .user-info {
                    margin: 20px 0;
                    padding: 15px;
                    border: 1px solid #ccc;
                    border-radius: 5px;
                    background-color: #f9f9f9;
                }

                .buttons {
                    display: flex;
                    justify-content: space-between;
                }

                button {
                    width: 48%;
                    padding: 10px;
                    margin: 10px 0;
                    border: none;
                    border-radius: 5px;
                    background-color: #007bff;
                    color: white;
                    font-size: 16px;
                    cursor: pointer;
                }

                button:hover {
                    background-color: #0056b3;
                }

                .reject {
                    background-color: #dc3545;
                }

                .reject:hover {
                    background-color: #c82333;
                }
            `}</style>
        </div>
    );
};

export default Submit;
