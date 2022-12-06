import React, {useContext, useState} from 'react';
import {ethers} from 'ethers'
import contractAbi from './contractABI.json'
import { etherContext } from './contexts/EtherProvider';


function AddAdminForm() {
    const [walletAddress, setWalletAddress] = useState('');
    const [contractAddress, setContractAddress] = useState('');
    const CONTRACT_ADDRESS = "0x88054D8Df7795Be28aC50c2fea92E7043aB8AF8E";
    const { provider } = useContext(etherContext)



    const handleAddAddress = async () => {
       
        ///don't do anything if wallet address is empty
        if(!walletAddress){return}
        console.log(walletAddress)

        try {
            const {ethereum} = window;
            if(ethereum) {
                
                const signer = provider.getSigner()
                const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, signer);

                let response = await contract.addAdmin(walletAddress);
                console.log("New admin added, response: ", response);
                setWalletAddress("")
            }
        } catch (error) {
            console.log(error)
        }
    }

    const handleContractAddressAdding = async () => {
       
        ///don't do anything if wallet address is empty
        if(!contractAddress){return}
        console.log(contractAddress)

        try {
            const {ethereum} = window;
            if(ethereum) {
                
                const signer = provider.getSigner()
                const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, signer);

                let response = await contract.addContractAddress(contractAddress);
                console.log("Contract Address added, response: ", response);
                setContractAddress("")
            }
        } catch (error) {
            console.log(error)
        }
    }



    const handleSubmit = (e) => {
        e.preventDefault()
    }


    const handleRemoveAddress = async (e) => {
        if(!walletAddress){return}
    
        
        if(provider){
            const {ethereum} = window;

            try {
                if(ethereum) {
                    const signer = provider.getSigner()
                    const contract = new ethers.Contract(CONTRACT_ADDRESS, contractAbi.abi, signer);
                    let response = await contract.removeAdmin(walletAddress);
                    console.log("Admin removed, response: ", response);
                    setWalletAddress("")
                }
            } catch (error) {
                console.log(error)
            }

        } else {
          console.log("not connected")
         
        }
    }


    return (
        <div>
        <div className='admin-section'>
           <div className="only-admin">
               <h4>ADMIN</h4>
               <p>Only the contract admin can add address on this platform</p>
           </div>

           <div className="addAdmin-form">
           <h4>CONTRACT ADDRESS</h4>
        
           <form className="admin-form" onSubmit={handleSubmit}>
           
           <input
            className='address-input'
            type="text"
            value={contractAddress}
            placeholder="Enter contract address"
            required
            onChange={e => setContractAddress(e.target.value)}
            />
           <div className="form-buttons">
           <button style={{ "color":"white", "backgroundColor":"#5B7AB7"}} className="add-admin-button" onClick={handleContractAddressAdding} type="submit">
                    Add
            </button>
            </div>
           </form> 
        
           </div>
        </div>
        <div className='admin-section'>
        <div className="only-admin">
            <h4>ADMIN</h4>
            <p>Only an admin can delete or add other admins</p>
        </div>
        
        <div className="addAdmin-form">
        <h4>ADDRESS</h4>
     
        <form className="admin-form" onSubmit={handleSubmit}>
        
        <input
         className='address-input'
         type="text"
         value={walletAddress}
         placeholder="enter wallet address"
         required
         onChange={e => setWalletAddress(e.target.value)}
         />
        <div className="form-buttons">
        <button style={{ "color":"#FFD4D4", "backgroundColor":"#C61717"}} className="remove-admin-button" onClick={handleRemoveAddress} type="submit">
                 Remove Admin
         </button>
        <button style={{ "color":"white", "backgroundColor":"#5B7AB7"}} className="add-admin-button" onClick={handleAddAddress} type="submit">
                 Add Admin
         </button>
         </div>
        </form>
     
        </div>
     </div>
     </div>
    )

}

export default AddAdminForm