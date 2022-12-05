
import { useContext } from "react";
import { etherContext } from "./contexts/EtherProvider";

import Loading from "./Helper/Loading"

function Card() {
  const {provider, requestAccount} = useContext(etherContext)
  const doSomthing = async () => {
    if(provider){
        const signer = await provider.getSigner()


    } else {
      console.log("not connected")
     
    }
  }
  doSomthing()
  return (
    <div className="menu-card">
      <div className="card">
        <h4>Total Bonus</h4>
        <p>5,000</p>
        <p>ALT-TOKEN</p>
      </div>
      <div className="card">
        <h4>TOTAL SENT</h4>
        <p></p>
      </div>
      <div className="card">
        <h4>TOTAL CLAIMED</h4>
        <p></p>
      </div>
    </div>
  );
}

export default Card;
