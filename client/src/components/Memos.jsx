import { useState, useEffect } from "react";

const Memos = ({ state }) => {
  const { contract } = state;
  const [memos, setMemos] = useState([]);

  useEffect(() => {
    const memosMessage = async () => {
      const memos = await contract.getMemos(); // call getMemos() function defined in Chai.sol i.e. deployed smart contract
      setMemos(memos);
    };
    contract && memosMessage();
  }, [contract]);

  return (
    <div>
      <p
        style={{
          textAlign: "center",
          marginTop: "20px",
          fontSize: "1.5rem",
          fontWeight: "bold",
        }}
      >
        Messages
      </p>
      {memos.map((memo) => {
        return (
          <div
            className="container-fluid  table-responsive"
            style={{ width: "90%" }}
            key={Math.random()}
          >
            <table
              style={{
                marginBottom: "10px",
              }}
            >
              <tbody>
                <tr>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "100px",
                    }}
                  >
                    {memo.name}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "300px",
                    }}
                  >
                    {new Date(memo.timeStamp * 1000).toLocaleString()}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "500px",
                    }}
                  >
                    {memo.message}
                  </td>
                  <td
                    style={{
                      backgroundColor: "#96D4D4",
                      border: "1px solid white",
                      borderCollapse: "collapse",
                      padding: "7px",
                      width: "500px",
                    }}
                  >
                    {memo.from}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        );
      })}
    </div>
  );
};

export default Memos;
