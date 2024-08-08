import React from 'react'

const Nav= ({ isLoggedIn, onLogin, onLogout }) => {
    return (
        
      <nav className="Navigation" style={{ height: "30px", width: "92%", backgroundColor: "#007bff", borderRadius: "10px", color: "white", padding: "30px", fontSize: "20px" }}>Navigation

      {isAuthenticated ? (

        <button onClick={logout} style={{ width: "65px", borderRadius: "5px", padding: "3px", marginLeft: "80%" }}>Logout</button>
      ) :
        (
          <button onClick={login} style={{ width: "65px", borderRadius: "5px", padding: "3px", marginLeft: "80%" }} >Login</button>
        )}

    </nav>
    );
  }

export default Nav