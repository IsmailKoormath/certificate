import React from 'react'

const Footerall = () => {
  return (
    <div>
 
      <div
        style={{
          borderTop: "1px solid black ",
          margin: " 30px 100px 0px 100px",
          // height: "1000px",
        }}
      >
        <footer
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "40px",
            padding: "0px 1px 20px 0px",
            // marginBottom: "15px",
          }}
        >
          <section className="bottom-footer">
            <div className="container" style={{ color: "black" }}>
              <p className="mb-0">Osperb © All Rights Reserved - 2022</p>
            </div>
          </section>
        </footer>
      </div>
    </div>
  );
}



export default Footerall