import React from 'react'

function login() {
    return (
        <div>
            <div>
                <form>
                    <label>Username:</label><br />
                    <input type="text" placeholder="Enter username" /><br /><br />
                    <label>Password:</label><br />
                    <input type="password" placeholder="Enter password" /><br /><br />
                    <button type="submit">Login</button>
                </form>
            </div>

        </div>
    )
}

export default login
